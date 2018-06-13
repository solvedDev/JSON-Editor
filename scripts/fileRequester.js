/**
 * SCRIPTS FOR DATA LOADING FUNCTIONALITY
 * [!!!] NOT IN USE
 * Creator: @solvedDev
 * Project: JSON Editor
 */

class LoadingSystem {
	constructor(pConfig) {
		this.config = pConfig;
		this.data = {};
		this.entity_blacklist = ["item", "leash_knot", "painting", "xp_orb", "falling_block", "moving_block", "evocation_fang"]
	}

	request(pPath, pCallback=this.onRequestReady) {
		fetch("https://solveddev.github.io/JSON-Editor-Data/" + pPath)
			.then(pResponse => pResponse.text())
			.then(pJson => pCallback(pPath, JSON.parse(JSON.minify(pJson)), this))
			.catch(pError =>  console.log(pError));
	}

	onRequestReady(pPath, pData, pSelf=this) {
		pSelf.saveLocalData(pPath, pSelf.data, pData, pSelf);
	}
	
	/**
	 * Stores requested data
	 * @param {Array<String>} pPath The path describing where to save data
	 * @param {Object} pDict The dict in which  you want to save the data
	 * @param {any} pData The data to save
	 * @param {Object} pSelf Context
	 */
	saveLocalData(pPath, pDict, pData, pSelf=this) {
		if(typeof pPath == "string") {
			pPath = pPath.split("/");
		}
		let my_key = pPath.shift();
		let dict = pDict;

		if(pPath.length > 0) {
			if(!dict[my_key]) dict[my_key] = {};
			dict[my_key] = pSelf.saveLocalData(pPath, dict[my_key], pData, pSelf);
		} else {
			dict[my_key] = pData;
		}
		return dict;
	}
	getLocalData(pPath, pDict=this.data, pSelf=this) {
		if(typeof pPath == "string") {
			pPath = pPath.split("/");
		}
		let my_key = pPath.shift();
		
		let dict = pDict;

		if(pPath.length > 0) {
			return pSelf.getLocalData(pPath, dict[my_key]);
		} else {
			return dict[my_key];
		}
	}


	requestEntity(pFileName) {
		this.request("data/BP/entities/" + pFileName);
	}
	requestEntities(pNames) {
		console.log(arguments);
		for (let i = 0; i < pNames.length; i++) {
			if(pNames[i] == "cod") pNames[i] = "fish";
			if(!this.entity_blacklist.contains(pNames[i])) {
				this.requestEntity(pNames[i] + ".json");
			}
		}
	}
}

l = new LoadingSystem();
l.requestEntity("agent.json");
l.requestEntity("blaze.json");
l.requestEntities(autoData["entities"]);