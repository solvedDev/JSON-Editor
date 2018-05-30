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

function removeElement(pElement) {
	if(pElement.tagName == "I") pElement = pElement.parentElement;
	if(true || window.confirm("Are you sure you want to delete the element " + pElement.parentElement.innerHTML.split("<")[0] + "?")) {
		//Remove element  |  button - summary/span -   details
		let remove_element = pElement.parentElement.parentElement;
		//Context  |  button - summary/span -   details    -  div
		let context = pElement.parentElement.parentElement.parentElement;
		console.log(context, remove_element);
		context.removeChild(remove_element);

		//Readd div if it got removed & select new element
		console.log(remove_element.childNodes[0].tagName);
		if(context.childNodes.length == 1 && remove_element.childNodes[0].tagName == "SPAN") {
			let div = document.createElement("DIV");
			div.classList.add("tab");
			context.appendChild(div);
			selectElement(context.childNodes[0], true);
		} else if(context.childNodes.length > 0) {
			selectElement(context.childNodes[0].childNodes[0], true);
		} else {
			selectElement(context.parentElement.childNodes[0], true);
		}
	}
}

function updateEvents() {
	let btns = document.querySelectorAll(".destroy-e");
	for(var i = 0; i < btns.length; i++) {
		btns[i].onclick = function(e) {
			removeElement(e.target);
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

//EXPECTS SUMMARY
function getParent(pE) {
	let candidate = pE.parentElement.parentElement.parentElement.childNodes[0];
	if(candidate.tagName == "SUMMARY") return candidate;
}

//EXPECTS SUMMARY
function selectElement(pE, pOpen=false) {
	console.log(pE.tagName);

	if(pE.tagName == "SUMMARY") {
		let childs = pE.parentElement.childNodes[1].childNodes;

		if(childs.length == 0 || childs.length > 0 && childs[0].tagName != "SPAN") {
			currentSelected.classList.remove("selected");
			currentSelected = pE;
			pE.classList.add("selected");
			//Update context
			currentContext = currentSelected.innerText;
			if(getParent(currentSelected)) {
				parentCurrentContext = getParent(currentSelected).innerText;
			} else {
				parentCurrentContext = "No context"
			}

			if(pOpen) currentSelected.parentElement.setAttribute("open", true);
		}
	}
}