/**
 * TAB SYSTEM + TAB CONTENT
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

class TabManager extends ScreenElement {
	constructor(pParent) {
		super(pParent, "DIV");
		this.tabs = [];
		this.loaded_tabs = 0;

		//Add click event listener to editor
		this.editor_node = document.getElementById("editor");
		this.editor_node.js_parent = this;
		this.editor_node.onclick = function(e) {
			let target = e.target;
			if(target.tagName == "HIGHLIGHT") target = target.parentElement;

			let tab = this.js_parent.getSelectedTab();
			let t_m = tab.editor.tree_manager;
			let c_s = tab.editor.selection.currentSelected;

			if(e.ctrlKey) {
				e.preventDefault();
				t_m.selectElement(target);
				key_input.addEdit(target);
			} else {
				//NOT ALREADY SELECTED & OPEN & DOESN'T HAVE SPAN AS CHILD
				if(!target.isSameNode(c_s) && target.parentElement.open && target.parentElement.childNodes[1].childNodes[0] != undefined && target.parentElement.childNodes[1].childNodes[0].tagName != "SPAN") {
					e.preventDefault();
				}
				t_m.selectElement(target);
			}
		};
	}

	/**
	 * @returns {Boolean} Whether the TabManager has tabs
	 */
	hasTabs() {
		return this.tabs.length > 0;
	}

	/**
	 * @returns {Tab} The currently selected tab
	 */
	getSelectedTab() {
		for(let i = 0; i < this.tabs.length; i++) {
			if(this.tabs[i].node.classList.contains("selected-tab")) {
				return this.tabs[i];
			}
		}
	}

	/**
	 * Removes marked tabs
	 * @returns {Boolean} Whether the removal is valid
	 */
	removeMarkedTabs() {
		if(this.tabs.length == 1) return false;

		for(let i = 0; i < this.tabs.length; i++) {
			if(this.tabs[i].marked) {
				console.log(i)
				this.tabs.splice(i, 1);
			}
		}
		return true;
	}

	/**
	 * Refresh current tab
	 */
	reloadCurrentTab() {
		let loading_window = new LoadingWindow().create();
		this.getSelectedTab().refresh();
		loading_window.destroy();
	}

	/**
	 * Add a new tab to the TabManager
	 * @param {String} pName The name of the tab
	 * @param {Object} pJSON JSON to display in the tab
	 * @param {Number} pTotal Total number of tabs (if loading multiple files)
	 */
	addTab(pName, pJSON, pTotal) {
		this.tabs.push(new Tab(this, pName, pJSON));
		this.tabs[this.tabs.length - 1].create().enable(this.tabs[this.tabs.length - 1], true);

		this.loaded_tabs++;
		if(this.loaded_tabs == pTotal) app.loading_window.destroy();
	}

	/**
	 * Disable all tabs
	 */
	disableAll() {
		for (let i = 0; i < this.tabs.length; i++) {
			this.tabs[i].disable();
		}
	}
}


class Tab extends ScreenElement {
	/**
	 * @param {String} pName Name of the tab
	 * @param {Object} pJSON JSON to display
	 */
	constructor(pJSParent, pName, pJSON) {
		super(pJSParent.getNode(), "DIV");
		this.js_parent = pJSParent;

		this.node.innerHTML = pName + " <i class='fa fa-remove'></i>";
		this.node.classList.add("section", "disabled", "nav-tab", "inline-element");
		this.node.onclick = this.node_enable;
		this.node.js_parent = this;
		
		this.node.childNodes[1].removeSelf = this.removeSelf;
		this.node.childNodes[1].js_parent = this;
		this.node.childNodes[1].onclick = function() {
			this.removeSelf();
		}

		this.is_open = false;
		this.editor = new Editor(editor, pJSON);
	}

	/**
	 * Removes itself 
	 */
	removeSelf() {
		this.js_parent.marked = true;
		if(this.js_parent.js_parent.removeMarkedTabs()) {
			this.js_parent.destroy();
			this.js_parent.editor.destroy();
			let tabs = this.js_parent.js_parent.tabs;
			tabs[0].enable();
			
		} else {
			new PopUpWindow("notify", "400px", "50px", document.body, "<h5>You cannot remove the last tab!</h5>", true, true, "hidden").create();
			this.js_parent.marked = false;
		}
	}

	/**
	 * @returns {Object} Content of the tab
	 */
	getObj() {
		return app.parser.getObj(this.editor.editor_content, true);
	}
	/**
	 * @returns {String} Name of the tab
	 */
	getName() {
		return this.node.innerText.replace(" ", "");
	}
	/**
	 * @returns {Tab} this
	 */
	refresh() {
		console.log("refreshes")
		this.editor.refresh();
	}

	/**
	 * Disables this tab
	 * @returns {Tab} this
	 */
	disable() {
		if(this.is_open) {
			this.node.classList.remove("selected-tab");
			this.is_open = false;
			this.editor.destroy();
		}
		return this;
	}
	/**
	 * Changes to this tab
	 * @returns {Tab} this
	 */
	enable(pContext=this, pInitial=false) {
		if(!pContext.is_open) {
			pContext.js_parent.disableAll();
			pContext.node.classList.add("selected-tab");
			pContext.is_open = true;
			pContext.editor.create();
			pContext.node.scrollIntoView();

			//Handling content
			if(pInitial) {
				this.editor.tree_manager.selectElement(this.editor.editor_content.querySelector("summary"));
				this.editor.editor_content.querySelector("summary").focus();
			} else {
				this.editor.selection.currentSelected.focus();
			}
			
		}
		return this;
	}
	/**
	 * enable() but executed from node perspective
	 */
	node_enable() {
		this.js_parent.enable(this.js_parent);
	}
}

class Editor extends ScreenElement {
	constructor(pParent, pJSON) {
		super(pParent, "DIV", "editor_content");
		
		try {
			this.editor_content.innerHTML = app.parser.parseObj(pJSON);
		} catch(e) {
			console.warn("Unable to access parser of app. Falling back to own parser.");
			let parser = new Parser();
			this.editor_content.innerHTML = parser.parseObj(pJSON);
		}
		
		this.tree_manager = new TreeManager(this);
		this.highlighter = new Highlighter();

		this.selection = {
			path: "",
			currentContext: "",
			parentCurrentContext: "",
			currentSelected: document.querySelector("#editor summary")
		};

		this.registerEvents();
		//document.querySelector("#editor summary").focus();
	}
	/**
	 * Reload the editor
	 * @returns {Editor} this
	 */
	refresh() {
		this.editor_content.innerHTML = app.parser.parseObj(app.parser.getObj(this.editor_content));
		//selectElement(document.querySelector("#editor summary"));
		this.tree_manager.selectElement(document.querySelector("#editor summary"), true);
		return this;
	}

	/**
	 * Registers all events
	 */
	registerEvents() {
		//Destroy buttons
		let btns = this.editor_content.querySelectorAll(".destroy-e");
		for(var i = 0; i < btns.length; i++) {
			btns[i].onclick = function(e) {
				removeElement(e.target.parentElement);
			}
		}

		//Blur after contenteditable
		let edits = this.editor_content.querySelectorAll(".highlight-array, .highlight-object, .highlight-string, .highlight-boolean, .highlight-number, span.value");
		for(var i = 0; i < edits.length; i++) {
			edits[i].onblur = function(e) {
				key_input.removeEdit(e.target);
			}
		}
	}
}