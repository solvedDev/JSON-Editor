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
	}
	
	processKeys() {
		if(this.pause < 9) this.pause++;
		if(keys_down == undefined || keys_down.length == 0){
			
		}
		else{
			for(var i = 0; i < keys_down.length; i++){
				switch(keys_down[i]){
					case "Delete": case "Backspace": this.remove(); break;
					case "ArrowDown": this.selectNext(this.events[i]); break;
					case "ArrowUp": this.selectPrevious(this.events[i]); break;
					case "Enter": if(keys_down.join(" ") == "Enter Control" || keys_down.join(" ") == "Control Enter") this.addEdit(currentSelected); break;
					case "Control":  break;
					default: console.log(keys_down[i]); break;
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
		console.log(e);
		//e.preventDefault();
		if(this.pause > 8 && currentSelected.contentEditable == "false") {
			this.pause = 0;
			selectNextOpenElement(currentSelected);
		}
	}
	selectPrevious(e) {
		if(this.pause > 8 && currentSelected.contentEditable == "false") {
			this.pause = 0;
			selectPreviousOpenElement(currentSelected);
		}
	}
	remove() {
		if(!isInInput() && this.pause > 8 && currentSelected.contentEditable == "false") {
			this.pause = 0;
			try {
				removeElement(currentSelected);
			}
			catch(e) {
				console.warn("No currently selected element.")
			}
		}
	}
	addEdit(pE) {
		if(pE.tagName == "SUMMARY" || pE.tagName == "SPAN"){
			pE.setAttribute("contenteditable", true);
		} else if(pE.tagName == "HIGHLIGHT") {
			pE.parentElement.setAttribute("contenteditable", true);
		} else {
			console.warn("Unable to edit " + pE.tagName);
		}
		
	}
	removeEdit(pE) {
		pE.setAttribute("contenteditable", false);
	}
}