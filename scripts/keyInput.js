/**
 * SCRIPTS FOR REGISTERING KEYINPUT
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

var keys_down;

class KeyInput {
	constructor() {
		keys_down = [];
		this.events = [];
		this.pause = 0;
		//this.currentSelected = app.tab_manager.getSelectedTab().editor.selection.currentSelected;
	}
	
	processKeys() {
		this.currentSelected = app.tab_manager.getSelectedTab().editor.selection.currentSelected;

		if(this.pause < 9) this.pause++;
		if(keys_down == undefined || keys_down.length == 0){
			
		}
		else{
			for(var i = 0; i < keys_down.length; i++){
				switch(keys_down[i]){
					case "Delete": case "Backspace": this.remove(); break;
					case "ArrowDown": this.selectNext(this.events[i]); break;
					case "ArrowUp": this.selectPrevious(this.events[i]); break;
					case "Enter": if(keys_down.join(" ") == "Enter Control" || keys_down.join(" ") == "Control Enter") this.addEdit(this.currentSelected); break;
					case "Control":  break;
					default: /*console.log(keys_down[i]);*/ break;
				}
			}
		}
	}

	removeEvent(event) {
		this.events.splice(keys_down.indexOf(event.key), 1);
		keys_down.splice(keys_down.indexOf(event.key), 1);
	}
	addEvent(event) {
		if(keys_down == undefined || this.events == undefined){
			keys_down = [event.key];
			this.events = [event];
		} else if(keys_down.indexOf(event.key) == -1){
			keys_down.push(event.key);
			this.events.push(event);
		}
		if(event.key == "ArrowUp" || event.key == "ArrowDown") event.preventDefault();
		//event.preventDefault();
		window.key_input.processKeys();
	}

	//Special
	selectNext(e) {
		//e.preventDefault();
		if(this.pause > 8 && this.currentSelected.contentEditable == "false") {
			this.pause = 0;
			selectNextOpenElement(this.currentSelected);
		}
	}
	selectPrevious(e) {
		if(this.pause > 8 && this.currentSelected.contentEditable == "false") {
			this.pause = 0;
			selectPreviousOpenElement(this.currentSelected);
		}
	}
	remove() {
		if(!isInInput() && this.pause > 8 && this.currentSelected.contentEditable == "false") {
			this.pause = 0;
			try {
				removeElement(this.currentSelected);
			}
			catch(e) {
				console.warn("No currently selected element.")
			}
		}
	}
	addEdit(pE) {
		if(pE.childNodes.length == 1) pE.insertBefore(document.createTextNode("Fix me!"), pE.firstChild);

		if(pE.tagName == "SUMMARY" || pE.tagName == "SPAN"){
			pE.setAttribute("contenteditable", true);
			//Don't delete button
			pE.childNodes[1].setAttribute("contenteditable", false);
		} else if(pE.tagName == "HIGHLIGHT") {
			pE.parentElement.setAttribute("contenteditable", true);
			//Don't delete button
			pE.parentElement.childNodes[1].setAttribute("contenteditable", false);
		} else {
			console.warn("Unable to edit " + pE.tagName);
		}
		
	}
	removeEdit(pE) {
		if(!this.currentSelected.isSameNode(pE)) pE.setAttribute("contenteditable", false);
	}
}