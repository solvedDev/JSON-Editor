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
	}
	
	processKeys() {
		if(keys_down == undefined || keys_down.length == 0){
			
		}
		else{
			for(var i = 0; i < keys_down.length; i++){
				switch(keys_down[i]){
					case "Delete":  break;
					case "Control":  break;
					default: console.log(keys_down[i]); break;
				}
			}
		}
	}
	
	removeEvent(event) {
		keys_down.splice(keys_down.indexOf(event.key), 1);
	}
	addEvent(event) {
		if(keys_down == undefined){
			keys_down = [event.key];
		}
		else if(keys_down.indexOf(event.key) == -1){
			keys_down.push(event.key);
		}
		//event.preventDefault();
		window.key_input.processKeys();
	}

	//Special
	addEdit(pE) {
		if(pE.tagName == "SUMMARY" || pE.tagName == "SPAN"){
			pE.setAttribute("contenteditable", true);
		} else {
			console.log(pE.tagName);
		}
		
	}
	removeEdit(pE) {
		pE.setAttribute("contenteditable", false);
	}
}