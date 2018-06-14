/**
 * SCRIPTS FOR AUTO-COMPLETIONS FUNCTIONALITY
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

/*var data_list = document.getElementById("auto-completions");
var value_list = document.getElementById("value-auto-completions");
var search_data_list = document.getElementById("search-auto-components")
var child_input = document.getElementById("child-input");
var value_input = document.getElementById("value-input");
var entity_options = [ "components", "component_groups", "events", "format_version", "do_not_upgrade" ];
var last_generated_input = "";
var last_search = "";
var last_context = "";
var last_value_search = "xx";


//UPDATE SEARCH BAR
function updateSearchBar(pSearch) {
	if(last_search != pSearch) {
		last_search = pSearch;
		search_data_list.innerHTML = parseComponents(pSearch, 10, true, true)
			+ parseEvents(pSearch, 5, "events", true)
			+ parseFromArray(autoData["blocks"], pSearch, 5, "block", true)
			+ parseFromArray(autoData["items"], pSearch, 5, "item", true)
			+ parseFromArray(autoData["entities"], pSearch, 5, "entity", true);
		
		search_bar.setAttribute("list", "search-auto-components");
	}
}

//Generate auto-completions for values
function generateValueOptions(pSearch, pForce=false) {
	if(last_value_search != pSearch || pForce) {
		last_value_search = pSearch;

		if(currentType == "boolean") {
			value_list.innerHTML = "<option value='true'/><option value='false'/>";
		} else if (currentType == "number" ||  currentContext == "priority") {
			let default_value = Number(getDefault(currentContext, parentCurrentContext));
			console.log(default_value);
			if(default_value == "") default_value = 0;

			let options = "<option value='" + default_value + "'/>";
			for(let i = 1; i < 10; i++) {
				options += "<option value='" + (default_value + i) + "'/>";
			}
			value_list.innerHTML = options;
		} else if(currentType== "event") {
			let obj = getObj(editor)["minecraft:entity"];
			if(obj != undefined) {
				value_list.innerHTML = "";
				for(let event in obj["events"]) {
					value_list.innerHTML += "<option value='" + event + "'/>"
				}
			}
		} else if(currentType == "component_group") {
			let obj = getObj(editor)["minecraft:entity"];
			if(obj != undefined) {
				value_list.innerHTML = "";
				for(let event in obj["component_groups"]) {
					value_list.innerHTML += "<option value='" + event + "'/>"
				}
			}
		} else if(currentType == "subject") {
			value_list.innerHTML = parseFromArray(["self", "other", "target", "player", "parent"], pSearch, 20, "subject", true);
		} else if(currentType == "entity") {
			value_list.innerHTML = parseFromArray(autoData["entities"], pSearch, 20, "entity", true, "minecraft:");
		} else if(currentType == "item") {
			value_list.innerHTML = parseFromArray(autoData["items"], pSearch, 10, "item", true, "minecraft:");
			value_list.innerHTML += parseFromArray(autoData["blocks"], pSearch, 10, "block", true, "minecraft:");
		} else if (currentType == "string") {
			value_list.innerHTML = "<option value='" + getDefault(currentContext, parentCurrentContext) + "'/>";
		} else {
			console.warn("Unhandled type: " + currentType);
		}
	}
}

//Evaluate possible suggestions (depending on the config criteria)
function generateOptions(pSearch) {
	if(last_generated_input != pSearch || last_context != currentContext) {
		last_generated_input = pSearch;
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
			} else if(autoConfig[i].type == "self_contains_but_is_not") {
				//Context: Contains but is not -self
				if(currentContext.includes(autoConfig[i].value) && currentContext != autoConfig[i].value) {
					found = true;
					createOptions(i, pSearch);
				}
			} else if(autoConfig[i].type == "parent_contains_but_is_not") {
				//Context: Contains but is not -parent
				if(parentCurrentContext.includes(autoConfig[i].value) && parentCurrentContext != autoConfig[i].value) {
					found = true;
					createOptions(i, pSearch);
				}
			} else if(autoConfig[i].type == "is_self_type") {
				//Context: Contains but is not -parent
				if(currentType == autoConfig[i].value) {
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
//Evaluate the "propose" argument
function createOptions(pIndex, pSearch) {
	if(typeof autoConfig[pIndex].propose == "function") {
		data_list.innerHTML = autoConfig[pIndex].propose({ search: pSearch, self: currentContext, parent: parentCurrentContext})
	} else {
		data_list.innerHTML = parseFromArray(autoConfig[pIndex].propose, pSearch);
	}
}*/



