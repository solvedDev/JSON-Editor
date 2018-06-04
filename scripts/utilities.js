/**
 * COLLECTION OF UTILITIES
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

String.prototype.insert = function (pString, pIndex) {
	if (pIndex > 0)
	  return this.substring(0, pIndex) + pString + this.substring(pIndex, this.length);
	else
	  return pString + this;
};

String.prototype.removeCharAtIndex = function (pIndex) {
	return this.substring(0, pIndex - 1) + this.substring(pIndex, this.length);
};

Array.prototype.contains = function(pValue) {
	return this.indexOf(pValue) > -1;
}

Array.prototype.removeStrings = function(pStrings) {
	if(Array.isArray(pStrings)) {
		for(let i = 0; i < pStrings.length; i++) {
			let index = this.indexOf(pStrings[i]);
			if (index !== -1) {
				this.splice(index, 1);
			}
		}
		return pStrings;
	} else {
		let index = this.indexOf(pStrings);
		if (index !== -1) {
			return this.splice(index, 1);
		}
	}
}

if( typeof Array.isArray !== 'function' ) {
	Array.isArray = function( arr ) {
		return Object.prototype.toString.call( arr ) === '[object Array]';
	};
}

function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
  
	element.style.display = 'none';
	document.body.appendChild(element);
  
	element.click();
	
	document.body.removeChild(element);
}

function updateEvents() {
	let btns = document.querySelectorAll(".destroy-e");
	for(var i = 0; i < btns.length; i++) {
		btns[i].onclick = function(e) {
			removeElement(e.target.parentElement);
		}
	}
}

function toggleEdits() {
	let edits = document.querySelectorAll(".highlight-array, .highlight-object, .highlight-string, .highlight-boolean, .highlight-number, span.value");

	edit_all = !edit_all;
	let display = document.getElementById("allow-edit");
	if(edit_all) {
		display.classList.add("toggled");
		display.innerText = "Edit all: ON"
	} else {
		display.classList.remove("toggled");
		display.innerText = "Edit all: OFF"
	}

	for(var i = 0; i < edits.length; i++) {
		edits[i].setAttribute("contenteditable", edit_all);
	}
}

function isInInput() {
	return document.activeElement.isSameNode(child_input) || document.activeElement.isSameNode(value_input) || document.activeElement.isSameNode(search_bar);
}

function convertType(pType) {
	if(pType.toLowerCase() == "string" || pType.toLowerCase() == "boolean") {
		return pType.toLowerCase();
	} else if(pType.toLowerCase() == "json object" || pType.toLowerCase() == "minecraft filter") {
		return "object";
	} else if(pType.toLowerCase() == "list" || pType.toLowerCase() == "range [a, b]" || pType.toLowerCase() == "vector [a, b, c]") {
		return "array";
	} else if(pType.toLowerCase() == "decimal" || pType.toLowerCase() == "integer") {
		return "number";
	} else {
		console.warn("Unhandled argument type: " + pType);
		return pType;
	}
}

function getContextType(pContext, pParentContext) {
	if(pContext in autoData["components"]) {
		return "object";
	} else if(pContext == "event" || pContext == "spawn_event") {
		return "event";
	} else if(parentCurrentContext == "component_groups" && !Number.isNaN(currentContext)) {
		return "component_group";
	} else if((pParentContext == "remove" || pParentContext == "add") && pContext == "component_groups") {
		return "array";
	} else if(pContext == "id" || pContext == "entity_type" || pContext == "into" || pContext == "babyType" || pContext == "spawn_entity") {
		return "entity";
	} else if(pContext == "target" || pContext == "subject") {
		return "subject";
	} else if(pParentContext.toLowerCase().includes("item") || (pContext.toLowerCase().includes("item") && (autoData["components"][pParentContext] == undefined || autoData["components"][pParentContext][pContext] == undefined || convertType(autoData["components"][pParentContext][pContext].type) == "string") &&  !pContext.toLowerCase().includes("items"))) {
		return "item";
	} else if(autoData["components"][pParentContext] != undefined && pContext in autoData["components"][pParentContext]) {
		return convertType(autoData["components"][pParentContext][pContext].type);
	} else {
		return "object";
	}
}

function getDefault(pContext, pParentContext) {
	try {
		if(pContext == "priority") return 0;
		return autoData["components"][pParentContext][pContext].default_value;
	} catch(e) {
		console.warn("Context \"" + pParentContext + "." + pContext + " has no default_value")
	}
}

//EXPECTS SUMMARY
function getParent(pE) {
	try {
		let candidate = pE.parentElement.parentElement.parentElement.childNodes[0];
		if(candidate.tagName == "SUMMARY") return candidate;
	} catch(e) {
		console.warn("No parent found");
		console.log(pE);
		return undefined;
	}
}

//Remove an element: Returns whether new element was selected
function removeElement(pElement) {
	if(pElement.tagName == "BUTTON") pElement = pElement.parentElement;
	if(true || window.confirm("Are you sure you want to delete the element " + pElement.innerHTML.split("<")[0] + "?")) {
		//Remove element  |  summary/span -   details
		let remove_element = pElement.parentElement;
		//Context  |  summary/span -   details    -  div
		let context = pElement.parentElement.parentElement;
		console.log(context, remove_element);
		context.removeChild(remove_element);

		//Readd div if it got removed & select new element
		console.log(remove_element.childNodes[0].tagName);
		if(context.childNodes.length == 1 && remove_element.childNodes[0].tagName == "SPAN") {
			let div = document.createElement("DIV");
			div.classList.add("tab");
			context.appendChild(div);
			if(currentSelected.isSameNode(pElement)) return selectElement(context.childNodes[0], true);
		} else if(context.childNodes.length > 0 && currentSelected.isSameNode(pElement)) {
			return selectElement(context.childNodes[0].childNodes[0], true);
		} else if(currentSelected.isSameNode(pElement)) {
			return selectElement(context.parentElement.childNodes[0], true);
		}
	}
	return false;
}

//EXPECTS SUMMARY
function selectElement(pE, pOpen=false) {
	console.log(pE.tagName);

	if(pE.tagName == "SUMMARY") {
		let childs = pE.parentElement.childNodes[1].childNodes;

		if(childs.length == 0 || childs.length > 0 && childs[0].tagName != "SPAN") {
			//HANDLE OLD SELECTED
			currentSelected.classList.remove("selected");
			if(currentSelected.tagName == "SUMMARY") hl.highlight(currentSelected);

			//PREPARE NEW SELECTED
			currentSelected = pE;
			pE.classList.add("selected");
			pE.focus();
			pE.scrollIntoView();
			
			//Update context
			currentContext = currentSelected.innerText;
			if(getParent(currentSelected)) {
				parentCurrentContext = getParent(currentSelected).innerText;
			} else {
				parentCurrentContext = "No context"
			}
			//UPDATE TYPE && EVALUATE IT
			currentType = getContextType(currentContext, parentCurrentContext);
			if(currentType == "object" || currentType == "array") {
				value_list.innerHTML = "";
			} else {
				generateValueOptions("", true);
			}

			//UPDATE INPUT
			autoFillChildInput();

			if(pOpen) currentSelected.parentElement.setAttribute("open", true);
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

function selectNextOpenElement(pElement) {
	let next_childs = pElement.parentElement.childNodes[1].childNodes;
	let next_siblings = [];
	let counter = 0;
	let start;

	//Tryng to select a child if the element is open
	if(pElement.parentElement.open && next_childs[0] != undefined) {
		while(!selectElement(next_childs[counter].childNodes[0]) && counter < next_childs.length-1) {
			counter++;
		}
	}

	//Trying to select a sibling
	if(counter == next_childs.length-1 || !pElement.parentElement.open || next_childs[0] == undefined) {
		next_siblings = pElement.parentElement.parentElement.childNodes;
		start = findSelf(next_siblings, pElement.parentElement);
		
		//Only if own node was found
		if(start != undefined) {
			counter = start+1;
			while(counter < next_siblings.length && !selectElement(next_siblings[counter].childNodes[0])) {
				counter++;
			}
		}
	} 

	if(counter == next_siblings.length) {
		//                           SELF           SIBLINGS                    PARENTS
		//                 summary -   details   -     div     -   details   -     div 
		let next_parents = pElement.parentElement.parentElement.parentElement.parentElement.childNodes;
		start = findSelf(next_parents, pElement.parentElement.parentElement.parentElement);
		console.log(start, next_parents);
		counter = start+1;
		while(counter < next_parents.length && !selectElement(next_parents[counter].childNodes[0])){
			counter++;
		}
	}
}

function selectPreviousOpenElement(pElement) {
	let previous_childs = pElement.parentElement.childNodes[1].childNodes;
	let next_siblings = [];
	let counter = 0;
	let start;
	let found = false;

	//PARSE SIBLINGS
	next_siblings = pElement.parentElement.parentElement.childNodes;
	start = findSelf(next_siblings, pElement.parentElement);
	//Only if own node was found
	if(start != undefined) {
		counter = start-1;
		while(counter >= 0 && !found) {
			//If open, try to select childs
			if(next_siblings[counter].open) {
				let next_childs = next_siblings[counter].childNodes[1].childNodes;
				let counter2 = next_childs.length-1;
				while(counter2 >= 0 && !found) {
					if(!found) found = selectElement(next_childs[counter2].childNodes[0]);
					counter2--;
				}
			}
			//If unable to select a child, try to select self
			if(!found) found = selectElement(next_siblings[counter].childNodes[0]);
			counter--;
		}
	}

	//Parse parents
	if(!found) {
		//                           SELF           SIBLINGS                    PARENTS
		//                 summary -   details   -     div     -   details   -     div 
		let next_parents = pElement.parentElement.parentElement.parentElement.parentElement.childNodes;
		start = findSelf(next_parents, pElement.parentElement.parentElement.parentElement);
		console.log(start, next_parents);
		counter = start;
		while(counter >= 0 && !selectElement(next_parents[counter].childNodes[0])){
			counter--;
		}
	}
}

function findSelf(pElements, pSelf) {
	let counter = 0;
	while(counter < pElements.length && !pElements[counter].isSameNode(pSelf)) {
		counter++;
	}
	if(counter < pElements.length) return counter;
	return undefined;
}

function autoFillChildInput() {
	generateOptions("");
	if(data_list.options.length > 0){
		child_input.value = data_list.options[0].value;
	} else {
		child_input.value = "";
	}
}