/**
 * SCRIPTS FOR PROVIDING THE DOCUMENTATION SEARCH FUNCTIONALITY
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

class Documentation {
	constructor() {
		
	}
	/**
	 * Opens a new documentation window
	 * @param {String} pPage The page to open (e.g. component@minecraft:interact)
	 */
	openDocumentation(pPage) {

	}

	findPage(pSearch, pDoSecondTest=false) {

	}

	getValidSearch(pSearch, pSection, pDoSecondTest=false) {

	}
}



//Manual fix for minecraft:interact
autoData["components"]["minecraft:interact"]["particle_on_start"].description = "Particle effect that will be triggered at the start of the interaction\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>particle_offset_towards_interactor</td>\n<td>Boolean</td>\n<td></td>\n<td>Whether or not the particle will appear closer to who performed the interaction</td>\n</tr><tr>\n<td>particle_type</td>\n<td>String</td>\n<td></td>\n<td>The type of particle that will be spawned</td>\n</tr><tr>\n<td>particle_y_offset</td>\n<td>Decimal</td>\n<td></td>\n<td>Will offset the particle this amount in the y direction</td>\n</tr>\n</tbody></table>";
var behavior_arguments = "<li><span style='font-weight: bold; text-decoration: underline;'>priority</span> <span class='highlight-number'>[Integer]:</span> Tells the entity which behavior has priority. A smaller number correlates to a higher priority</li>";

/** 
 * --Delete: If new class in use
 */
var search_bar = document.getElementById("search-input-bar");

function openDocumentation() {
	let doc_to_open = findPage(search_bar.value);
	let documentation_text = "";

	if(doc_to_open.split("@")[1] != "do_not_open") {
		//BUILD COMPONENT PAGE
		if(doc_to_open.split("@")[0] == "component") {
			doc_to_open = doc_to_open.split("@")[1];

			documentation_text += "<h4>" + doc_to_open + "</h4>";

			let component =  autoData.components[doc_to_open];
			documentation_text += "<p>" + component.__des__ + "</p><br>";

			if(Object.keys(component).length > 1) {
				documentation_text += "<h5>Arguments</h5>";
				documentation_text += "<ul>";
				if(doc_to_open.includes("behavior")) {
					documentation_text += behavior_arguments;
				}
				for(let argument in component) {
					if(argument != "__des__") {
						let default_value = "";
						if(component[argument].default_value != "") default_value = " (Default: " + component[argument].default_value + ")";

						documentation_text += "<li><span style='font-weight: bold; text-decoration: underline;'>" + argument 
						+ "</span> <span class='highlight-" + convertType(component[argument].type) + "'>[" + component[argument].type + "]</span>: " 
						+ component[argument].description.replace(/<a[^>]*>/g, "").replace(/Back to top/g, "") + default_value + "</li>".replace(/\n/g, "");
					}
				}
				documentation_text += "</ul>";
			} else if(doc_to_open.includes("behavior")) {
				documentation_text += "<h5>Arguments</h5><ul>" + behavior_arguments + "</ul>";
			}
		} else if(doc_to_open.split("@")[0] == "event") {
			doc_to_open = doc_to_open.split("@")[1];
			documentation_text += "<h4>" + doc_to_open + "</h4>";

			let event =  autoData.events[doc_to_open];
			documentation_text += "<p>" + event.description + "</p>";
		} else {
			documentation_text += "<h4>minecraft:" + doc_to_open.split("@")[1] + "</h4>";

			documentation_text += "<p>" + "A minecraft " + doc_to_open.split("@")[0] + "</p>";
		}

		new PopUpWindow("documentation", "90%", "90%", document.body, documentation_text, true, true).create();
	}
}

function findPage(pSearch, pDoSecondTest=false) {
	let doc_to_open = "component@" + getValidSearch(pSearch, "components", pDoSecondTest);
	if(doc_to_open == "component@do_not_open") {
		doc_to_open = "block@" + getValidSearch(pSearch, "blocks", pDoSecondTest);

		if(doc_to_open == "block@do_not_open") {
			doc_to_open = "item@" +  getValidSearch(pSearch, "items", pDoSecondTest);

			if(doc_to_open == "item@do_not_open") {
				doc_to_open = "entity@" +  getValidSearch(pSearch, "entities", pDoSecondTest);

				if(doc_to_open == "entity@do_not_open") {
					doc_to_open = "event@" +  getValidSearch(pSearch, "events", pDoSecondTest);
				}
			}
		}
	}
	if(doc_to_open.split("@")[1] == "do_not_open" && !pDoSecondTest) doc_to_open = findPage(pSearch, true);
	console.log(doc_to_open);
	return doc_to_open;
}

function getValidSearch(pSearch, pSection, pDoSecondTest=false) {
	if(pSection == "components") {
		if(pSearch in autoData["components"]){
			return pSearch;
		} else if (pDoSecondTest && search_data_list.options.length > 0 && search_data_list.options[0].value in autoData["components"]) {
			return search_data_list.options[0].value;
		} else {
			return "do_not_open"
		}
	} else if(pSection == "events") {
		if(pSearch in autoData["events"]){
			return pSearch;
		} else if (pDoSecondTest && search_data_list.options.length > 0 && search_data_list.options[0].value in autoData["events"]) {
			return search_data_list.options[0].value;
		} else {
			return "do_not_open"
		}
	} else {
		if(autoData[pSection].indexOf(pSearch) > -1){
			return pSearch;
		} else if (search_data_list.options.length > 0 && autoData[pSection].indexOf(search_data_list.options[0].value) > -1) {
			return search_data_list.options[0].value;
		} else {
			return "do_not_open"
		}
	}
}