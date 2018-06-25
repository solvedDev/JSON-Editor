/**
 * CONVERTS JS objects INTO HTML AND HTML BACK INTO JS objects
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

class Parser {
	constructor() {
		this.btn = "<button class='btn btn-outline-danger btn-xs in-tree destroy-e'><i class='fa fa-remove'></i></button>";
	}

	/**
	 * Turns a JS object into HTML	
	 * @param {Object} pObj The object to turn into a HTML tree
	 * @returns {String} HTML string
	 */
	parseObj(pObj, pOuterDiv=true) {
		let html = "";
		if(pOuterDiv) {
			html = "<div class='tab'>";
		} 
		
		for(let key in pObj) {
			if(typeof pObj[key] == "object") {
				if(Array.isArray(pObj[key])) {
					html += "<details><summary class='highlight-array'>" + key + this.btn + "</summary>" + this.parseObj(pObj[key]) + "</details>";
				} else {
					html += "<details><summary class='highlight-object'>" + key + this.btn + "</summary>" + this.parseObj(pObj[key]) + "</details>";
				}
				
			} else if(typeof pObj[key] != "function") {
				html += "<details><summary class='highlight-" + typeof pObj[key]  + "'>" + key + this.btn + "</summary><div class='tab highlight-" + typeof pObj[key]  + "'><span class='value'>" + pObj[key] + this.btn + "</span></div></details>";
			}
		}

		if(pOuterDiv) {
			return html + "</div>";
		}
		return html;
	}
	/**
	 * Get HTML tree representation of JSON as JS object
	 * @param {Node} pHTML The node to parse into an object
	 * @param {Boolean} pFirst Whether the node is the editor node 
	 * @returns {Object} JS object (parseable into JSON)
	 */
	getObj(pHTML, pFirst=true) {
		let obj = {};
		let div;
		let key;
	
		//Select right element to start
		if(pFirst) {
			div = pHTML.childNodes[0].childNodes;
		} else if(pHTML.classList && pHTML.className == "value") {
			return this.getAsCorrectType(pHTML.innerText);
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
		if(div[0] && !isNaN(Number(this.getKey(div[0])))) {
			obj = [];
		}
	
		//Parse through all elements and build the object
		for(let i = 0; i < div.length; i++) {
			let key = this.getKey(div[i]);
			if(key) {
				obj[key] = this.getObj(div[i], false);
			}
			else {
				obj = this.getObj(div[i], false);
			}
		}
	
		return obj;
	}

	/**
	 * Get the type of a string
	 * @param {String} pString String to evaluate
	 * @returns {String} "string", "boolean", "number"
	 */
	getType(pString) {
		if(pString == "false" || pString == "true") {
			return "boolean";
		} else if(isNaN(Number(pString))) {
			return "string";
		} else {
			return "number";
		}
	}
	/**
	 * Returns the key of an object
	 * @param {Node} pHTML Node (expects "DETAILS") and returns content of SUMMARY, therefor the key of an object
	 * @returns {String} Key
	 */
	getKey(pNode) {
		try {
			return pNode.childNodes[0].innerText;
		} catch(e) {
			console.error(e);
			return "";
		}
	}
	/**
	 * Convert a string into a boolean or number
	 * @param {String} pString String to convert
	 * @returns pString as number, boolean or string
	 */
	getAsCorrectType(pString) {
		if(pString == "false" || pString == "true") {
			return pString == "true";
		} else if(isNaN(Number(pString))) {
			return pString;
		} else {
			return Number(pString);
		}
	}
}