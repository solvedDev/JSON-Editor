var autoConfig = [
	//BASIC
	{
		type: "is_self",
		value: "minecraft:entity",
		propose: [ "components", "component_groups", "events", "format_version", "do_not_upgrade" ]
	},

	//COMPONENTS
	{
		type: "is_self",
		value: "components",
		propose: function(pData) {
			return parseComponents(pData.search);
		}
	},
	{
		type: "is_parent",
		value: "component_groups",
		propose: function(pData) {
			return parseComponents(pData.search);
		}
	},
	{
		type: "is_currentContext_component",
		propose: function(pData) {
			return parseComponent(pData.self, pData.search);
		}
	},

	//EVENTS
	{
		type: "is_self",
		value: "events",
		propose: function(pData) {
			return parseEvents(pData.search);
		}
	},
	{
		type: "is_parent",
		value: "events",
		propose: ["add", "remove", "randomize", "sequence"]
	},
	{
		type: "is_self",
		value: ["add", "remove"],
		propose: ["component_groups"]
	},
	{
		type: "is_parent",
		value: ["randomize"],
		propose: ["randomize", "sequence", "weight", "filters", "add", "remove"]
	},
	{
		type: "is_parent",
		value: ["sequence"],
		propose: ["randomize", "sequence", "filters", "add", "remove"]
	}
];