/**
 * Parse an array and return it as HTML options
 * @param {String} pArray The array to parse
 * @param {String} pSearch The search term
 * @param {Number} pLimit Maximum results
 * @param {String} pLabel The label to show (default: "")
 * @param {Boolean} pForceAll Whether you want to show all arguments -even ones already existing in the currentContext
 */
function parseFromArray(pArray, pSearch, pLimit=20, pLabel="", pForceAll=false, pPrefix="") {
	let options = "";
	let already_existing = getArgsInContext(pForceAll);

	for(var i = 0; i < pArray.length; i++) {
		if(!already_existing.contains(pArray[i]) && pArray[i].includes(pSearch) && options.split(">").length < pLimit) {
			options += "<option value='" + pPrefix + pArray[i] + "' label='" + pLabel + "'/>";
		}
	}
	return options;
}

/**
 * Parse all events and return them as HTML options
 * @param {String} pSearch The search term
 * @param {Number} pLimit Maximum results
 * @param {Boolean} pGenerateLabel Whether you want to show a label saying "event"
 * @param {Boolean} pForceAll Whether you want to show all arguments -even ones already existing in the currentContext
 */
function parseEvents(pSearch, pLimit=20, pGenerateLabel=false, pForceAll=false) {
	let options = "";
	let already_existing = getArgsInContext(pForceAll);

	for(var event in autoData["events"]) {
		//event isn't on entity & event_name is part of search term & max number of suggestions not reached
		if(!already_existing.contains(event) && event.includes(pSearch) && options.split(">").length < pLimit) {
			if(!pGenerateLabel) options += "<option value='" + event + "'/>";
			if(pGenerateLabel) options += "<option value='" + event + "' label='event'/>";
		}
	}
	return options;
}

/**
 * Parse all component names and return them as HTML options
 * @param {String} pSearch The search term
 * @param {Number} pLimit Maximum results
 * @param {Boolean} pGenerateLabel Whether you want to show a label saying "component"
 * @param {Boolean} pForceAll Whether you want to show all arguments -even ones already existing in the currentContext
 */
function parseComponents(pSearch, pLimit=20, pGenerateLabel=false, pForceAll=false) {
	let options = "";
	let already_existing = getArgsInContext(pForceAll);

	for(var component_name in autoData["components"]) {
		//component isn't on entity & component_name is part of search term & max number of suggestions not reached
		if(!already_existing.contains(component_name) && component_name.includes(pSearch) && options.split(">").length < pLimit) {
			if(!pGenerateLabel) options += "<option value='" + component_name + "'/>";
			if(pGenerateLabel) options += "<option value='" + component_name + "' label='component'/>";
		}
	}
	return options;
}

/**
 * Parse all arguments of a specific component and return them as HTML options
 * @param {String} pComponent The component to be evaluated
 * @param {String} pSearch The search term
 * @param {Number} pLimit Maximum results
 * @param {Boolean} pForceAll Whether you want to show all arguments -even ones already existing in the currentContext
 */
function parseComponent(pComponent, pSearch, pForceAll=false) {
	let options = "";
	console.log(pForceAll);
	let already_existing = getArgsInContext(pForceAll);

	if(pComponent.includes("behavior") && "priority".includes(pSearch) && (pForceAll || !already_existing.contains("priority"))) {
		options += "<option value='priority'/>";
	}
	for(var argument in autoData["components"][pComponent]) {
		//argument isn't already on component & argument is part of search term & max number of suggestions not reached
		if(!already_existing.contains(argument) && argument != "__des__" && argument.includes(pSearch) && options.split(">").length < 20) {
			options += "<option value='" + argument + "'/>";
		}
	}
	return options;
}

function parseArray() {
	let childs = currentSelected.parentElement.childNodes[1].childNodes;
	return "<option value='" + childs.length + "'>";
}

/**
 * Returns all arguments which already exist in the current context
 */
function getArgsInContext(pForceAll=false) {
	if(!pForceAll && currentSelected && currentSelected.parentElement) {
		return Object.keys(getObj(currentSelected.parentElement, false));
	} else {
		return [];
	}
}