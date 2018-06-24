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
		this.clipboard = {};

		//Add click event listener to editor
		this.editor_node = document.getElementById("editor");
		this.editor_node.js_parent = this;
		this.editor_node.onclick = function(e) {
			let target = e.target;
			if(target.tagName == "HIGHLIGHT") target = target.parentElement;

			let tab = this.js_parent.getSelectedTab();
			let t_m = tab.editor.tree_manager;
			let c_s = tab.editor.path.getCurrentContext();

			if(!target.isSameNode(c_s) && target.parentElement.open) {
				e.preventDefault();
			}
			t_m.selectElement(target);
		};
		this.editor_node.onkeydown = function(e) {
			let editor = this.js_parent.getSelectedTab().editor;

			if(e.key == "ArrowUp") {
				editor.tree_manager.selectPreviousOpenElement();
				editor.path.getCurrentContext().focus();
			} else if(e.key == "ArrowDown") {
				editor.tree_manager.selectNextOpenElement();
				editor.path.getCurrentContext().focus();
			} else if(e.key == "Delete" || e.key == "Backspace") {
				let current = editor.path.getCurrentContext();
				editor.tree_manager.removeElement(current);
				editor.path.getCurrentContext().focus();
			} else if(e.ctrlKey && e.key == "c") {
				this.js_parent.copy(editor, false);
			} else if(e.ctrlKey && e.key == "x") {
				this.js_parent.copy(editor, true);
			} else if(e.ctrlKey && e.key == "v") {
				this.js_parent.paste(editor);
			}
		};
		app.editor_screen.ui_elements.select_super_obj_btn.onkeydown = function(e) {
			if(e.ctrlKey && e.key == "v") {
				app.tab_manager.paste(app.tab_manager.getSelectedTab().editor);
			}
		};
	}

	/**
	 * Paste clipboard into current context
	 * @param {Editor} pEditor The editor to use
	 */
	paste(pEditor) {
		let current = pEditor.path.getCurrentContext();
		if(current) {
			current.parentElement.childNodes[1].innerHTML += app.parser.parseObj(this.clipboard, false);
		} else {
			document.getElementById("editor").childNodes[1].childNodes[0].innerHTML += app.parser.parseObj(this.clipboard, false);
		}
	}
	/**
	 * Copy current context into clipboard
	 * @param {Editor} pEditor The editor to use
	 * @param {Boolean} pCut Whether to remove the current node from its context
	 */
	copy(pEditor, pCut) {
		let current = pEditor.path.getCurrentContext();
		if(current) {
			let current_name = pEditor.path.getCurrentContext(false);
			this.clipboard = {};
			this.clipboard[current_name] = app.parser.getObj(current.parentElement, false);
		}

		if(pCut) pEditor.tree_manager.removeElement(current);
	}

	start() {
		app.tick();
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

	/**
	 * Ticks the current tab
	 */
	tick() {
		this.getSelectedTab().tick();
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
		this.editor = new Editor(this, document.getElementById("editor"), pJSON);
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
				//Intialize auto_completions
				this.editor.auto_completions.init();
			} else {
				this.editor.path.getCurrentContext().focus();
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

	/**
	 * Ticks the editor
	 */
	tick() {
		this.editor.tick();
	}
}

class Editor extends ScreenElement {
	constructor(pTab, pParent, pJSON) {
		super(pParent, "DIV", "editor_content");
		this.tab = pTab;

		try {
			this.editor_content.innerHTML = app.parser.parseObj(pJSON);
		} catch(e) {
			console.warn("Unable to access parser of app. Falling back to own parser.");
			let parser = new Parser();
			this.editor_content.innerHTML = parser.parseObj(pJSON);
		}
		
		this.tree_manager = new TreeManager(this);
		this.highlighter = new Highlighter({solved: "font-weight: bold; color: royalblue;"});
		this.registerEvents();

		this.path = new Path();
		this.auto_completions = new AutoCompletions(app, this);
	}

	/**
	 * Tick the editor & its functionality
	 */
	tick() {
		this.auto_completions.update();
	}
	
	create() {
		super.create();
		this.auto_completions.add_child_input.create();
		this.auto_completions.add_value_input.create();
		this.auto_completions.edit_input.create();
		return this;
	}
	destroy() {
		super.destroy();
		this.auto_completions.add_child_input.destroy();
		this.auto_completions.add_value_input.destroy();
		this.auto_completions.edit_input.destroy();
		return this;
	}

	/**
	 * Reload the editor
	 * @returns {Editor} this
	 */
	refresh() {
		this.editor_content.innerHTML = app.parser.parseObj(app.parser.getObj(this.editor_content));
		
		this.tree_manager.selectElement(document.querySelector("#editor summary"), true);
		return this;
	}

	/**
	 * @returns {Object} Content of the tab
	 */
	getObj() {
		return super.getObj();
	}

	/**
	 * Registers all events
	 */
	registerEvents() {
		//Destroy buttons
		let btns = this.editor_content.querySelectorAll(".destroy-e");
		for(var i = 0; i < btns.length; i++) {
			btns[i].self = this.tree_manager;
			btns[i].onclick = function(e) {
				this.self.removeElement(e.target.parentElement);
			}
		}
	}


	getCachedData(pPath) {
		return app.loading_system.getCachedData(pPath);
	}

	//CONTENT EDITABLE
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
		if(this.path.getCurrentContext() && !this.path.getCurrentContext().isSameNode(pE)) pE.setAttribute("contenteditable", false);
	}
}