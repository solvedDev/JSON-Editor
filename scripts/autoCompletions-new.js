/**
 * SCRIPTS FOR AUTO-COMPLETIONS FUNCTIONALITY
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

class AutoCompletions {
	constructor(pEditor) {
		this.editor = pEditor;
	}
}

class LogicStatement {
	constructor(pStatement) {
		this.statement = pStatement;
	}

	evaluate() {
		if(this.statement[0] == "(") this.statement = this.statement.slice(1, -1);
		let arr = this.statement.split(" ");

		let val = new FunctionStatement(arr[0]).evaluate();
		for(let i = 1; i < arr.length; i += 2) {
			if(arr[i] == "and") {
				val = val && new FunctionStatement(arr[i+1]).evaluate();
			} else if(arr[i] == "or") {
				val = val || new FunctionStatement(arr[i+1]).evaluate();
			} else {
				console.warn("Unknown logic operator: " + arr[i]);
			}
		}

		return val;
	}
}

class FunctionStatement {
	constructor(pStatement, pEditor) {
		this.statement = pStatement;
		this.editor = pEditor;
	}

	evaluate() {
		let parts = this.statement.split("_on_");

		if(parts.length > 1){
			parts[1] = this.getFunction(parts[1]);
			parts[0] = this.getFunction(parts[0], parts[1]);
		} else {
			parts[0] = this.getFunction(parts[0]);
		}

		try {
			return eval(parts[0]);
		} catch(e) {
			console.warn("Invalid function statement \"" + this.statement + "\":\n\n" + e);
		}
	}

	getFunction(pString, pFuncArg) {
		let func = pString;
		if(func.contains("(")) {
			let func_core = pString.split("(")[0].replace(/(;)|(\n)|(\()|(\))/g, "");
			let argument = "\"" + pString.split("(")[1].split(")")[0] + "\"";

			if(pFuncArg) argument = argument + "," + pFuncArg;
			//console.log(func_core, argument);

			return "this." + func_core + "(" + argument + ")";
		} else {
			return "this." + pString.replace(/(;)|(\n)|(\()|(\))/g, "") + "()";
		}
		
	}

	//ACCESS FUNCTIONS
	$on_me(pArg, pArg2) {
		return pArg + 1 + pArg2;
	}
	$get_sibling() {
		return "my_sibling";
	}

	$is(pArg, pArg2=this.editor.path.getCurrentContext(false)) {
		return pArg2 == pArg;
	}
	$is_not(pArg, pArg2=this.editor.path.getCurrentContext(false)) {
		return !$is(pArg, pArg2)
	}
	$contains(pArg, pArg2=this.editor.path.getCurrentContext(false)) {
		return pArg2.contains(pArg);
	}
	$contains_not(pArg, pArg2=this.editor.path.getCurrentContext(false)) {
		return !$contains(pArg, pArg2);
	}

	//TODO: pArg2 not supported
	$is_path(pArg) {
		return this.editor.path.isPath(pArg);
	}
	$is_path_not(pArg) {
		return !$is_path(pArg);
	}
}

var f = new FunctionStatement("$is(minecraft:entity)", app.tab_manager.getSelectedTab().editor);
var ls = new LogicStatement("$is(test) or $is(testing)");