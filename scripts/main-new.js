/**
 * MAIN FUNCTIONALITY OF JSON EDITOR
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

//OPTIONS
var options = {
	edit_all: false,
	auto_completions: true
};


//APPLICATION
class Application {
	constructor() {
		this.loading_screen = new LoadingScreen();
		this.editor_screen = new EditorScreen(this);
		this.mobile_screen = new MobileScreen();

		this.parser = new Parser();
		this.tab_manager = new TabManager(document.getElementById("tab-bar")).create();
		this.tab_manager.addTab("blank.json", {
			"minecraft:entity": { 
				"format_version": "1.2.0", 
				"component_groups": {}, 
				"components": {}, 
				"events": {}
			} 
		});
	}

	/**
	 * Opens the screen handed over as a parameter
	 * @param {Screen} pScreen The screen to open
	 */
	openScreen(pScreen) {
		pScreen.initStyles();
		document.body.innerHTML = pScreen.getHtml();
	}

	openPopUp(pText) {
		let popup = new PopUpWindow("test", "90%", "90%", document.body, pText, true);
		popup.create();
	}
}

//SCREENS
class Screen {
	/**
	 * Construct a new object of the type Screen
	 * @param {String} pHtml 
	 * @param {String} pStyle 
	 */
	constructor(pParent, pHtml, pStyle) {
		this.parent = pParent;
		this.html = pHtml;
		this.style = pStyle;
	}

	/**
	 * Initialize special styles for the screen
	 */
	initStyles() {
		document.body.classList.add("blue-background");
	}

	/**
	 * Get the HTML of this screen
	 * @returns HTML
	 */
	getHtml() {
		return this.html;
	}
	/**
	 * Get the style of this screen
	 * @returns CSS
	 */
	getStyle() {
		return this.style;
	}
}

class MobileScreen extends Screen {
	constructor(pParent) {
		super(pParent, "<div class='center blue-section'><h1 class='big'>:(</h1><br><br><h3>The JSON Editor cannot be used on mobile devices.</h3></div>");
	}
}

class EditorScreen extends Screen {
	constructor(pParent) {
		super(pParent, "<h1>EDITOR</h1>");

		this.tabs = [];
	}
	/**
	 * Initialize special styles for the screen
	 */
	initStyles() {
		document.body.classList.remove("blue-background");
	}
}

class LoadingScreen extends Screen {
	constructor(pParent) {
		super(pParent, "<div class='center blue-section'><h1>Loading data</h1><div class='loading-outer center'><div class='loading-inner'></div></div><h5>We are preparing your<br> new JSON Experience!</h5></div>");
	}
}

//Windows
class ScreenElement {
	/**
	 * @param {Node} pParent The node parent of this element
	 * @param {String} pNodeType The node type to create
	 * @param {String} pNodeName The property name of the node (default: node)
	 */
	constructor(pParent, pNodeType, pNodeName="node") {
		this.parent = pParent;
		this.node_name = pNodeName;

		this[this.node_name] = document.createElement(pNodeType);
		this[this.node_name].js_element = this;
	}
	/**
	 * Adds the ScreenElement to the context where it is defined
	 */
	create() {
		this.parent.appendChild(this[this.node_name]);
		return this;
	}
	/**
	 * Removes the ScreenElement from the context where it is defined
	 */
	destroy() {
		this.parent.removeChild(this[this.node_name]);
		return this;
	}

	/**
	 * Shows ScreenElement
	 */
	show() {
		//PopUp needs to be first child
		this[this.node_name].style.display = "inline-block";
		return this;
	}
	/**
	 * Hides ScreenElement
	 */
	hide() {
		this[this.node_name].style.display = "none";
		return this;
	}
	/**
	 * Returns HTML of node
	 * @returns {String} HTML
	 */
	getHTML() {
		return this[this.node_name].outerHTML;
	}
	/**
	 * Returns node
	 * @returns {Node} node
	 */
	getNode() {
		return this[this.node_name];
	}
}

