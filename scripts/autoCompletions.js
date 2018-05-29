var data_list = document.getElementById("auto-completions");
var child_input = document.getElementById("child-input");
var entity_options = [ "components", "component_groups", "events", "format_version", "do_not_upgrade" ];
var last_search = "";
var last_context = "";
//generateOptions("");

//Turn array into options HTML
function generateOptions(pSearch) {
	if(last_search != pSearch || last_context != currentContext) {
		last_search = pSearch;
		last_context = currentContext;
		
		let i = 0;
		let found = false;
		while(i < autoConfig.length && !found) {
			if(autoConfig[i].type == "is_self") {
				//Context: currentContext
				if(currentContext == autoConfig[i].value || (Array.isArray(autoConfig[i].value) && autoConfig[i].value.indexOf(currentContext) > -1)) {
					found = true;
					createOptions(i, pSearch);
				}
			} else if(autoConfig[i].type == "is_parent") {
				//Context: parentCurrentContext
				if(parentCurrentContext == autoConfig[i].value || (Array.isArray(autoConfig[i].value) && autoConfig[i].value.indexOf(parentCurrentContext) > -1)) {
					found = true;
					createOptions(i, pSearch);
				}
			} else if(autoConfig[i].type == "is_currentContext_component") {
				//Context: Is a known component
				if(currentContext in autoData["components"]) {
					found = true;
					createOptions(i, pSearch);
				}
			}

			i++;
		}
		if(!found) data_list.innerHTML = "";
		
		//Updating HTML
		child_input.setAttribute("list", "auto-completions");
	}
}

function createOptions(pIndex, pSearch) {
	if(typeof autoConfig[pIndex].propose == "function") {
		data_list.innerHTML = autoConfig[pIndex].propose({ search: pSearch, self: currentContext, parent: parentCurrentContext})
	} else {
		data_list.innerHTML = parseFromArray(autoConfig[pIndex].propose, pSearch);
	}
}

function parseFromArray(pArray, pSearch) {
	let options = "";
	for(var i = 0; i < pArray.length; i++) {
		if(pArray[i].includes(pSearch) && options.split(">").length < 20) {
			options += "<option value='" + pArray[i] + "'/>";
		}
	}
	return options;
}

function parseEvents(pSearch) {
	let options = "";
	for(var i = 0; i < autoData["events"].length; i++) {
		if(autoData["events"][i].name.includes(pSearch) && options.split(">").length < 20) {
			options += "<option value='" + autoData["events"][i].name + "'/>";
		}
	}
	return options;
}

function parseComponents(pSearch) {
	let options = "";
	for(var component_name in autoData["components"]) {
		if(component_name.includes(pSearch) && options.split(">").length < 20) {
			options += "<option value='" + component_name + "'/>";
		}
	}
	return options;
}

function parseComponent(pComponent, pSearch) {
	let options = "";
	for(var argument in autoData["components"][pComponent]) {
		if(argument.includes(pSearch) && options.split(">").length < 20) {
			options += "<option value='" + argument + "'/>";
		}
	}
	return options;
}