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
		generateValueOptions(value_input.value);
	} else {
		data_list.innerHTML = "";
	}

	updateSearchBar(search_bar.value);

	display_currentContext.innerHTML = "Co: " + currentContext + " | paCo: " + parentCurrentContext + " | coTy: " + currentType;

	window.requestAnimationFrame(mainLoop);
}


function collapseAll() {
	let loading_window = new LoadingWindow().create();

	let details = document.querySelectorAll("details");
	for(let i = 0; i < details.length; i++) {
		details[i].removeAttribute("open");
	}

	loading_window.destroy();
}

function expandAll() {
	let loading_window = new LoadingWindow().create();
	console.log('loading_window :', loading_window);
	
	let details = document.querySelectorAll("details");
	for(let i = 0; i < details.length; i++) {
		if(!details[i].getAttribute("open")) details[i].setAttribute("open", true);
	}

	loading_window.destroy();
}

function refresh() {
	let loading_window = new LoadingWindow().create();
	try {
		editor.innerHTML = parseObj(getObj(editor.childNodes[0]));
	} catch(e) {
		console.warn("Unexpected child: " + editor.childNodes[0]);
		editor.innerHTML = parseObj(getObj(editor.childNodes[1]));
	}
	
	selectElement(document.querySelector("summary"));

	loading_window.destroy();
}

function addChild(pKey) {
	let node = document.createElement("details");
	node.appendChild(document.createElement("summary"));
	node.appendChild(document.createElement("div"));
	node.childNodes[0].innerHTML = pKey + button;

	node.childNodes[1].classList.add("tab");
	node.childNodes[0].classList.add("highlight-object");
	
	//Blur event
	node.childNodes[0].onblur = function(e) {
		key_input.removeEdit(e.target);
	};

	currentSelected.parentElement.childNodes[1].appendChild(node);

	//UPDATE PARENT COLOR
	if(!Number.isNaN(Number(pKey))){
		let parent = getParent(node.childNodes[0]);
		parent.classList.remove("highlight-object");
		parent.classList.add("highlight-array");
	}
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

	currentSelected.parentElement.childNodes[1].classList.add("highlight-" + getType(pValue));
	currentSelected.parentElement.childNodes[1].appendChild(node);
	selectElement(getParent(currentSelected), true);
	updateEvents();

	//Test whether a context is fully filled
	//If that's the case: Select parent of parent
	if(auto_completions) {
		generateOptions("");
		if(data_list.options.length == 0) selectElement(getParent(currentSelected), true);
	}
}

function loadFile(pFile, pIndex, pTotal) {
	let reader = new FileReader();

	//Opening loading window if first file
	if(pIndex == 0) {
		app.loading_window = new LoadingWindow().create();
		app.tab_manager.loaded_tabs = 0;
	}
	//Required vars
	reader.file_name = pFile.name;
	reader.total = pTotal;

	//Reading file
	reader.readAsText(pFile);

	reader.onload = function() {
		try {
			app.tab_manager.addTab(this.file_name, JSON.parse(JSON.minify(reader.result)), this.total);
		} catch(e) {
			console.warn("An error occurred while trying to open a file: ");
			console.log(e.message);
			new PushMessage(document.body, "Invalid JSON!").create();
		}

		//hl.initialLoad();
	}
}
