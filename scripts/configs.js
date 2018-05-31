/**
 * DESCRIBES THE FUNCTIONALITY OF AUTO-COMPLETIONS
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 * 
 * VALID ARGUMENTS:
 * 	type: is_self/is_parent/is_currentContext_component/self_contains_but_is_not/parent_contains_but_is_not
 *  value: Any string or an array containing strings. Providing an array means that one of the strings in there must be found (only supported by is_parent & is_self)
 * 	propose: An array with the auto-completions to propose or a function which creates option HTML manually
 */

var autoConfig = [
	//BASIC
	{
		type: "is_self",
		value: "minecraft:entity",
		propose: [ "components", "component_groups", "events", "format_version", "do_not_upgrade" ]
	},
	{
		type: "is_self_type",
		value: "array",
		propose: function(pData) {
			return parseArray();
		}
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
		value: "randomize",
		propose: ["randomize", "sequence", "weight", "filters", "add", "remove"]
	},
	{
		type: "is_parent",
		value: "sequence",
		propose: ["randomize", "sequence", "filters", "add", "remove"]
	},

	//FILTERS
	{
		type: "is_self",
		value: "filter",
		propose: ["all_of", "any_of", "test", "subject", "operator", "domain", "value"]
	},
	{
		type: "is_self",
		value: ["all_of", "any_of"],
		propose: ["test", "subject", "operator", "domain", "value"]
	},	

	//SPECIAL ARGUMENTS
	{
		type: "self_contains_but_is_not",
		value: "event",
		propose: ["event", "target"]
	}
];