class PriorityScreenElement extends ScreenElement {
	constructor(pParent, pNodeType, pNodeName="node") {
		super(pParent, pNodeType, pNodeName);
	}
	/**
	 * Adds the popup window to the context where it is defined
	 */
	create() {
		//PriorityScreenElements need to be first child
		this.parent.insertBefore(this[this.node_name], this.parent.firstChild);
		return this;
	}
}

class PopUpWindow extends PriorityScreenElement {
	/**
	 * Create a new PopUpWindow
	 * @param {String} pId The unique ID of a popup window
	 * @param {Number} pW Width of window
	 * @param {Number} pH Height of window
	 * @param {Node} pParent The node parent of the popup window
	 * @param {String} pContent HTML Content for the popup window
	 * @param {Boolean} pHasCloseButton Whether the dialog shall have a close button
	 * @param {Boolean} pShowInnerBtn Whether the close button is inside the window
	 * @param {String} pOverflow Scrolling mode. Can be auto, scroll or hidden
	 */
	constructor(pId, pW, pH, pParent, pContent, pHasCloseButton=true, pShowInnerBtn=false, pOverflow="auto") {
		super(pParent, "DIV");

		//Outer DIV - blend background
		this.node.id = "popup-" + pId;
		this.node.classList.add("blend-full-screen");
		//Inner DIV - actual frame
		this.inner_div = document.createElement("DIV");
		this.inner_div.classList.add("section", "popup-inner-frame");
		this.inner_div.innerHTML = pContent;
		this.inner_div.style.overflowY = pOverflow;
		this.inner_div.style.width = pW;
		this.inner_div.style.setProperty("--window-height", pH);

		//Close Button
		if(pHasCloseButton) {
			this.btn = new CloseButton(this.node).getNode();

			//Building window
			if(pShowInnerBtn) {
				this.btn.classList.add("inner")
				this.inner_div.appendChild(this.btn);
			} else {
				this.node.insertBefore(this.btn, this.node.firstChild);
			}
		}

		this.node.appendChild(this.inner_div);
	}
}

class LoadingWindow extends PopUpWindow {
	constructor() {
		let loading_animation = "<div class='loading-outer center'><div class='loading-inner'></div></div>";
		super("loading", "40%", "102px", document.body, loading_animation, false, false, "hidden");
	}
}

class PushMessage extends PriorityScreenElement {
	/**
	 * @param {Node} pParent The parent node (context of the push message)
	 * @param {String} pContent The text to show in the push message
	 */
	constructor(pParent, pContent) {
		super(pParent, "DIV");

		//Outer DIV - blend background
		this.node.classList.add("push-message");
		//Inner DIV - actual frame
		this.inner_div = document.createElement("DIV");
		this.inner_div.classList.add("push-message-frame");
		this.inner_div.innerHTML = pContent;
		//Close Button
		this.btn = new CloseButton(this.node).getNode();
		this.btn.classList.add("btn-xs");
		//Building window
		this.btn.classList.add("inner")
		this.inner_div.appendChild(this.btn);
		
		this.node.appendChild(this.inner_div);
	}
}


//Buttons
class ActionButton extends ScreenElement {
	/**
	 * 
	 * @param {Node} pParent The button's parent HTML element
	 * @param {String} pText Text to show on the button (can be HTML)
	 * @param {Function} pAction Function to call onclick
	 */
	constructor(pParent, pText="undefined") {
		super(pParent, "BUTTON", "btn");
		this.btn.parent = pParent;
		this.parent = pParent;

		this.btn.classList.add("btn", "btn-outline-primary", "inline-element");
		this.btn.innerHTML = pText;
		this.btn.onclick = this.onclick;
	}

	onclick() {
		console.log("Button clicked!");
	}
}

class CloseButton extends ActionButton {
	/**
	 * @param {Node} pParent The button's parent HTML element
	 * @param {String} pText Text to show on the button (can be HTML)
	 */
	constructor(pParent, pText="<i class='fa fa-remove'></i>") {
		super(pParent, pText);

		this.btn.classList.add("close-popup-window");
	}

	onclick() {
		this.parent.js_element.destroy();
	}
}