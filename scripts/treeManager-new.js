class TreeManager {
	constructor(pEditor) {
		//Destroy button
		this.btn = "<button class='btn btn-outline-danger btn-xs in-tree destroy-e'><i class='fa fa-remove'></i></button>";
		
		//Save parent
		this.editor = pEditor;
		this.node_system = new NodeSystem();
	}
	/**
	 * Selects the given summary
	 * @param {Node} pElement The element to select
	 * @returns {Boolean} Whether the selection was successful
	 */
	selectElement(pElement, pOpen=false) {
		if(pElement.nodeName == "SUMMARY" || pElement.nodeName == "SPAN") {
			let selection = this.editor.selection;

			//Handle old currentSelected
			if(selection.currentSelected != undefined && selection.currentSelected != "") {
				selection.currentSelected.classList.remove("selected");
				hl.highlight(selection.currentSelected);
			}

			//Handle new selected
			selection.currentSelected = pElement;
			pElement.classList.add("selected");
			pElement.focus();
			pElement.scrollIntoView();
			selection.path = this.getNewPath(pElement);

			//Update context
			selection.currentContext = selection.currentSelected.innerText;
			if(this.node_system.hasParent(selection.currentSelected)) {
				selection.parentCurrentContext = this.node_system.getParent(selection.currentSelected).innerText;
			} else {
				selection.parentCurrentContext = "No context"
			}
			//UPDATE TYPE && EVALUATE IT
			selection.currentType = getContextType(currentContext, parentCurrentContext);
			if(currentType == "object" || currentType == "array") {
				value_list.innerHTML = "";
			} else {
				generateValueOptions("", true);
			}

			//UPDATE INPUT
			autoFillChildInput();

			if(pOpen) selection.currentSelected.parentElement.setAttribute("open", true);
			this.editor.selection = selection;
			return true;

		} else {
			return false;
		}
	}
	/**
	 * Selects the next open element
	 */
	selectNextOpenElement() {
		let node = this.editor.selection.currentSelected;
		if(node.tagName == "SPAN"){
			node = node.firstChild;
		}

		if(node.parentElement != undefined && node.parentElement.open && this.node_system.hasChilds(node)) {
			let first_child = this.node_system.getChilds(node)[0];
			if(first_child.nodeName == "#text") {
				first_child = this.node_system.getChilds(node)[0].parentElement;
			}
			if(this.selectElement(first_child)) {
				return true;
			} else {
				let next_sibling = this.node_system.getNextSibling(node);
				if(next_sibling != undefined && this.selectElement(next_sibling)) {
					return true;
				} else {
					let next_parent_sibling = this.node_system.getNextSibling(this.node_system.getParent(node));
					if(next_parent_sibling != undefined && this.selectElement(next_parent_sibling)) {
						return true;
					}
				}
			}
		} else {
			let next_sibling = this.node_system.getNextSibling(node);
			if(next_sibling != undefined && this.selectElement(next_sibling)) {
				return true;
			} else {
				let parent = this.node_system.getParent(node);
				if(parent != null) {
					let next_parent_sibling = this.node_system.getNextSibling(parent);
					if(next_parent_sibling != undefined && this.selectElement(next_parent_sibling)) {
						return true;
					}
				}
			}
		}
		return false;
	}
	/**
	 * Selects the previous open element
	 */
	selectPreviousOpenElement() {
		let node = this.editor.selection.currentSelected;
		console.log(node.tagName);
		if(node.tagName == "SPAN"){
			node = node.firstChild;
		}
		let previous_sibling = this.node_system.getPreviousSibling(node);
		if(previous_sibling != undefined && previous_sibling.parentElement != undefined && previous_sibling.parentElement.open && this.node_system.hasChilds(previous_sibling)) {
			let childs = this.node_system.getChilds(previous_sibling);
			let last_child = childs[childs.length-1];
			if(last_child.nodeName == "#text") {
				last_child = childs[childs.length-1].parentElement;
			}
			if(this.selectElement(last_child)) {
				return true;
			} else {
				if(previous_sibling != undefined && this.selectElement(previous_sibling)) {
					return true;
				} else {
					let previous_parent_sibling = this.node_system.getPreviousSibling(this.node_system.getParent(node));
					if(previous_parent_sibling != undefined && this.selectElement(previous_parent_sibling)) {
						return true;
					}
				}
			}
		} else {
			if(previous_sibling != undefined && this.selectElement(previous_sibling)) {
				return true;
			} else {
				let parent = this.node_system.getParent(node);
				if(parent != undefined && this.selectElement(parent)) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * @returns {String} The new path to the key
	 */
	getNewPath(pNode) {
		if(this.node_system.hasParent(pNode)) {
			return this.getNewPath(this.node_system.getParent(pNode)) + "/" + pNode.innerText;
		} else {
			return pNode.innerText;
		}
	}

	/**
	 * Always expects summaries
	 * @param {String} pKey The key to add (e.g. 'minecraft:attack')
	 * @param {Node} pParent The parent node
	 */
	addElement(pKey, pParent) {
		if(this.isValidParent(pParent)) {
			let div_parent = pParent.parentElement.childNodes[1];

			let node = document.createElement("details");
			node.appendChild(document.createElement("summary"));
			node.appendChild(document.createElement("div"));
			node.childNodes[0].innerHTML = pKey + this.btn;
			node.childNodes[0].classList.add("highlight-object");
			node.childNodes[1].classList.add("tab");

			div_parent.appendChild(node);

			//Blur event
			node.childNodes[0].onblur = function(e) {
				key_input.removeEdit(e.target);
			};
			//UPDATE PARENT COLOR
			if(!Number.isNaN(Number(pKey))){
				let parent = getParent(node.childNodes[0]);
				parent.classList.remove("highlight-object");
				parent.classList.add("highlight-array");
			}
			//Select new child & update detsroy buttons
			this.selectElement(node.childNodes[0], true);
			this.updateEvents(node);
		} else {
			new PopUpWindow("invalid-parent", "80%", "20%", document.body, "You cannot add \"" + pKey + "\" here.", true, true).create();
		}
	}

	/**
	 * Evaluates whether a node is a valid parent
	 * @param {Node} pNode The parent to test
	 * @returns {Boolean} Whether the node is a valid parent
	 */
	isValidParent(pNode) {
		if(pNode != undefined && pNode.tagName == "SUMMARY") {
			let childs = pNode.parentElement.childNodes[1].childNodes;
			if(childs[0] == undefined || childs[0].tagName != "SPAN") {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	/**
	 * Updates the events in the handed scope
	 * @param {Node} pScope The scope in which all button events shall be updated
	 */
	updateEvents(pScope=document) {
		let btns = pScope.querySelectorAll(".destroy-e");
		for(var i = 0; i < btns.length; i++) {
			btns[i].onclick = function(e) {
				removeElement(e.target.parentElement);
			}
		}
	}
}

/**
 * Provides methods to simplify the tree navigation. 
 * ! All methods are expecting 'SUMMARY' nodes !
 */
class NodeSystem {
	/**
	 * Returns the parent of a node
	 * @param {Node} pNode The node to get the parent from
	 * @returns {Node} Parent of the given node or undefined
	 */
	getParent(pNode) {
		try {
			return pNode.parentElement.parentElement.parentElement.childNodes[0];
		} catch(e) {
			console.warn("Unexpected node structure: Called .parentElement on undefined.");
			return undefined;
		}
	}
	/**
	 * Returns childs of a node
	 * @param {Node} pNode The node to get the children from
	 * @returns {Array<Node>} Returns array of 'SUMMARY' nodes
	 */
	getChilds(pNode, pExludeSelf=false) {
		let childs = pNode.parentElement.childNodes[1].childNodes;
		let sum_childs = [];
		childs.forEach(child => {
			sum_childs.push(child.firstChild);
		}, this);

		return sum_childs;
	}
	/**
	 * Returns siblings of a node
	 * @param {Node} pNode The node to get the siblings from
	 * @param {Boolean} pIncludeSelf Whether to count the handed node as a sibling
	 * @returns {Array<Node>} Returns array of 'SUMMARY' nodes
	 */
	getSiblings(pNode, pIncludeSelf=false) {
		let siblings = pNode.parentElement.parentElement.childNodes;
		let sum_siblings = [];
		siblings.pNode = pNode;

		siblings.forEach(sibling => {
			try {
				if(pIncludeSelf || !sibling.firstChild.isSameNode(pNode)) {
					sum_siblings.push(sibling.firstChild);
				}
			} catch(e) {
				console.warn("Undefined sibling!");
			}
			
		}, this);

		return sum_siblings;
	}

	/**
	 * Tests whether a node has a parent
	 * @param {Node} pNode The node to test for a parent
	 * @returns {Boolean}
	 */
	hasParent(pNode) {
		return this.getParent(pNode) != undefined && this.getParent(pNode).tagName == "SUMMARY";
	}
	/**
	 * Tests whether a node has childs
	 * @param {Node} pNode The node to test for childs
	 * @returns {Boolean}
	 */
	hasChilds(pNode) {
		return this.getChilds(pNode).length > 0;
	}
	/**
	 * Tests whether a node has siblings
	 * @param {Node} pNode The node to test for siblings
	 * @returns {Boolean}
	 */
	hasSiblings(pNode) {
		return this.getSiblings(pNode).length > 0;
	}

	/**
	 * TODO: Description
	 */
	getNextSibling(pNode) {
		if(this.hasSiblings(pNode)) {
			let siblings = this.getSiblings(pNode, true);
			let index = this.findSelf(siblings, pNode);
			if(index != undefined && index < siblings.length) return siblings[index+1];
		}
	}

	/**
	 * TODO: Description
	 */
	getPreviousSibling(pNode) {
		if(this.hasSiblings(pNode)) {
			let siblings = this.getSiblings(pNode, true);
			let index = this.findSelf(siblings, pNode);
			if(index != undefined && index > 0) return siblings[index-1];
		}
	}

	/**
	 * @param {Array<Node>} pElements The node list to interate over
	 * @param {Node} pSelf The element to find
	 * @returns {Number} Index of pSelf in pElements
	 */
	findSelf(pElements, pSelf) {
		try {
			let counter = 0;
			while(counter < pElements.length && !pElements[counter].isSameNode(pSelf)) {
				counter++;
			}
			if(counter < pElements.length) return counter;
			return undefined;
		} catch(e) {
			console.warn("Undefined sibling!");
		}		
	}
}