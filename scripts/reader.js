/**
 * CONVERTS JSON INTO HTML AND HTML BACK INTO JSON
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

var button = "<button class='btn btn-outline-danger btn-xs in-tree destroy-e'><i class='fa fa-remove'></i></button>"

function parseObj(pObj) {
	var html = "<div class='tab'>";
	for(var key in pObj) {
		if(typeof pObj[key] == "object") {
			if(Array.isArray(pObj[key])) {
				html += "<details><summary contenteditable='" + edit_all + "' class='highlight-array'>" + key + button + "</summary>" + parseObj(pObj[key]) + "</details>";
			} else {
				html += "<details><summary contenteditable='" + edit_all + "' class='highlight-object'>" + key + button + "</summary>" + parseObj(pObj[key]) + "</details>";
			}
			
		} else {
			html += "<details><summary contenteditable='" + edit_all + "' class='highlight-" + typeof pObj[key]  + "'>" + key + button + "</summary><div class='tab highlight-" + typeof pObj[key]  + "'><span class='value' contenteditable='" + edit_all + "'>" + pObj[key] + button + "</span></div></details>";
		}
	}

	return html + "</div>";
}

function getObj(pHTML, pFirst=true) {
	let obj = {};
	let div;
	let key;

	//Select right element to start
	if(pFirst) {
		div = pHTML.childNodes[0].childNodes;
	} else if(pHTML.classList && pHTML.className == "value") {
		return getAsCorrectType(pHTML.innerText);
	} else {
		try {
			key = pHTML.childNodes[0].innerText;
			div = pHTML.childNodes[1].childNodes;
		} catch(e) {
			console.warn(e.name + ': ' + e.message);
			console.log(pHTML);
		}
		
	}

	//If array, change dict into array
	if(div[0] && !isNaN(Number(getKey(div[0])))) {
		obj = [];
	}

	//Parse through all elements and build the object
	for(let i = 0; i < div.length; i++) {
		let key = getKey(div[i]);
		if(key) {
			obj[key] = getObj(div[i], false);
		}
		else {
			obj = getObj(div[i], false);
		}
	}

	return obj;
}

function getAsCorrectType(pString) {
	if(pString == "false" || pString == "true") {
		return pString == "true";
	} else if(isNaN(Number(pString))) {
		return pString;
	} else {
		return Number(pString);
	}
}

function getType(pString) {
	if(pString == "false" || pString == "true") {
		return "boolean";
	} else if(isNaN(Number(pString))) {
		return "string";
	} else {
		return "number";
	}
}

function getKey(pHTML) {
	try {
		return pHTML.childNodes[0].innerText;
	} catch(e) {
		console.error(e);
		return "";
	}
}