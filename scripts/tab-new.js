/**
 * TAB SYSTEM + TAB CONTENT
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

class Tab {
	constructor(pName, pJSON) {
		this.editor = new Editor(pJSON);
	}
}

class Editor {
	constructor(pJSON) {
		this.tree_manager = new TreeManager();
		this.highlighter = new Highlighter();

		this.selection = {
			path: "",
			currentContext: "",
			currentParentContext: "",
			currentSelected: ""
		};
	}
}