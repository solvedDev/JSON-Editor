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

//Setting up KeyInput
//var key_input = new KeyInput();
//window.addEventListener("keydown", key_input.addEvent);
//window.addEventListener("keyup", key_input.removeEvent);

//Main loop
function mainLoop() {
	//key_input.processKeys();

	/*if(auto_completions){
		generateOptions(child_input.value);
		generateValueOptions(value_input.value);
	} else {
		data_list.innerHTML = "";
	}

	updateSearchBar(search_bar.value);*/

	//display_currentContext.innerHTML = "Path: " + app.tab_manager.getSelectedTab().editor.path.getPath() + " | coTy: " + currentType;

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