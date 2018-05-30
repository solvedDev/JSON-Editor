/**
 * SCRIPTS FOR AUTO-COMPLETIONS FUNCTIONALITY
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

var data_list = document.getElementById("auto-completions");
var search_data_list = document.getElementById("search-auto-components")
var child_input = document.getElementById("child-input");
var entity_options = [ "components", "component_groups", "events", "format_version", "do_not_upgrade" ];
var last_generated_input = "";
var last_search = "";
var last_context = "";


//UPDATE SEARCH BAR
function updateSearchBar(pSearch) {
	if(last_search != pSearch) {
		last_search = pSearch;
		search_data_list.innerHTML = parseComponents(pSearch, 10, true, true);
		search_data_list.innerHTML += parseEvents(pSearch, 5, "events", true);
		search_data_list.innerHTML += parseFromArray(autoData["blocks"], pSearch, 5, "block", true);
		search_data_list.innerHTML += parseFromArray(autoData["items"], pSearch, 5, "item", true);
		search_data_list.innerHTML += parseFromArray(autoData["entities"], pSearch, 5, "entity", true);
		search_bar.setAttribute("list", "search-auto-components");
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
}



/**
 * Parse an array and return it as HTML options
 * @param {String} pArray The array to parse
 * @param {String} pSearch The search term
 * @param {Number} pLimit Maximum results
 * @param {String} pLabel The label to show (default: "")
 * @param {Boolean} pForceAll Whether you want to show all arguments -even ones already existing in the currentContext
 */
function parseFromArray(pArray, pSearch, pLimit=20, pLabel="", pForceAll=false) {
	let options = "";
	let already_existing = getArgsInContext();
	if(pForceAll) already_existing = [];

	for(var i = 0; i < pArray.length; i++) {
		if(!already_existing.contains(pArray[i]) && pArray[i].includes(pSearch) && options.split(">").length < pLimit) {
			options += "<option value='" + pArray[i] + "' label='" + pLabel + "'/>";
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
	let already_existing = getArgsInContext();
	if(pForceAll) already_existing = [];

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
	let already_existing = getArgsInContext();
	if(pForceAll) already_existing = [];

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
	let already_existing = getArgsInContext();
	if(pForceAll) already_existing = [];

	for(var argument in autoData["components"][pComponent]) {
		//argument isn't already on component & argument is part of search term & max number of suggestions not reached
		if(!already_existing.contains(argument) && argument != "__des__" && argument.includes(pSearch) && options.split(">").length < 20) {
			options += "<option value='" + argument + "'/>";
		}
	}
	if(pComponent.includes("behavior") && "priority".includes(pSearch)) {
		options += "<option value='priority'/>";
	}
	return options;
}

/**
 * Returns all arguments which already exist in the current context
 */
function getArgsInContext() {
	if(currentSelected && currentSelected.parentElement) {
		return Object.keys(getObj(currentSelected.parentElement, false));
	} else {
		return [];
	}
	
}