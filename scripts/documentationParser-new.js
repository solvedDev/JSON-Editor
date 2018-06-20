/**
 * SCRIPTS FOR PARSING THE MINECRAFT DOCUMENTATION
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

class HTMLParser {
	constructor(pParent) {
		this.parent = pParent;
	}

	getNextTable(pElement, pFirst=true) {
		//Prevent going to far and returning wrong table (if no table was defined)
		if(!pFirst && pElement.childNodes[0] != undefined && pElement.childNodes[0].id != "" && pElement.childNodes[0].id != undefined) {
			return undefined;
		}
	
		if(pElement.nodeName == "TABLE") {
			return pElement;
		} 
		else {
			return this.getNextTable(pElement.nextSibling, pFirst=false);
		}
	}
	getNextDescription(pElement, pFirst=true) {
		//Prevent going to far and returning wrong description (if no description was defined)
		if(!pFirst && pElement.childNodes[0] != undefined && pElement.childNodes[0].id != "" && pElement.childNodes[0].id != undefined) {
			return undefined;
		}
	
		if(pElement.nodeName == "H4") {
			return pElement.nextSibling.textContent.replace(/\n/g, "");
		} 
		else {
			return this.getNextDescription(pElement.nextSibling, pFirst=false);
		}
	}
	parseTable(pTable, pCell, pStart=0, pPrefix="") {
		var array = [];
	
		for(var i = pStart; i < pTable.rows.length; i++) {
			array.push(pPrefix + pTable.rows[i].cells[pCell].innerHTML)
		}
	
		return array;
	}
}

class DocumentationParser extends HTMLParser {
	constructor(pParent) {
		super(pParent);

		this.html = document.implementation.createHTMLDocument("documentation");
		this.html.body.innerHTML = this.parent.editor.getCachedData("data/html/documentation.html");

		this.json = {};
		this.createDocumentation();
	}

	getDocumentation() {
		return this.json;
	}
	createDocumentation() {
		this.loadComponentNames();
		this.loadComponents();
		this.loadOther();
	}

	//GENERAL LOADING
	loadComponentNames() {
		let name_table = this.getNextTable(this.html.getElementById("[04]Component IDs").parentNode);
		this.json.component_names = this.parseTable(name_table, 0);
		this.json.component_names.splice(0, 2);
	}
	loadComponents() {
		let component_names = this.json.component_names;
		let components = {};

		for(let i = 0; i < component_names.length; i++) {
			components[component_names[i]] = this.getComponent(component_names[i]);
			components[component_names[i]]["__des__"] = this.getNextDescription(this.html.getElementById(component_names[i]).parentNode);
		}

		Object.assign(components, this.parent.editor.getCachedData("data/custom/additional_components.json"));
		this.json.components = components;
	}
	loadOther() {
		//Built-in events
		let events = this.parseTable(this.getNextTable(this.html.getElementById("[09]Built-in Events").parentNode), 0, 1);
		let des = this.parseTable(this.getNextTable(this.html.getElementById("[09]Built-in Events").parentNode), 1, 1);
		let tmp_events = {};
		for(let i = 0; i < events.length; i++) {
			tmp_events[events[i]] = { description: des[i] };
		}
		this.json.events = tmp_events;
	
		//Other
		this.json.entities = this.parseTable(this.getNextTable(this.html.getElementById("[10]Entities").parentNode), 0, 1);
		this.json.blocks = this.parseTable(this.getNextTable(this.html.getElementById("[11]Blocks").parentNode), 0, 1);
		this.json.blocks = this.json.blocks.filter(block => Number.isNaN(Number(block)));
		this.json.items = this.parseTable(this.getNextTable(this.html.getElementById("[12]Items").parentNode), 0, 1);
	}

	//SMALLER SCALE METHODS
	getComponent(pName) {
		var table = this.getNextTable(this.html.getElementById(pName).parentNode);
		if(!table) {
			return {};
		}
		var dict = {};
		var rows = {};
	
		var argument_names = this.parseTable(table, 0);
		rows["types"] = this.parseTable(table, 1);
		rows["default_values"] = this.parseTable(table, 2);
		rows["descriptions"] = this.parseTable(table, 3);
	
		for(var i = 1; i < argument_names.length; i++) {
			dict[argument_names[i]] = {
				"type": rows["types"][i],
				"default_value": rows["default_values"][i],
				"description": rows["descriptions"][i].replace(/<br>/g, "\n")
			}
		}
	
		return dict;
	}
}