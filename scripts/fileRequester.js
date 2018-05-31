/**
 * SCRIPTS FOR DATA LOADING FUNCTIONALITY
 * [!!!] NOT IN USE
 * Creator: @solvedDev
 * Project: JSON Editor
 */

class LoadingSystem {
	constructor(pConfig) {
		this.config = pConfig;
	}

	request(pPath) {
		return $.getJSON("https://solveddev.github.io/" + pPath, function(data) {
			return data;
		});
	}
}
