/**
 * SCRIPTS FOR CORE FUNCTIONALITY
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

var editor = document.getElementById("editor");
var display_currentContext = document.getElementById("show-context");
var currentSelected;
var edit_all = false;
var auto_completions = true;
var currentContext = "No context";
var parentCurrentContext = "No context";
var currentType = "";

//Setting up highlighter
var hl = new Highlighter({ solved: "font-weight: bold; color: royalblue; opacity: 0.6;" });

//Setting up KeyInput
var key_input = new KeyInput();
window.addEventListener("keydown", key_input.addEvent);
window.addEventListener("keyup", key_input.removeEvent);

//Main loop
function mainLoop() {
	key_input.processKeys();

	if(auto_completions){
		generateOptions(child_input.value);
	} else {
		data_list.innerHTML = "";
	}

	updateSearchBar(search_bar.value);

	display_currentContext.innerHTML = "Co: " + currentContext + " | paCo: " + parentCurrentContext + " | coTy: " + currentType;

	window.requestAnimationFrame(mainLoop);
}


function collapseAll() {
	let details = document.querySelectorAll("details");
	for(let i = 0; i < details.length; i++) {
		details[i].removeAttribute("open");
	}
}

function expandAll() {
	let details = document.querySelectorAll("details");
	for(let i = 0; i < details.length; i++) {
		details[i].setAttribute("open", true);
	}
}

function refresh() {
	editor.innerHTML = parseObj(getObj(editor));
	currentSelected = document.querySelector("details");
}

function addChild(pKey) {
	let node = document.createElement("details");
	node.appendChild(document.createElement("summary"));
	node.appendChild(document.createElement("div"));
	node.childNodes[0].innerHTML = pKey + button;
	node.childNodes[0].classList.add("highlight-object");
	node.childNodes[1].classList.add("tab");
	//Blur event
	node.childNodes[0].onblur = function(e) {
		key_input.removeEdit(e.target);
	};

	//Update parent
	/**
	 * TO-DO: UPDATING THE COLOR OF THE PARENT. ONLY WAY TO KNOW WHETHER BLUE OR RED COLOR (OBJECT/ARRAY)
	 */

	currentSelected.parentElement.childNodes[1].appendChild(node);
	selectElement(node.childNodes[0], true);
	updateEvents();
}

function addValue(pValue) {
	let node = document.createElement("span");
	node.classList.add("value");
	node.innerHTML = pValue + button;
	currentSelected.removeAttribute("class");
	currentSelected.classList.add("highlight-" + getType(pValue));
	currentSelected.classList.add("selected");
	//Blur event
	node.onblur = function(e) {
		key_input.removeEdit(e.target);
	};

	
	currentSelected.parentElement.childNodes[1].appendChild(node);
	selectElement(getParent(currentSelected), true);
	updateEvents();
}

function loadFile(file) {
	let reader = new FileReader();
	//Reading file
	reader.readAsText(file);
	reader.onload = function() {
		editor.innerHTML = parseObj(JSON.parse(JSON.minify(reader.result)));
		currentSelected = document.querySelector("details");

		//Display filename
		let display = document.getElementById("show-filename");
		display.innerText = "Open: " + fileName;
		display.style.display = "inline-block";

		//Add click event listener
		editor.onclick = function(e) {
			let target = e.target;
			if(target.tagName == "HIGHLIGHT") target = target.parentElement;

			console.log(target);
			if(e.ctrlKey) {
				e.preventDefault();
				key_input.addEdit(target);
			} else {
				//NOT ALREADY SELECTED & OPEN & DOESN'T HAVE SPAN AS CHILD
				if(!target.isSameNode(currentSelected) && target.parentElement.open && target.parentElement.childNodes[1].childNodes[0].tagName != "SPAN") {
					e.preventDefault();
				}
				selectElement(target);
			}
		};

		//Register all onblur events
		let edits = document.querySelectorAll(".highlight-array, .highlight-object, .highlight-string, .highlight-boolean, .highlight-number, span.value");
		for(var i = 0; i < edits.length; i++) {
			edits[i].onblur = function(e) {
				key_input.removeEdit(e.target);
			}
		}
		updateEvents();
		hl.initialLoad();
	}
}
