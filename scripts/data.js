/**
 * DATA FOR AUTO COMPLETIONS
 * 
 * Creator: @solvedDev
 * Project: JSON Editor
 */

var autoData = {
	"components": {
		"minecraft:addrider": {
			"entity_type": {
				"type": "String",
				"default_value": "",
				"description": "The entity type that will be riding this entity\n"
			},
			"__des__": "Adds a rider to the entity. Requires minecraft:rideable."
		},
		"minecraft:ageable": {
			"duration": {
				"type": "Decimal",
				"default_value": "1200.0",
				"description": "Amount of time before the entity grows\n"
			},
			"feedItems": {
				"type": "List",
				"default_value": "",
				"description": "List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by\n"
			},
			"grow_up": {
				"type": "String",
				"default_value": "",
				"description": "Event to run when this entity grows up\n"
			},
			"__des__": "Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems."
		},
		"minecraft:ambient_sound_interval": {
			"range": {
				"type": "Decimal",
				"default_value": "16.0",
				"description": "Maximum time is seconds to randomly add to the ambient sound delay time.\n"
			},
			"value": {
				"type": "Decimal",
				"default_value": "8.0",
				"description": "Minimum time in seconds before the entity plays its ambient sound again\n"
			},
			"__des__": "Sets the entity's delay between playing its ambient sound."
		},
		"minecraft:angry": {
			"broadcastAnger": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, other entities of the same entity definition within the broadcastRange will also become angry\n"
			},
			"broadcastRange": {
				"type": "Integer",
				"default_value": "20",
				"description": "Distance in blocks within which other entities of the same entity definition will become angry\n"
			},
			"calm_event": {
				"type": "String",
				"default_value": "",
				"description": "Event to run after the number of seconds specified in duration expires (when the entity stops being 'angry')\n"
			},
			"duration": {
				"type": "Integer",
				"default_value": "25",
				"description": "The amount of time in seconds that the entity will be angry\n"
			},
			"duration_delta": {
				"type": "Integer",
				"default_value": "0",
				"description": "Variance in seconds added to the duration [-delta, delta]\n"
			},
			"__des__": "Defines the entity's 'angry' state using a timer."
		},
		"minecraft:attack": {
			"damage": {
				"type": "Range [a, b]",
				"default_value": "",
				"description": "Range of the random amount of damage the melee attack deals\n"
			},
			"effect_duration": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Duration in seconds of the status ailment applied to the damaged entity\n"
			},
			"effect_name": {
				"type": "String",
				"default_value": "",
				"description": "Name of the status ailment to apply to an entity attacked by this entity's melee attack\n"
			},
			"__des__": "Defines an entity's melee attack and any additional effects on it."
		},
		"minecraft:behavior.avoid_mob_type": {
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entity types this mob avoids.\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"max_dist": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Maximum distance to look for an entity\n"
			},
			"max_flee": {
				"type": "Decimal",
				"default_value": "0.5",
				"description": "Distance in blocks within the mob considers it should stop fleeing.\n"
			},
			"probability_per_strength": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Determines how likely it is that this entity will stop avoiding another entity based on that entity's strength\n"
			},
			"sprint_speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Multiplier for running speed. 1.0 means keep the regular speed, while higher numbers make the running speed faster\n"
			},
			"walk_speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Multiplier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster\n"
			},
			"__des__": "Allows this entity to avoid certain mob types."
		},
		"minecraft:behavior.beg": {
			"items": {
				"type": "List",
				"default_value": "",
				"description": "List of items that this mob likes\n"
			},
			"look_distance": {
				"type": "Decimal",
				"default_value": "8.0",
				"description": "Distance in blocks the mob will beg from\n"
			},
			"look_time": {
				"type": "Range [a, b]",
				"default_value": "[2, 4]",
				"description": "The range of time in seconds this mob will stare at the player holding a food they like, begging for it\n"
			},
			"__des__": "Allows this mob to look at and follow the player that holds food they like."
		},
		"minecraft:behavior.break_door": {
			"__des__": "Allows this mob to break doors."
		},
		"minecraft:behavior.breed": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows this mob to breed with other mobs."
		},
		"minecraft:behavior.charge_attack": {
			"__des__": "Allows the mob to attack its target by running at it."
		},
		"minecraft:behavior.controlled_by_player": {
			"__des__": "Allows the mob to be controlled by the player."
		},
		"minecraft:behavior.defend_village_target": {
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entity types this mob considers a threat to the village\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Allows the mob to stay in the village and fight mobs hostile to the villagers."
		},
		"minecraft:behavior.door_interact": {
			"__des__": "Allows the mob to open and close doors."
		},
		"minecraft:behavior.dragonchargeplayer": {
			"__des__": "Allows the dragon to attack a player by flying fast at them. The player is chosen by the dragonscanning goal. Can only be used by the Ender Dragon."
		},
		"minecraft:behavior.dragondeath": {
			"__des__": "Allows the dragon to go out with glory. This controls the Ender Dragon's death animation and can't be used by other mobs."
		},
		"minecraft:behavior.dragonflaming": {
			"__des__": "Allows the dragon to use its flame breath attack. Can only be used by the Ender Dragon."
		},
		"minecraft:behavior.dragonholdingpattern": {
			"__des__": "Allows the Dragon to fly around in a circle around the center podium. Can only be used by the Ender Dragon."
		},
		"minecraft:behavior.dragonlanding": {
			"__des__": "Allows the Dragon to stop flying and transition into perching mode. Can only be used by the Ender Dragon."
		},
		"minecraft:behavior.dragonscanning": {
			"__des__": "Allows the dragon to look around for a player to attack while in perch mode. Can only be used by the Ender Dragon."
		},
		"minecraft:behavior.dragonstrafeplayer": {
			"__des__": "Allows the dragon to fly around looking for a player and shoot fireballs at them. Can only be used by the Ender Dragon."
		},
		"minecraft:behavior.dragontakeoff": {
			"__des__": "Allows the dragon to leave perch mode and go back to flying around. Can only be used by the Ender Dragon."
		},
		"minecraft:behavior.eat_block": {
			"on_eat": {
				"type": "Trigger",
				"default_value": "",
				"description": "Trigger to fire when the mob eats a block of grass\n"
			},
			"__des__": "Allows the mob to eat a block (for example, sheep eating grass)."
		},
		"minecraft:behavior.enderman_leave_block": {
			"__des__": "Allows the enderman to drop a block they are carrying. Can only be used by Endermen."
		},
		"minecraft:behavior.enderman_take_block": {
			"__des__": "Allows the enderman to take a block and carry it around. Can only be used by Endermen."
		},
		"minecraft:behavior.find_mount": {
			"avoid_water": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the mob will not go into water blocks when going towards a mount\n"
			},
			"mount_distance": {
				"type": "Decimal",
				"default_value": "-1.0",
				"description": "This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance\n"
			},
			"start_delay": {
				"type": "Integer",
				"default_value": "0",
				"description": "Time the mob will wait before starting to move towards the mount\n"
			},
			"target_needed": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the mob will only look for a mount if it has a target\n"
			},
			"within_radius": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Distance in blocks within which the mob will look for a mount\n"
			},
			"__des__": "Allows the mob to look around for another mob to ride atop it."
		},
		"minecraft:behavior.flee_sun": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to run away from direct sunlight and seek shade."
		},
		"minecraft:behavior.float": {
			"__des__": "Allows the mob to stay afloat while swimming."
		},
		"minecraft:behavior.float_wander": {
			"float_duration": {
				"type": "Range [a, b]",
				"default_value": "[0.0, 0.0]",
				"description": "Range of time in seconds the mob will float around before landing and choosing to do something else\n"
			},
			"must_reach": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the point has to be reachable to be a valid target\n"
			},
			"random_reselect": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the mob will randomly pick a new point while moving to the previously selected one\n"
			},
			"xz_dist": {
				"type": "Integer",
				"default_value": "10",
				"description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1\n"
			},
			"y_dist": {
				"type": "Integer",
				"default_value": "7",
				"description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1\n"
			},
			"y_offset": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Height in blocks to add to the selected target position\n"
			},
			"__des__": "Allows the mob to float around like the Ghast."
		},
		"minecraft:behavior.follow_caravan": {
			"entity_count": {
				"type": "Integer",
				"default_value": "1",
				"description": "Number of entities that can be in the caravan\n"
			},
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entity types that this mob can follow in a caravan\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to follow mobs that are in a caravan."
		},
		"minecraft:behavior.follow_mob": {
			"search_range": {
				"type": "Integer",
				"default_value": "0",
				"description": "The distance in blocks it will look for a mob to follow\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"stop_distance": {
				"type": "Decimal",
				"default_value": "2.0",
				"description": "The distance in blocks this mob stops from the mob it is following\n"
			},
			"__des__": "Allows the mob to follow other mobs."
		},
		"minecraft:behavior.follow_owner": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"start_distance": {
				"type": "Decimal",
				"default_value": "10.0",
				"description": "The distance in blocks that the owner can be away from this mob before it starts following it\n"
			},
			"stop_distance": {
				"type": "Decimal",
				"default_value": "2.0",
				"description": "The distance in blocks this mob will stop from its owner while following it\n"
			},
			"__des__": "Allows the mob to follow the player that owns them."
		},
		"minecraft:behavior.follow_parent": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to follow their parent around."
		},
		"minecraft:behavior.guardian_attack": {
			"__des__": "Allows the guardian to use its laser beam attack. Can only be used by Guardians and Elder Guardians."
		},
		"minecraft:behavior.harvest_farm_block": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the villager to harvest nearby farms. Can only be used by Villagers."
		},
		"minecraft:behavior.hurt_by_target": {
			"alert_same_type": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, nearby mobs of the same type will be alerted about the damage\n"
			},
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entity types that this mob can target when hurt by them\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"hurt_owner": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the mob will hurt its owner and other mobs with the same owner as itself\n"
			},
			"__des__": "Allows the mob to target another mob that hurts them."
		},
		"minecraft:behavior.leap_at_target": {
			"must_be_on_ground": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the mob will only jump at its target if its on the ground. Setting it to false will allow it to jump even if its already in the air\n"
			},
			"yd": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "The height in blocks the mob jumps when leaping at its target\n"
			},
			"__des__": "Allows monsters to jump at and attack their target. Can only be used by hostile mobs."
		},
		"minecraft:behavior.look_at_entity": {
			"angle_of_view_horizontal": {
				"type": "Integer",
				"default_value": "360",
				"description": "The angle in degrees that the mob can see in the Y-axis (up-down)\n"
			},
			"angle_of_view_vertical": {
				"type": "Integer",
				"default_value": "360",
				"description": "The angle in degrees that the mob can see in the X-axis (left-right)\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "Filter to determine the conditions for this mob to look at the entity\n"
			},
			"look_distance": {
				"type": "Decimal",
				"default_value": "8.0",
				"description": "The distance in blocks from which the entity will look at\n"
			},
			"look_time": {
				"type": "Range [a, b]",
				"default_value": "[2, 4]",
				"description": "Time range to look at the entity\n"
			},
			"probability": {
				"type": "Decimal",
				"default_value": "0.02",
				"description": "The probability of looking at the target. A value of 1.00 is 100%\n"
			},
			"__des__": "Allows the mob to look at nearby entities."
		},
		"minecraft:behavior.look_at_player": {
			"angle_of_view_horizontal": {
				"type": "Integer",
				"default_value": "360",
				"description": "The angle in degrees that the mob can see in the Y-axis (up-down)\n"
			},
			"angle_of_view_vertical": {
				"type": "Integer",
				"default_value": "360",
				"description": "The angle in degrees that the mob can see in the X-axis (left-right)\n"
			},
			"look_distance": {
				"type": "Decimal",
				"default_value": "8.0",
				"description": "The distance in blocks from which the entity will look at\n"
			},
			"look_time": {
				"type": "Range [a, b]",
				"default_value": "[2, 4]",
				"description": "Time range to look at the entity\n"
			},
			"probability": {
				"type": "Decimal",
				"default_value": "0.02",
				"description": "The probability of looking at the target. A value of 1.00 is 100%\n"
			},
			"__des__": "Allows the mob to look at the player when the player is nearby."
		},
		"minecraft:behavior.look_at_target": {
			"angle_of_view_horizontal": {
				"type": "Integer",
				"default_value": "360",
				"description": "The angle in degrees that the mob can see in the Y-axis (up-down)\n"
			},
			"angle_of_view_vertical": {
				"type": "Integer",
				"default_value": "360",
				"description": "The angle in degrees that the mob can see in the X-axis (left-right)\n"
			},
			"look_distance": {
				"type": "Decimal",
				"default_value": "8.0",
				"description": "The distance in blocks from which the entity will look at\n"
			},
			"look_time": {
				"type": "Range [a, b]",
				"default_value": "[2, 4]",
				"description": "Time range to look at the entity\n"
			},
			"probability": {
				"type": "Decimal",
				"default_value": "0.02",
				"description": "The probability of looking at the target. A value of 1.00 is 100%\n"
			},
			"__des__": "Allows the mob to look at the entity they are targetting."
		},
		"minecraft:behavior.look_at_trading_player": {
			"angle_of_view_horizontal": {
				"type": "Integer",
				"default_value": "360",
				"description": "The angle in degrees that the mob can see in the Y-axis (up-down)\n"
			},
			"angle_of_view_vertical": {
				"type": "Integer",
				"default_value": "360",
				"description": "The angle in degrees that the mob can see in the X-axis (left-right)\n"
			},
			"look_distance": {
				"type": "Decimal",
				"default_value": "8.0",
				"description": "The distance in blocks from which the entity will look at\n"
			},
			"look_time": {
				"type": "Range [a, b]",
				"default_value": "[2, 4]",
				"description": "Time range to look at the entity\n"
			},
			"probability": {
				"type": "Decimal",
				"default_value": "0.02",
				"description": "The probability of looking at the target. A value of 1.00 is 100%\n"
			},
			"__des__": "Allows the mob to look at the player they are trading with."
		},
		"minecraft:behavior.make_love": {
			"__des__": "Allows the villager to look for a mate to spawn other villagers with. Can only be used by Villagers."
		},
		"minecraft:behavior.melee_attack": {
			"attack_types": {
				"type": "String",
				"default_value": "",
				"description": "Defines the entity types this mob will attack\n"
			},
			"random_stop_interval": {
				"type": "Integer",
				"default_value": "0",
				"description": "Defines the probability the mob will stop fighting. A value of 0 disables randomly stopping, while a value of 1 defines a 50% chance\n"
			},
			"reach_multiplier": {
				"type": "Decimal",
				"default_value": "2.0",
				"description": "Multiplier for how far outside its box the mob can reach its target (this can be used to simulate a mob with longer arms by making this bigger)\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"track_target": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this mob will chase after the target as long as it's a valid target\n"
			},
			"__des__": "Allows the mob to use close combat melee attacks."
		},
		"minecraft:behavior.mount_pathing": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"target_dist": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "The distance at which this mob wants to be away from its target\n"
			},
			"track_target": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this mob will chase after the target as long as it's a valid target\n"
			},
			"__des__": "Allows the mob to move around on its own while mounted seeking a target to attack."
		},
		"minecraft:behavior.move_indoors": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Can only be used by Villagers. Allows them to seek shelter indoors."
		},
		"minecraft:behavior.move_through_village": {
			"only_at_night": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the mob will only move through the village during night time\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Can only be used by Villagers. Allows the villagers to create paths around the village."
		},
		"minecraft:behavior.move_to_water": {
			"goal_radius": {
				"type": "Decimal",
				"default_value": "0.5",
				"description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot\n"
			},
			"search_height": {
				"type": "Integer",
				"default_value": "1",
				"description": "Height in blocks the mob will look for water to move towards\n"
			},
			"search_range": {
				"type": "Integer",
				"default_value": "0",
				"description": "The distance in blocks it will look for a water to move towards\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to move back into water when on land."
		},
		"minecraft:behavior.move_towards_restriction": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows Guardians, Iron Golems and Villagers to move within their pre-defined area that the mob should be restricted to. Other mobs don't have a restriction defined."
		},
		"minecraft:behavior.move_towards_target": {
			"within_radius": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Defines the radius in blocks that the mob tries to be from the target. A value of 0 means it tries to occupy the same block as the target\n"
			},
			"__des__": "Allows mob to move towards its current target."
		},
		"minecraft:behavior.nearest_attackable_target": {
			"attack_interval": {
				"type": "Integer",
				"default_value": "0",
				"description": "Time in seconds between attacks\n"
			},
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entity types that this mob considers valid targets\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"must_reach": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, only entities that this mob can path to can be selected as targets\n"
			},
			"must_see": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, only entities in this mob's viewing range can be selected as targets\n"
			},
			"must_see_forget_duration": {
				"type": "Decimal",
				"default_value": "3.0",
				"description": "Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more\n"
			},
			"reselect_targets": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the target will change to the current closest entity whenever a different entity is closer\n"
			},
			"within_radius": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Distance in blocks that the target can be within to launch an attack\n"
			},
			"__des__": "Allows the mob to check for and pursue the nearest valid target."
		},
		"minecraft:behavior.ocelot_sit_on_block": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows to mob to be able to sit in place like the ocelot."
		},
		"minecraft:behavior.ocelotattack": {
			"sneak_speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Multiplier for the sneaking speed. 1.0 means the ocelot will move at the speed it normally sneaks\n"
			},
			"sprint_speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Multiplier for the running speed of this mob while using this attack\n"
			},
			"walk_speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Multiplier for the walking speed while using this attack\n"
			},
			"__des__": "Can only be used by the Ocelot. Allows it to perform the sneak and pounce attack."
		},
		"minecraft:behavior.offer_flower": {
			"__des__": "Allows the mob to offer the player a flower like the Iron Golem does."
		},
		"minecraft:behavior.open_door": {
			"close_door_after": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the mob will close the door after opening it and going through it\n"
			},
			"__des__": "Allows the mob to open doors. Requires the mob to be able to path through doors, otherwise the mob won't even want to try opening them."
		},
		"minecraft:behavior.owner_hurt_by_target": {
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entity types that this mob can target if they hurt their owner\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Allows the mob to target another mob that hurts their owner."
		},
		"minecraft:behavior.owner_hurt_target": {
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entity types that this entity can target if the potential target is hurt by this mob's owner\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Allows the mob to target a mob that is hurt by their owner."
		},
		"minecraft:behavior.panic": {
			"force": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this mob will not stop panicking until it can't move anymore or the goal is removed from it\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to enter the panic state, which makes it run around and away from the damage source that made it enter this state."
		},
		"minecraft:behavior.peek": {
			"__des__": "Allows the mob to peek out. This is what the shulker uses to look out of its shell."
		},
		"minecraft:behavior.pickup_items": {
			"goal_radius": {
				"type": "Decimal",
				"default_value": "0.5",
				"description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot\n"
			},
			"max_dist": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Maximum distance this mob will look for items to pick up\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"track_target": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this mob will chase after the target as long as it's a valid target\n"
			},
			"__des__": "Allows the mob to pick up items on the ground."
		},
		"minecraft:behavior.play": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to play with other baby villagers. This can only be used by Villagers."
		},
		"minecraft:behavior.player_ride_tamed": {
			"__des__": "Allows the mob to be ridden by the player after being tamed."
		},
		"minecraft:behavior.raid_garden": {
			"blocks": {
				"type": "List",
				"default_value": "",
				"description": "Blocks that the mob is looking for to eat\n"
			},
			"eat_delay": {
				"type": "Integer",
				"default_value": "2",
				"description": "Time in seconds between each time it eats\n"
			},
			"full_delay": {
				"type": "Integer",
				"default_value": "100",
				"description": "Amount of time in seconds before this mob wants to eat again\n"
			},
			"goal_radius": {
				"type": "Decimal",
				"default_value": "0.5",
				"description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot\n"
			},
			"max_to_eat": {
				"type": "Integer",
				"default_value": "6",
				"description": "Maximum number of things this entity wants to eat\n"
			},
			"search_range": {
				"type": "Integer",
				"default_value": "0",
				"description": "Distance in blocks the mob will look for crops to eat\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to eat crops out of farms until they are full."
		},
		"minecraft:behavior.random_breach": {
			"cooldown_time": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Time in seconds the mob has to wait before using the goal again\n"
			},
			"interval": {
				"type": "Integer",
				"default_value": "120",
				"description": "A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"xz_dist": {
				"type": "Integer",
				"default_value": "10",
				"description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1\n"
			},
			"y_dist": {
				"type": "Integer",
				"default_value": "7",
				"description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1\n"
			},
			"__des__": "Allows the mob to randomly break surface of the water."
		},
		"minecraft:behavior.random_fly": {
			"can_land_on_trees": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the mob can stop flying and land on a tree instead of the ground\n"
			},
			"xz_dist": {
				"type": "Integer",
				"default_value": "10",
				"description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1\n"
			},
			"y_dist": {
				"type": "Integer",
				"default_value": "7",
				"description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1\n"
			},
			"__des__": "Allows a mob to randomly fly around."
		},
		"minecraft:behavior.random_look_around": {
			"look_time": {
				"type": "Range [a, b]",
				"default_value": "[2, 4]",
				"description": "The range of time in seconds the mob will stay looking in a random direction before looking elsewhere\n"
			},
			"__des__": "Allows the mob to randomly look around."
		},
		"minecraft:behavior.random_stroll": {
			"interval": {
				"type": "Integer",
				"default_value": "120",
				"description": "A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"xz_dist": {
				"type": "Integer",
				"default_value": "10",
				"description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1\n"
			},
			"y_dist": {
				"type": "Integer",
				"default_value": "7",
				"description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1\n"
			},
			"__des__": "Allows a mob to randomly stroll around."
		},
		"minecraft:behavior.random_swim": {
			"interval": {
				"type": "Integer",
				"default_value": "120",
				"description": "A random value to determine when to randomly move somewhere. This has a 1/interval chance to choose this goal\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"xz_dist": {
				"type": "Integer",
				"default_value": "10",
				"description": "Distance in blocks on ground that the mob will look for a new spot to move to. Must be at least 1\n"
			},
			"y_dist": {
				"type": "Integer",
				"default_value": "7",
				"description": "Distance in blocks that the mob will look up or down for a new spot to move to. Must be at least 1\n"
			},
			"__des__": "Allows an entity to randomly move through water"
		},
		"minecraft:behavior.ranged_attack": {
			"attack_interval_max": {
				"type": "Integer",
				"default_value": "0",
				"description": "Maximum amount of time in seconds the entity will wait after an attack before launching another\n"
			},
			"attack_interval_min": {
				"type": "Integer",
				"default_value": "0",
				"description": "Minimum amount of time in seconds the entity will wait after an attack before launching another\n"
			},
			"attack_radius": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Maxmimum distance the target can be for this mob to fire. If the target is further away, this mob will move first before firing\n"
			},
			"burst_interval": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Amount of time in seconds between each individual shot when firing multiple shots per attack\n"
			},
			"burst_shots": {
				"type": "Integer",
				"default_value": "1",
				"description": "Number of shots fired every time the mob uses a charged attack\n"
			},
			"charge_charged_trigger": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "The minimum amount of time in ticks the mob has to charge before firing a charged attack\n"
			},
			"charge_shoot_trigger": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "The minimum amount of time in ticks for the mob to start charging a charged shot. Must be greater than 0 to enable burst shots\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to use ranged attacks like shooting arrows."
		},
		"minecraft:behavior.receive_love": {
			"__des__": "Allows the villager to stop so another villager can breed with it. Can only be used by a Villager."
		},
		"minecraft:behavior.restrict_open_door": {
			"__des__": "Allows the mob to stay indoors during night time."
		},
		"minecraft:behavior.restrict_sun": {
			"__des__": "Allows the mob to automatically start avoiding the sun when its a clear day out."
		},
		"minecraft:behavior.run_around_like_crazy": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to run around aimlessly."
		},
		"minecraft:behavior.send_event": {
			"cast_duration": {
				"type": "Decimal",
				"default_value": "Total delay of the steps",
				"description": "Time in seconds for the entire event sending process\n"
			},
			"sequence": {
				"type": "List",
				"default_value": "",
				"description": "List of events to send\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>base_delay</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>Amount of time in seconds before starting this step\n</td>\n</tr>\n<tr>\n<td>event</td>\n<td>String</td>\n<td></td>\n<td>The event to send to the entity\n</td>\n</tr>\n<tr>\n<td>sound_event</td>\n<td>String</td>\n<td></td>\n<td>The sound event to play when this step happens\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Allows the mob to send an event to another mob."
		},
		"minecraft:behavior.share_items": {
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entities this mob will share items with\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"goal_radius": {
				"type": "Decimal",
				"default_value": "0.5",
				"description": "Distance in blocks within the mob considers it has reached the goal. This is the \"wiggle room\" to stop the AI from bouncing back and forth trying to reach a specific spot\n"
			},
			"max_dist": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Maximum distance in blocks this mob will look for entities to share items with\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"__des__": "Allows the mob to give items it has to others."
		},
		"minecraft:behavior.silverfish_merge_with_stone": {
			"__des__": "Allows the mob to go into stone blocks like Silverfish do. Currently it can only be used by Silverfish."
		},
		"minecraft:behavior.silverfish_wake_up_friends": {
			"__des__": "Allows the mob to alert mobs in nearby blocks to come out. Currently it can only be used by Silverfish."
		},
		"minecraft:behavior.skeleton_horse_trap": {
			"duration": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Amount of time in seconds the trap exists. After this amount of time is elapsed, the trap is removed from the world if it hasn't been activated\n"
			},
			"within_radius": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Distance in blocks that the player has to be within to trigger the horse trap\n"
			},
			"__des__": "Allows Equine mobs to be Horse Traps and be triggered like them, spawning a lightning bolt and a bunch of horses when a player is nearby. Can only be used by Horses, Mules, Donkeys and Skeleton Horses."
		},
		"minecraft:behavior.slime_attack": {
			"__des__": "Can only be used by Slimes and Magma Cubes. Allows the mob to use a melee attack like the slime's."
		},
		"minecraft:behavior.slime_float": {
			"__des__": "Can only be used by Slimes and Magma Cubes. Controls their ability to float in water / lava."
		},
		"minecraft:behavior.slime_keep_on_jumping": {
			"__des__": "Can only be used by Slimes and Magma Cubes. Allows the mob to continuously jump around like a slime."
		},
		"minecraft:behavior.slime_random_direction": {
			"__des__": "Can only be used by Slimes and Magma Cubes. Allows the mob to move in random directions like a slime."
		},
		"minecraft:behavior.squid_dive": {
			"__des__": "Allows the squid to dive down in water. Can only be used by the Squid."
		},
		"minecraft:behavior.squid_flee": {
			"__des__": "Allows the squid to swim away. Can only be used by the Squid."
		},
		"minecraft:behavior.squid_idle": {
			"__des__": "Allows the squid to swim in place idly. Can only be used by the Squid."
		},
		"minecraft:behavior.squid_move_away_from_ground": {
			"__des__": "Allows the squid to move away from ground blocks and back to water. Can only be used by the Squid."
		},
		"minecraft:behavior.squid_out_of_water": {
			"__des__": "Allows the squid to stick to the ground when outside water. Can only be used by the Squid."
		},
		"minecraft:behavior.stay_while_sitting": {
			"__des__": "Allows the mob to stay put while it is in a sitting state instead of doing something else."
		},
		"minecraft:behavior.stomp_attack": {
			"attack_types": {
				"type": "String",
				"default_value": "",
				"description": "Defines the entity types this mob will attack\n"
			},
			"random_stop_interval": {
				"type": "Integer",
				"default_value": "0",
				"description": "Defines the probability the mob will stop fighting. A value of 0 disables randomly stopping, while a value of 1 defines a 50% chance\n"
			},
			"reach_multiplier": {
				"type": "Decimal",
				"default_value": "2.0",
				"description": "Multiplier for how far outside its box the mob can reach its target (this can be used to simulate a mob with longer arms by making this bigger)\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"track_target": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this mob will chase after the target as long as it's a valid target\n"
			},
			"__des__": "Allows the mob to use the polar bear's melee attack."
		},
		"minecraft:behavior.summon_entity": {
			"summon_choices": {
				"type": "List",
				"default_value": "",
				"description": "List of spells for the mob to use to summon entities. Each spell has the following parameters:\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>cast_duration</td>\n<td>Decimal</td>\n<td>Total delay of the steps</td>\n<td>Time in seconds the spell casting will take\n</td>\n</tr>\n<tr>\n<td>cooldown_time</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>Time in seconds the mob has to wait before using the spell again\n</td>\n</tr>\n<tr>\n<td>do_casting</td>\n<td>Boolean</td>\n<td>true</td>\n<td>If true, the mob will do the casting animations and render spell particles\n</td>\n</tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>max_activation_range</td>\n<td>Decimal</td>\n<td>-1.0</td>\n<td>Upper bound of the activation distance in blocks for this spell\n</td>\n</tr>\n<tr>\n<td>min_activation_range</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Lower bound of the activation distance in blocks for this spell\n</td>\n</tr>\n<tr>\n<td>particle_color</td>\n<td>Integer</td>\n<td>0</td>\n<td>The color of the particles for this spell\n</td>\n</tr>\n<tr>\n<td>sequence</td>\n<td>List</td>\n<td></td>\n<td>List of steps for the spell. Each step has the following parameters:\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>base_delay</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>Amount of time in seconds to wait before this step starts\n</td>\n</tr>\n<tr>\n<td>delay_per_summon</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>Amount of time in seconds before each entity is summoned in this step\n</td>\n</tr>\n<tr>\n<td>entity_lifespan</td>\n<td>Decimal</td>\n<td>-1.0</td>\n<td>Amount of time in seconds that the spawned entity will be alive for. A value of -1.0 means it will remain alive for as long as it can\n</td>\n</tr>\n<tr>\n<td>entity_type</td>\n<td>String</td>\n<td></td>\n<td>The entity type of the entities we will spawn in this step\n</td>\n</tr>\n<tr>\n<td>num_entities_spawned</td>\n<td>Integer</td>\n<td>1</td>\n<td>Number of entities that will be spawned in this step\n</td>\n</tr>\n<tr>\n<td>shape</td>\n<td>String</td>\n<td>line</td>\n<td>The base shape of this step. Valid values are circle and line\n</td>\n</tr>\n<tr>\n<td>size</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>The base size of the entity\n</td>\n</tr>\n<tr>\n<td>sound_event</td>\n<td>String</td>\n<td></td>\n<td>The sound event to play for this step\n</td>\n</tr>\n<tr>\n<td>summon_cap</td>\n<td>Integer</td>\n<td>0</td>\n<td>Maximum number of summoned entities at any given time\n</td>\n</tr>\n<tr>\n<td>summon_cap_radius</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td></td>\n</tr>\n<tr>\n<td>target</td>\n<td>String</td>\n<td>self</td>\n<td>The target of the spell. This is where the spell will start (line will start here, circle will be centered here)\n</td>\n</tr>\n</tbody></table>\n</td>\n</tr>\n<tr>\n<td>start_sound_event</td>\n<td>String</td>\n<td></td>\n<td>The sound event to play when using this spell\n</td>\n</tr>\n<tr>\n<td>weight</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>The weight of this spell. Controls how likely the mob is to choose this spell when casting one\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Allows the mob to attack the player by summoning other entities."
		},
		"minecraft:behavior.swell": {
			"start_distance": {
				"type": "Decimal",
				"default_value": "10.0",
				"description": "This mob starts swelling when a target is at least this many blocks away\n"
			},
			"stop_distance": {
				"type": "Decimal",
				"default_value": "2.0",
				"description": "This mob stops swelling when a target has moved away at least this many blocks\n"
			},
			"__des__": "Allows the creeper to swell up when a player is nearby. It can only be used by Creepers."
		},
		"minecraft:behavior.swim_wander": {
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "10",
				"description": "speed of the entity\n"
			},
			"__des__": "Has the fish swim around when they can't pathfind"
		},
		"minecraft:behavior.take_flower": {
			"__des__": "Can only be used by Villagers. Allows the mob to accept flowers from Iron Golems."
		},
		"minecraft:behavior.tempt": {
			"can_get_scared": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the mob can stop being tempted if the player moves too fast while close to this mob\n"
			},
			"items": {
				"type": "List",
				"default_value": "",
				"description": "List of items this mob is tempted by\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Movement speed multiplier of the mob when using this AI Goal\n"
			},
			"within_radius": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Distance in blocks this mob can get tempted by a player holding an item they like\n"
			},
			"__des__": "Allows the mob to be tempted by food they like."
		},
		"minecraft:behavior.trade_with_player": {
			"__des__": "Allows the player to trade with this mob."
		},
		"minecraft:behavior.vex_copy_owner_target": {
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entities this mob can copy the owner from\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Allows the mob to target the same entity its owner is targeting."
		},
		"minecraft:behavior.vex_random_move": {
			"__des__": "Allows the mob to move around randomly like the Vex."
		},
		"minecraft:behavior.wither_random_attack_pos_goal": {
			"__des__": "Allows the wither to launch random attacks. Can only be used by the Wither Boss."
		},
		"minecraft:behavior.wither_target_highest_damage": {
			"entity_types": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of entity types the wither takes into account to find who dealt the most damage to it\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>Conditions that make this entry in the list valid\n</td>\n</tr>\n<tr>\n<td>max_dist</td>\n<td>Decimal</td>\n<td>16</td>\n<td>Maximum distance this mob can be away to be a valid choice\n</td>\n</tr>\n<tr>\n<td>must_see</td>\n<td>Boolean</td>\n<td>false</td>\n<td>If true, the mob has to be visible to be a valid choice\n</td>\n</tr>\n<tr>\n<td>sprint_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the running speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n<tr>\n<td>walk_speed_multiplier</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>Multiplier for the walking speed. A value of 1.0 means the speed is unchanged\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Allows the wither to focus its attacks on whichever mob has dealt the most damage to it."
		},
		"minecraft:boostable": {
			"boost_items": {
				"type": "List",
				"default_value": "",
				"description": "List of items that can be used to boost while riding this entity. Each item has the following properties:\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>damage</td>\n<td>Integer</td>\n<td>1</td>\n<td>This is the damage that the item will take each time it is used\n</td>\n</tr>\n<tr>\n<td>item</td>\n<td>String</td>\n<td></td>\n<td>Name of the item that can be used to boost\n</td>\n</tr>\n<tr>\n<td>replaceItem</td>\n<td>String</td>\n<td></td>\n<td>The item used to boost will become this item once it is used up\n</td>\n</tr>\n</tbody></table>\n"
			},
			"duration": {
				"type": "Integer",
				"default_value": "3",
				"description": "Time in seconds for the boost\n"
			},
			"speed_multiplier": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast\n"
			},
			"__des__": "Defines the conditions and behavior of a rideable entity's boost"
		},
		"minecraft:breathable": {
			"breatheBlocks": {
				"type": "List",
				"default_value": "",
				"description": "List of blocks this entity can breathe in, in addition to the above\n"
			},
			"breathesAir": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, this entity can breathe in air\n"
			},
			"breathesLava": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this entity can breathe in lava\n"
			},
			"breathesSolids": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this entity can breathe in solid blocks\n"
			},
			"breathesWater": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this entity can breathe in water\n"
			},
			"generatesBubbles": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, this entity will have visible bubbles while in water\n"
			},
			"inhaleTime": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Time in seconds to recover breath to maximum\n"
			},
			"nonBreatheBlocks": {
				"type": "List",
				"default_value": "",
				"description": "List of blocks this entity can't breathe in, in addition to the above\n"
			},
			"suffocateTime": {
				"type": "Integer",
				"default_value": "-20",
				"description": "Time in seconds between suffocation damage\n"
			},
			"totalSupply": {
				"type": "Integer",
				"default_value": "15",
				"description": "Time in seconds the entity can hold its breath\n"
			},
			"__des__": "Defines what blocks this entity can breathe in and gives them the ability to suffocate"
		},
		"minecraft:breedable": {
			"allowSitting": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, entities can breed while sitting\n"
			},
			"breedCooldown": {
				"type": "Decimal",
				"default_value": "60.0",
				"description": "Time in seconds before the Entity can breed again\n"
			},
			"breedItems": {
				"type": "List",
				"default_value": "",
				"description": "The list of items that can be used to get the entity into the 'love' state\n"
			},
			"breedsWith": {
				"type": "List",
				"default_value": "",
				"description": "The list of entity definitions that this entity can breed with\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>babyType</td>\n<td>String</td>\n<td></td>\n<td>The entity definition of this entity's babies\n</td>\n</tr>\n<tr>\n<td>breed_event</td>\n<td>String</td>\n<td></td>\n<td>Event to run when this entity breeds\n</td>\n</tr>\n<tr>\n<td>mateType</td>\n<td>String</td>\n<td></td>\n<td>The entity definition of this entity's mate\n</td>\n</tr>\n</tbody></table>\n"
			},
			"extraBabyChance": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Chance that up to 16 babies will spawn between 0.0 and 1.0, where 1.0 is 100%\n"
			},
			"inheritTamed": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the babies will be automatically tamed if its parents are\n"
			},
			"mutation_factor": {
				"type": "JSON Object",
				"default_value": "",
				"description": "Determines how likely the babies are to NOT inherit one of their parent's variances. Values are between 0.0 and 1.0, with a higher number meaning more likely to mutate\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>color</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>The percentage chance of a mutation on the entity's color\n</td>\n</tr>\n<tr>\n<td>extra_variant</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>The percentage chance of a mutation on the entity's extra variant type\n</td>\n</tr>\n<tr>\n<td>variant</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>The percentage chance of a mutation on the entity's variant type\n</td>\n</tr>\n</tbody></table>\n"
			},
			"requireTame": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the entities need to be tamed first before they can breed.\n"
			},
			"__des__": "Defines the way an entity can get into the 'love' state."
		},
		"minecraft:burns_in_daylight": {
			"__des__": "Sets that this entity burns if exposed to daylight."
		},
		"minecraft:can_climb": {
			"__des__": "Allows this entity to climb up ladders."
		},
		"minecraft:can_fly": {
			"__des__": "Marks the entity as being able to fly, the pathfinder won't be restricted to paths where a solid block is required underneath it."
		},
		"minecraft:can_power_jump": {
			"__des__": "Allows the entity to power jump like the horse does in vanilla."
		},
		"minecraft:collision_box": {
			"height": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Height of the Collision Box in Blocks\n"
			},
			"width": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Width and Depth of the Collision Box in Blocks\n"
			},
			"__des__": "Sets the width and height of the Entity's collision box."
		},
		"minecraft:color": {
			"value": {
				"type": "Integer",
				"default_value": "0",
				"description": "The Palette Color value of the entity\n"
			},
			"__des__": "Defines the entity's color. Only works on vanilla entities that have predefined color values (sheep, llama, shulker)."
		},
		"minecraft:color2": {
			"value": {
				"type": "Integer",
				"default_value": "0",
				"description": "The second Palette Color value of the entity\n"
			},
			"__des__": "Defines the entity's second texture color. Only works on vanilla entities that have a second predefined color values (tropical fish)."
		},
		"minecraft:damage_over_time": {
			"damagePerHurt": {
				"type": "Integer",
				"default_value": "1",
				"description": "Amount of damage caused each hurt\n"
			},
			"timeBetweenHurt": {
				"type": "Integer",
				"default_value": "0",
				"description": "Time in seconds between damage\n"
			},
			"__des__": "Applies defined amount of damage to the entity at specified intervals"
		},
		"minecraft:damage_sensor": {
			"cause": {
				"type": "String",
				"default_value": "",
				"description": "Type of damage that triggers this set of events\n"
			},
			"deals_damage": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the damage dealt to the entity will take off health from it. Set to false to make the entity ignore that damage\n"
			},
			"on_damage": {
				"type": "List",
				"default_value": "",
				"description": "List of triggers with the events to call when taking this specific kind of damage. Allows specifying filters for entity definitions and events\n"
			},
			"__des__": "Defines what events to call when this entity is damaged by specific entities or items. Can be either an array or a single instance."
		},
		"minecraft:default_look_angle": {
			"value": {
				"type": "Decimal",
				"default_value": "0.0f",
				"description": "Angle in degrees\n"
			},
			"__des__": "Sets this entity's default head rotation angle."
		},
		"minecraft:environment_sensor": {
			"on_environment": {
				"type": "List",
				"default_value": "",
				"description": "The list of triggers that fire when the environment conditions match the given filter criteria.\n"
			},
			"__des__": "Creates a trigger based on environment conditions."
		},
		"minecraft:equipment": {
			"table": {
				"type": "String",
				"default_value": "",
				"description": "The path to the equipment table, relative to the Behavior Pack's root\n"
			},
			"__des__": "Sets the Equipment table to use for this Entity."
		},
		"minecraft:equippable": {
			"slots": {
				"type": "List",
				"default_value": "",
				"description": "List of slots and the item that can be equipped\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>accepted_items</td>\n<td>List</td>\n<td></td>\n<td>The list of items that can go in this slot\n</td>\n</tr>\n<tr>\n<td>interact_text</td>\n<td>String</td>\n<td></td>\n<td>Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls\n</td>\n</tr>\n<tr>\n<td>item</td>\n<td>String</td>\n<td></td>\n<td>Name of the item that can be equipped for this slot\n</td>\n</tr>\n<tr>\n<td>on_equip</td>\n<td>String</td>\n<td></td>\n<td>Event to trigger when this entity is equipped with this item\n</td>\n</tr>\n<tr>\n<td>on_unequip</td>\n<td>String</td>\n<td></td>\n<td>Event to trigger when this item is removed from this entity\n</td>\n</tr>\n<tr>\n<td>slot</td>\n<td>Integer</td>\n<td>0</td>\n<td>The slot number of this slot\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Defines an entity's behavior for having items equipped to it"
		},
		"minecraft:explode": {
			"breaks_blocks": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the explosion will destroy blocks in the explosion radius\n"
			},
			"causesFire": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, blocks in the explosion radius will be set on fire\n"
			},
			"destroyAffectedByGriefing": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, whether the explosion breaks blocks is affected by the mob griefing game rule\n"
			},
			"fireAffectedByGriefing": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, whether the explosion causes fire is affected by the mob griefing game rule\n"
			},
			"fuseLength": {
				"type": "Range [a, b]",
				"default_value": "[0.0, 0.0]",
				"description": "The range for the random amount of time the fuse will be lit before exploding. A negative value means the explosion will be immediate\n"
			},
			"fuseLit": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the fuse is already lit when this component is added to the entity\n"
			},
			"maxResistance": {
				"type": "Decimal",
				"default_value": "Infinite",
				"description": "Blocks with less resistance than this value will be broken by the explosion\n"
			},
			"power": {
				"type": "Decimal",
				"default_value": "3.0",
				"description": "The radius of the explosion in blocks and the amount of damage the explosion deals\n"
			},
			"__des__": "Defines how the entity explodes."
		},
		"minecraft:fire_immune": {
			"__des__": "Sets that this entity doesn't take damage from fire."
		},
		"minecraft:floats_in_liquid": {
			"__des__": "Sets that this entity can float in liquid blocks."
		},
		"minecraft:flying_speed": {
			"value": {
				"type": "Decimal",
				"default_value": "0.02",
				"description": "Flying speed in blocks per tick\n"
			},
			"__des__": "Speed in Blocks that this entity flies at."
		},
		"minecraft:foot_size": {
			"value": {
				"type": "Decimal",
				"default_value": "0.5",
				"description": "The value of the size of the entity's step\n"
			},
			"__des__": "Sets the number of blocks the entity can step without jumping."
		},
		"minecraft:friction_modifier": {
			"value": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "The higher the number, the more the friction affects this entity. A value of 1.0 means regular friction, while 2.0 means twice as much\n"
			},
			"__des__": "Defines how much does friction affect this entity."
		},
		"minecraft:ground_offset": {
			"value": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "The value of the entity's offset from the terrain, in blocks\n"
			},
			"__des__": "Sets the offset from the ground that the entity is actually at."
		},
		"minecraft:healable": {
			"items": {
				"type": "List",
				"default_value": "",
				"description": "The list of items that can be used to heal this entity\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>filters</td>\n<td>Minecraft Filter</td>\n<td></td>\n<td>The list of conditions for this trigger\n</td>\n</tr>\n<tr>\n<td>force_use</td>\n<td>Boolean</td>\n<td>false</td>\n<td>Determines if item can be used regardless of entity being full health\n</td>\n</tr>\n<tr>\n<td>heal_amount</td>\n<td>Decimal</td>\n<td>1.0</td>\n<td>The amount of health this entity gains when fed this item\n</td>\n</tr>\n<tr>\n<td>item</td>\n<td>String</td>\n<td></td>\n<td>Name of the item this entity likes and can be used to heal this entity\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Defines the interactions with this entity for healing it."
		},
		"minecraft:hurt_when_wet": {
			"__des__": "Sets that this entity will take damage when it is wet."
		},
		"minecraft:input_ground_controlled": {
			"__des__": "When configured as a rideable entity, the entity will be controlled using WASD controls."
		},
		"minecraft:interact": {
			"add_items": {
				"type": "JSON Object",
				"default_value": "",
				"description": "Loot table with items to add to the player's inventory upon successful interaction\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>table</td>\n<td>String</td>\n<td></td>\n<td>File path, relative to the Behavior Pack's path, to the loot table file\n</td>\n</tr>\n</tbody></table>\n"
			},
			"cooldown": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Time in seconds before this entity can be interacted with again\n"
			},
			"hurt_item": {
				"type": "Integer",
				"default_value": "0",
				"description": "The amount of damage the item will take when used to interact with this entity. A value of 0 means the item won't lose durability\n"
			},
			"interact_text": {
				"type": "String",
				"default_value": "",
				"description": "Text to show when the player is able to interact in this way with this entity when playing with Touch-screen controls\n"
			},
			"on_interact": {
				"type": "String",
				"default_value": "",
				"description": "Event to fire when the interaction occurs\n"
			},
			"particle_on_start": {
				"type": "JSON Object",
				"default_value": "",
				"description": "Particle effect that will be triggered at the start of the interaction\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>particle_offset_towards_interactor</td>\n<td>Boolean</td>\n<td></td>\n<td>Whether or not the particle will appear closer to who performed the interaction</td>\n</tr><tr>\n<td>particle_type</td>\n<td>String</td>\n<td></td>\n<td>The type of particle that will be spawned</td>\n</tr><tr>\n<td>particle_y_offset</td>\n<td>Decimal</td>\n<td></td>\n<td>Will offset the particle this amount in the y direction</td>\n</tr>\n</tbody></table>"
			},
			"play_sounds": {
				"type": "String",
				"default_value": "",
				"description": "List of sounds to play when the interaction occurs\n"
			},
			"spawn_entities": {
				"type": "String",
				"default_value": "",
				"description": "List of entities to spawn when the interaction occurs\n"
			},
			"spawn_items": {
				"type": "JSON Object",
				"default_value": "",
				"description": "Loot table with items to drop on the ground upon successful interaction\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>table</td>\n<td>String</td>\n<td></td>\n<td>File path, relative to the Behavior Pack's path, to the loot table file\n</td>\n</tr>\n</tbody></table>\n"
			},
			"swing": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the player will do the 'swing' animation when interacting with this entity\n"
			},
			"transform_to_item": {
				"type": "String",
				"default_value": "",
				"description": "The item used will transform to this item upon successful interaction. Format: itemName:auxValue\n"
			},
			"use_item": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the interaction will use an item\n"
			},
			"__des__": "Defines interactions with this entity."
		},
		"minecraft:inventory": {
			"additional_slots_per_strength": {
				"type": "Integer",
				"default_value": "0",
				"description": "Number of slots that this entity can gain per extra strength\n"
			},
			"can_be_siphoned_from": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the contents of this inventory can be removed by a hopper\n"
			},
			"container_type": {
				"type": "String",
				"default_value": "none",
				"description": "Type of container this entity has. Can be horse, minecart_chest, minecart_hopper, inventory, container or hopper\n"
			},
			"inventory_size": {
				"type": "Integer",
				"default_value": "5",
				"description": "Number of slots the container has\n"
			},
			"linked_slots_size": {
				"type": "Integer",
				"default_value": "0",
				"description": "Number of linked slots (e.g. Player Hotbar) the container has\n"
			},
			"private": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, only the entity can access the inventory\n"
			},
			"restrict_to_owner": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the entity's inventory can only be accessed by its owner or itself\n"
			},
			"__des__": "Defines this entity's inventory properties."
		},
		"minecraft:is_baby": {
			"__des__": "Sets that this entity is a baby."
		},
		"minecraft:is_charged": {
			"__des__": "Sets that this entity is charged."
		},
		"minecraft:is_chested": {
			"__des__": "Sets that this entity is currently carrying a chest."
		},
		"minecraft:is_dyeable": {
			"interact_text": {
				"type": "String",
				"default_value": "",
				"description": "The text that will display when interacting with this entity with a dye when playing with Touch-screen controls\n"
			},
			"__des__": "Allows dyes to be used on this entity to change its color."
		},
		"minecraft:is_ignited": {
			"__des__": "Sets that this entity is currently on fire."
		},
		"minecraft:is_saddled": {
			"__des__": "Sets that this entity is currently saddled."
		},
		"minecraft:is_shaking": {
			"__des__": "Sets that this entity is currently shaking."
		},
		"minecraft:is_sheared": {
			"__des__": "Sets that this entity is currently sheared."
		},
		"minecraft:is_stackable": {
			"__des__": "Sets that this entity can be stacked."
		},
		"minecraft:is_tamed": {
			"__des__": "Sets that this entity is currently tamed."
		},
		"minecraft:item_controllable": {
			"control_items": {
				"type": "List",
				"default_value": "",
				"description": "List of items that can be used to control this entity\n"
			},
			"__des__": "Defines what items can be used to control this entity while ridden"
		},
		"minecraft:item_hopper": {
			"__des__": "Determines that this entity is an item hopper"
		},
		"minecraft:jump.dynamic": {
			"__des__": "Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob."
		},
		"minecraft:jump.static": {
			"jump_power": {
				"type": "Decimal",
				"default_value": "0.42",
				"description": "The initial vertical velocity for the jump\n"
			},
			"__des__": "Gives the entity the ability to jump."
		},
		"minecraft:leashable": {
			"hard_distance": {
				"type": "Decimal",
				"default_value": "6.0",
				"description": "Distance in blocks at which the leash stiffens, restricting movement\n"
			},
			"max_distance": {
				"type": "Decimal",
				"default_value": "10.0",
				"description": "Distance in blocks at which the leash breaks\n"
			},
			"on_leash": {
				"type": "String",
				"default_value": "",
				"description": "Event to call when this entity is leashed\n"
			},
			"on_unleash": {
				"type": "String",
				"default_value": "",
				"description": "Event to call when this entity is unleashed\n"
			},
			"soft_distance": {
				"type": "Decimal",
				"default_value": "4.0",
				"description": "Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it\n"
			},
			"__des__": "Allows this entity to be leashed and Defines the conditions and events for this entity when is leashed."
		},
		"minecraft:lookat": {
			"filters": {
				"type": "String",
				"default_value": "player",
				"description": "Defines the entities that can trigger this component\n"
			},
			"look_cooldown": {
				"type": "Range [a, b]",
				"default_value": "[0.0, 0.0]",
				"description": "The range for the random amount of time during which the entity is 'cooling down' and won't get angered or look for a target\n"
			},
			"look_event": {
				"type": "String",
				"default_value": "",
				"description": "Event to run when the entities specified in filters look at this entity\n"
			},
			"mAllowInvulnerable": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, invulnerable entities (e.g. Players in creative mode) are considered valid targets\n"
			},
			"searchRadius": {
				"type": "Decimal",
				"default_value": "10.0",
				"description": "Maximum distance this entity will look for another entity looking at it\n"
			},
			"setTarget": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, this entity will set the attack target as the entity that looked at it\n"
			},
			"__des__": "Defines the behavior when another entity looks at this entity."
		},
		"minecraft:loot": {
			"table": {
				"type": "String",
				"default_value": "",
				"description": "The path to the loot table, relative to the Behavior Pack's root\n"
			},
			"__des__": "Sets the loot table for what items this entity drops upon death."
		},
		"minecraft:mark_variant": {
			"value": {
				"type": "Integer",
				"default_value": "0",
				"description": "The ID of the variant. By convention, 0 is the ID of the base entity\n"
			},
			"__des__": "Additional variant value. Can be used to further differentiate variants."
		},
		"minecraft:movement.basic": {
			"max_turn": {
				"type": "Decimal",
				"default_value": "30.0",
				"description": "The maximum number in degrees the mob can turn per tick.\n"
			},
			"__des__": "This component accents the movement of an entity."
		},
		"minecraft:movement.fly": {
			"max_turn": {
				"type": "Decimal",
				"default_value": "30.0",
				"description": "The maximum number in degrees the mob can turn per tick.\n"
			},
			"__des__": "This move control causes the mob to fly."
		},
		"minecraft:movement.generic": {
			"max_turn": {
				"type": "Decimal",
				"default_value": "30.0",
				"description": "The maximum number in degrees the mob can turn per tick.\n"
			},
			"__des__": "This move control allows a mob to fly, swim, climb, etc."
		},
		"minecraft:movement.jump": {
			"jump_delay": {
				"type": "Range [a, b]",
				"default_value": "[0.0, 0.0]",
				"description": "Delay after landing when using the slime move control.\n"
			},
			"max_turn": {
				"type": "Decimal",
				"default_value": "30.0",
				"description": "The maximum number in degrees the mob can turn per tick.\n"
			},
			"__des__": "Move control that causes the mob to jump as it moves with a specified delay between jumps."
		},
		"minecraft:movement.skip": {
			"max_turn": {
				"type": "Decimal",
				"default_value": "30.0",
				"description": "The maximum number in degrees the mob can turn per tick.\n"
			},
			"__des__": "This move control causes the mob to hop as it moves."
		},
		"minecraft:movement.sway": {
			"max_turn": {
				"type": "Decimal",
				"default_value": "30.0",
				"description": "The maximum number in degrees the mob can turn per tick.\n"
			},
			"__des__": "This move control causes the mob to sway side to side giving the impression it is swimming."
		},
		"minecraft:nameable": {
			"allowNameTagRenaming": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, this entity can be renamed with name tags\n"
			},
			"alwaysShow": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the name will always be shown\n"
			},
			"default_trigger": {
				"type": "String",
				"default_value": "",
				"description": "Trigger to run when the entity gets named\n"
			},
			"name_actions": {
				"type": "JSON Object",
				"default_value": "",
				"description": "Describes the special names for this entity and the events to call when the entity acquires those names\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>name_filter</td>\n<td>String</td>\n<td></td>\n<td>List of special names that will cause the events defined in 'on_named' to fire\n</td>\n</tr>\n<tr>\n<td>on_named</td>\n<td>String</td>\n<td></td>\n<td>Event to be called when this entity acquires the name specified in 'name_filter'\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Allows this entity to be named (e.g. using a name tag)"
		},
		"minecraft:navigation.climb": {
			"avoid_portals": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path\n"
			},
			"avoid_sun": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths\n"
			},
			"avoid_water": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid water when creating a path\n"
			},
			"can_float": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder whether or not it can float in water\n"
			},
			"can_open_doors": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door\n"
			},
			"can_pass_doors": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Whether a path can be created through a door\n"
			},
			"can_sink": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water\n"
			},
			"__des__": "Allows this entity to generate paths that include vertical walls like the vanilla Spiders do."
		},
		"minecraft:navigation.float": {
			"avoid_portals": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path\n"
			},
			"avoid_sun": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths\n"
			},
			"avoid_water": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid water when creating a path\n"
			},
			"can_float": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder whether or not it can float in water\n"
			},
			"can_open_doors": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door\n"
			},
			"can_pass_doors": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Whether a path can be created through a door\n"
			},
			"can_sink": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water\n"
			},
			"__des__": "Allows this entity to generate paths by flying around the air like the regular Ghast."
		},
		"minecraft:navigation.fly": {
			"avoid_portals": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path\n"
			},
			"avoid_sun": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths\n"
			},
			"avoid_water": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid water when creating a path\n"
			},
			"can_float": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder whether or not it can float in water\n"
			},
			"can_open_doors": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door\n"
			},
			"can_pass_doors": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Whether a path can be created through a door\n"
			},
			"can_sink": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water\n"
			},
			"__des__": "Allows this entity to generate paths in the air like the vanilla Parrots do."
		},
		"minecraft:navigation.generic": {
			"avoid_portals": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path\n"
			},
			"avoid_sun": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths\n"
			},
			"avoid_water": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid water when creating a path\n"
			},
			"can_float": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder whether or not it can float in water\n"
			},
			"can_open_doors": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door\n"
			},
			"can_pass_doors": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Whether a path can be created through a door\n"
			},
			"can_sink": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water\n"
			},
			"__des__": "Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block."
		},
		"minecraft:navigation.swim": {
			"avoid_portals": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path\n"
			},
			"avoid_sun": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths\n"
			},
			"avoid_water": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid water when creating a path\n"
			},
			"can_float": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder whether or not it can float in water\n"
			},
			"can_open_doors": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door\n"
			},
			"can_pass_doors": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Whether a path can be created through a door\n"
			},
			"can_sink": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water\n"
			},
			"__des__": "Allows this entity to generate paths that include water."
		},
		"minecraft:navigation.walk": {
			"avoid_portals": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid portals (like nether portals) when finding a path\n"
			},
			"avoid_sun": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths\n"
			},
			"avoid_water": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder to avoid water when creating a path\n"
			},
			"can_float": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder whether or not it can float in water\n"
			},
			"can_open_doors": {
				"type": "Boolean",
				"default_value": "false",
				"description": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door\n"
			},
			"can_pass_doors": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Whether a path can be created through a door\n"
			},
			"can_sink": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Tells the pathfinder whether or not it will be pulled down by gravity while in water\n"
			},
			"__des__": "Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs."
		},
		"minecraft:on_death": {
			"event": {
				"type": "String",
				"default_value": "",
				"description": "The event to run when the conditions for this trigger are met\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "The list of conditions for this trigger\n"
			},
			"target": {
				"type": "String",
				"default_value": "self",
				"description": "The target of the event\n"
			},
			"__des__": "Only usable by the Ender Dragon. Adds a trigger to call on this entity's death."
		},
		"minecraft:on_friendly_anger": {
			"event": {
				"type": "String",
				"default_value": "",
				"description": "The event to run when the conditions for this trigger are met\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "The list of conditions for this trigger\n"
			},
			"target": {
				"type": "String",
				"default_value": "self",
				"description": "The target of the event\n"
			},
			"__des__": "Adds a trigger that will run when a nearby entity of the same type as this entity becomes Angry."
		},
		"minecraft:on_hurt": {
			"event": {
				"type": "String",
				"default_value": "",
				"description": "The event to run when the conditions for this trigger are met\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "The list of conditions for this trigger\n"
			},
			"target": {
				"type": "String",
				"default_value": "self",
				"description": "The target of the event\n"
			},
			"__des__": "Adds a trigger to call when this entity takes damage."
		},
		"minecraft:on_hurt_by_player": {
			"event": {
				"type": "String",
				"default_value": "",
				"description": "The event to run when the conditions for this trigger are met\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "The list of conditions for this trigger\n"
			},
			"target": {
				"type": "String",
				"default_value": "self",
				"description": "The target of the event\n"
			},
			"__des__": "Adds a trigger to call when this entity is attacked by the player."
		},
		"minecraft:on_ignite": {
			"event": {
				"type": "String",
				"default_value": "",
				"description": "The event to run when the conditions for this trigger are met\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "The list of conditions for this trigger\n"
			},
			"target": {
				"type": "String",
				"default_value": "self",
				"description": "The target of the event\n"
			},
			"__des__": "Adds a trigger to call when this entity is set on fire."
		},
		"minecraft:on_start_landing": {
			"event": {
				"type": "String",
				"default_value": "",
				"description": "The event to run when the conditions for this trigger are met\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "The list of conditions for this trigger\n"
			},
			"target": {
				"type": "String",
				"default_value": "self",
				"description": "The target of the event\n"
			},
			"__des__": "Only usable by the Ender Dragon. Adds a trigger to call when this entity lands."
		},
		"minecraft:on_start_takeoff": {
			"event": {
				"type": "String",
				"default_value": "",
				"description": "The event to run when the conditions for this trigger are met\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "The list of conditions for this trigger\n"
			},
			"target": {
				"type": "String",
				"default_value": "self",
				"description": "The target of the event\n"
			},
			"__des__": "Only usable by the Ender Dragon. Adds a trigger to call when this entity starts flying."
		},
		"minecraft:on_target_acquired": {
			"event": {
				"type": "String",
				"default_value": "",
				"description": "The event to run when the conditions for this trigger are met\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "The list of conditions for this trigger\n"
			},
			"target": {
				"type": "String",
				"default_value": "self",
				"description": "The target of the event\n"
			},
			"__des__": "Adds a trigger to call when this entity finds a target."
		},
		"minecraft:on_target_escape": {
			"event": {
				"type": "String",
				"default_value": "",
				"description": "The event to run when the conditions for this trigger are met\n"
			},
			"filters": {
				"type": "Minecraft Filter",
				"default_value": "",
				"description": "The list of conditions for this trigger\n"
			},
			"target": {
				"type": "String",
				"default_value": "self",
				"description": "The target of the event\n"
			},
			"__des__": "Adds a trigger to call when this entity loses the target it currently has."
		},
		"minecraft:peek": {
			"on_close": {
				"type": "String",
				"default_value": "",
				"description": "Event to call when the entity is done peeking\n"
			},
			"on_open": {
				"type": "String",
				"default_value": "",
				"description": "Event to call when the entity starts peeking\n"
			},
			"on_target_open": {
				"type": "String",
				"default_value": "",
				"description": "Event to call when the entity's target entity starts peeking\n"
			},
			"__des__": "Defines the entity's 'peek' behavior, defining the events that should be called during it"
		},
		"minecraft:projectile": {
			"angleoffset": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Determines the angle at which the projectile is thrown\n"
			},
			"catchFire": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the entity hit will be set on fire\n"
			},
			"critParticleOnHurt": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the projectile will produce additional particles when a critical hit happens\n"
			},
			"destroyOnHurt": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this entity will be destroyed when hit\n"
			},
			"filter": {
				"type": "String",
				"default_value": "",
				"description": "Entity Definitions defined here can't be hurt by the projectile\n"
			},
			"fireAffectedByGriefing": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, whether the projectile causes fire is affected by the mob griefing game rule\n"
			},
			"gravity": {
				"type": "Decimal",
				"default_value": "0.05",
				"description": "The gravity applied to this entity when thrown. The higher the value, the faster the entity falls\n"
			},
			"hitSound": {
				"type": "String",
				"default_value": "",
				"description": "The sound that plays when the projectile hits something\n"
			},
			"homing": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the projectile homes in to the nearest entity\n"
			},
			"inertia": {
				"type": "Decimal",
				"default_value": "0.99",
				"description": "The fraction of the projectile's speed maintained every frame while traveling in air\n"
			},
			"isdangerous": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the projectile will be treated as dangerous to the players\n"
			},
			"knockback": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the projectile will knock back the entity it hits\n"
			},
			"lightning": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the entity hit will be struck by lightning\n"
			},
			"liquid_inertia": {
				"type": "Decimal",
				"default_value": "0.6",
				"description": "The fraction of the projectile's speed maintained every frame while traveling in water\n"
			},
			"offset": {
				"type": "Vector [a, b, c]",
				"default_value": "[0.0, 0.5, 0.0]",
				"description": "The offset from the entity's anchor where the projectile will spawn\n"
			},
			"onFireTime": {
				"type": "Decimal",
				"default_value": "5.0",
				"description": "Time in seconds that the entity hit will be on fire for\n"
			},
			"particle": {
				"type": "String",
				"default_value": "iconcrack",
				"description": "Particle to use upon collision\n"
			},
			"potionEffect": {
				"type": "Integer",
				"default_value": "-1",
				"description": "Defines the effect the arrow will apply to the entity it hits\n"
			},
			"power": {
				"type": "Decimal",
				"default_value": "1.3",
				"description": "Determines the velocity of the projectile\n"
			},
			"reflectOnHurt": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this entity will be reflected back when hit\n"
			},
			"semirandomdiffdamage": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, damage will be randomized based on damage and speed\n"
			},
			"shootSound": {
				"type": "String",
				"default_value": "",
				"description": "The sound that plays when the projectile is shot\n"
			},
			"shoottarget": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the projectile will be shot towards the target of the entity firing it\n"
			},
			"shouldbounce": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the projectile will bounce upon hit\n"
			},
			"splashPotion": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, the projectile will be treated like a splash potion\n"
			},
			"splashRange": {
				"type": "Decimal",
				"default_value": "4.0",
				"description": "Radius in blocks of the 'splash' effect\n"
			},
			"uncertaintyBase": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier\n"
			},
			"uncertaintyMultiplier": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier\n"
			},
			"__des__": "Allows the entity to be a thrown entity."
		},
		"minecraft:push_through": {
			"value": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "The value of the entity's push-through, in blocks\n"
			},
			"__des__": "Sets the distance through which the entity can push through."
		},
		"minecraft:rail_movement": {
			"max_speed": {
				"type": "Decimal",
				"default_value": "0.4",
				"description": "Maximum speed that this entity will move at when on the rail\n"
			},
			"__des__": "Defines the entity's movement on the rails. An entity with this component is only allowed to move on the rail."
		},
		"minecraft:rail_sensor": {
			"check_block_types": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, on tick this entity will trigger its on_deactivate behavior\n"
			},
			"eject_on_activate": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, this entity will eject all of its riders when it passes over an activated rail\n"
			},
			"eject_on_deactivate": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this entity will eject all of its riders when it passes over a deactivated rail\n"
			},
			"on_activate": {
				"type": "String",
				"default_value": "",
				"description": "Event to call when the rail is activated\n"
			},
			"on_deactivate": {
				"type": "String",
				"default_value": "",
				"description": "Event to call when the rail is deactivated\n"
			},
			"tick_command_block_on_activate": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, command blocks will start ticking when passing over an activated rail\n"
			},
			"tick_command_block_on_deactivate": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If false, command blocks will stop ticking when passing over a deactivated rail\n"
			},
			"__des__": "Defines the behavior of the entity when the rail gets activated or deactivated."
		},
		"minecraft:rideable": {
			"controlling_seat": {
				"type": "Integer",
				"default_value": "0",
				"description": "The seat that designates the driver of the entity\n"
			},
			"crouching_skip_interact": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, this entity can't be interacted with if the entity interacting with it is crouching\n"
			},
			"family_types": {
				"type": "List",
				"default_value": "",
				"description": "List of entities that can ride this entity\n"
			},
			"interact_text": {
				"type": "String",
				"default_value": "",
				"description": "The text to display when the player can interact with the entity when playing with Touch-screen controls\n"
			},
			"pull_in_entities": {
				"type": "Boolean",
				"default_value": "false",
				"description": "If true, this entity will pull in entities that are in the correct family_types into any available seats\n"
			},
			"seat_count": {
				"type": "Integer",
				"default_value": "1",
				"description": "The number of entities that can ride this entity at the same time\n"
			},
			"seats": {
				"type": "List",
				"default_value": "",
				"description": "The list of positions and number of riders for each position for entities riding this entity\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>lock_rider_rotation</td>\n<td>Decimal</td>\n<td>181.0</td>\n<td>Angle in degrees that a rider is allowed to rotate while riding this entity. Omit this property for no limit\n</td>\n</tr>\n<tr>\n<td>max_rider_count</td>\n<td>Integer</td>\n<td>0</td>\n<td>Defines the maximum number of riders that can be riding this entity for this seat to be valid\n</td>\n</tr>\n<tr>\n<td>min_rider_count</td>\n<td>Integer</td>\n<td>0</td>\n<td>Defines the minimum number of riders that need to be riding this entity before this seat can be used\n</td>\n</tr>\n<tr>\n<td>position</td>\n<td>Vector [a, b, c]</td>\n<td>[0.0, 0.0, 0.0]</td>\n<td>Position of this seat relative to this entity's position\n</td>\n</tr>\n<tr>\n<td>rotate_rider_by</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>Offset to rotate riders by\n</td>\n</tr>\n</tbody></table>\n"
			},
			"__des__": "Determines whether this entity can be ridden. Allows specifying the different seat positions and quantity."
		},
		"minecraft:scale": {
			"value": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "The value of the scale. 1.0 means the entity will appear at the scale they are defined in their model. Higher numbers make the entity bigger\n"
			},
			"__des__": "Sets the entity's visual size."
		},
		"minecraft:scale_by_age": {
			"end_scale": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Ending scale of the entity when it's fully grown\n"
			},
			"start_scale": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Initial scale of the newborn entity\n"
			},
			"__des__": "Defines the entity's size interpolation based on the entity's age."
		},
		"minecraft:shareables": {
			"craft_into": {
				"type": "String",
				"default_value": "",
				"description": "Defines the item this entity wants to craft with the item defined above. Should be an item name\n"
			},
			"item": {
				"type": "String",
				"default_value": "",
				"description": "The name of the item\n"
			},
			"surplus_amount": {
				"type": "Integer",
				"default_value": "-1",
				"description": "Number of this item considered extra that the entity wants to share\n"
			},
			"want_amount": {
				"type": "Integer",
				"default_value": "-1",
				"description": "Number of this item this entity wants to share\n"
			},
			"__des__": "Defines a list of items the mob wants to share. Each item must have the following parameters:"
		},
		"minecraft:shooter": {
			"auxVal": {
				"type": "Integer",
				"default_value": "-1",
				"description": "ID of the Potion effect to be applied on hit\n"
			},
			"def": {
				"type": "String",
				"default_value": "",
				"description": "Entity definition to use as projectile for the ranged attack. The entity definition must have the projectile component to be able to be shot as a projectile\n"
			},
			"__des__": "Defines the entity's ranged attack behavior."
		},
		"minecraft:sittable": {
			"sit_event": {
				"type": "String",
				"default_value": "",
				"description": "Event to run when the entity enters the 'sit' state\n"
			},
			"stand_event": {
				"type": "String",
				"default_value": "",
				"description": "Event to run when the entity exits the 'sit' state\n"
			},
			"__des__": "Defines the entity's 'sit' state."
		},
		"minecraft:sound_volume": {
			"value": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "The value of the volume the entity uses for sound effects\n"
			},
			"__des__": "Sets the entity's base volume for sound effects."
		},
		"minecraft:spawn_entity": {
			"max_wait_time": {
				"type": "Integer",
				"default_value": "600",
				"description": "Maximum amount of time to randomly wait in seconds before another entity is spawned\n"
			},
			"min_wait_time": {
				"type": "Integer",
				"default_value": "300",
				"description": "Minimum amount of time to randomly wait in seconds before another entity is spawned\n"
			},
			"spawn_entity": {
				"type": "String",
				"default_value": "",
				"description": "Identifier of the entity to spawn. Leave empty to spawn the item defined above instead\n"
			},
			"spawn_event": {
				"type": "String",
				"default_value": "minecraft:entity_born",
				"description": "Event to call when the entity is spawned\n"
			},
			"spawn_item": {
				"type": "String",
				"default_value": "egg",
				"description": "Name of the item to spawn\n"
			},
			"spawn_method": {
				"type": "String",
				"default_value": "born",
				"description": "Method to use to spawn the entity\n"
			},
			"spawn_sound": {
				"type": "String",
				"default_value": "plop",
				"description": "Name of the sound effect to play when the entity is spawned\n"
			},
			"__des__": "Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior)."
		},
		"minecraft:spell_effects": {
			"add_effects": {
				"type": "List",
				"default_value": "",
				"description": "List of effects to add to this entity after adding this component\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>effect</td>\n<td>String</td>\n<td></td>\n<td>Effect to add to this entity. Includes 'duration' in seconds, 'amplifier' level, 'ambient' if it is to be considered an ambient effect, and 'visible' if the effect should be visible\n</td>\n</tr>\n</tbody></table>\n"
			},
			"remove_effects": {
				"type": "String",
				"default_value": "",
				"description": "List of names of effects to be removed from this entity after adding this component\n"
			},
			"__des__": "Defines what mob effects to add and remove to the entity when adding this component."
		},
		"minecraft:strength": {
			"max": {
				"type": "Integer",
				"default_value": "5",
				"description": "The maximum strength of this entity\n"
			},
			"value": {
				"type": "Integer",
				"default_value": "1",
				"description": "The initial value of the strength\n"
			},
			"__des__": "Defines the entity's strength to carry items."
		},
		"minecraft:tameable": {
			"probability": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%\n"
			},
			"tameItems": {
				"type": "List",
				"default_value": "",
				"description": "The list of items that can be used to tame this entity\n"
			},
			"tame_event": {
				"type": "String",
				"default_value": "",
				"description": "Event to run when this entity becomes tamed\n"
			},
			"__des__": "Defines the rules for a mob to be tamed by the player."
		},
		"minecraft:tamemount": {
			"attemptTemperMod": {
				"type": "Integer",
				"default_value": "5",
				"description": "The amount the entity's temper will increase when mounted\n"
			},
			"autoRejectItems": {
				"type": "JSON Object",
				"default_value": "",
				"description": "The list of items that, if carried while interacting with the entity, will anger it\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>item</td>\n<td>String</td>\n<td></td>\n<td>Name of the item this entity dislikes and will cause it to get angry if used while untamed\n</td>\n</tr>\n</tbody></table>\n"
			},
			"feedItems": {
				"type": "JSON Object",
				"default_value": "",
				"description": "The list of items that can be used to increase the entity's temper and speed up the taming process\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>item</td>\n<td>String</td>\n<td></td>\n<td>Name of the item this entity likes and can be used to increase this entity's temper\n</td>\n</tr>\n<tr>\n<td>temperMod</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>The amount of temper this entity gains when fed this item\n</td>\n</tr>\n</tbody></table>\n"
			},
			"feed_text": {
				"type": "String",
				"default_value": "",
				"description": "The text that shows in the feeding interact button\n"
			},
			"maxTemper": {
				"type": "Integer",
				"default_value": "100",
				"description": "The maximum value for the entity's random starting temper\n"
			},
			"minTemper": {
				"type": "Integer",
				"default_value": "0",
				"description": "The minimum value for the entity's random starting temper\n"
			},
			"ride_text": {
				"type": "String",
				"default_value": "",
				"description": "The text that shows in the riding interact button\n"
			},
			"tame_event": {
				"type": "String",
				"default_value": "",
				"description": "Event that triggers when the entity becomes tamed\n"
			},
			"__des__": "Allows the Entity to be tamed by mounting it."
		},
		"minecraft:target_nearby_sensor": {
			"inside_range": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "Maximum distance in blocks that another entity will be considered in the 'inside' range\n"
			},
			"on_inside_range": {
				"type": "String",
				"default_value": "",
				"description": "Event to call when an entity gets in the inside range. Can specify 'event' for the name of the event and 'target' for the target of the event\n"
			},
			"on_outside_range": {
				"type": "String",
				"default_value": "",
				"description": "Event to call when an entity gets in the outside range. Can specify 'event' for the name of the event and 'target' for the target of the event\n"
			},
			"outside_range": {
				"type": "Decimal",
				"default_value": "5.0",
				"description": "Maximum distance in blocks that another entity will be considered in the 'outside' range\n"
			},
			"__des__": "Defines the entity's range within which it can see or sense other entities to target them."
		},
		"minecraft:teleport": {
			"darkTeleportChance": {
				"type": "Decimal",
				"default_value": "0.01",
				"description": "Modifies the chance that the entity will teleport if the entity is in darkness\n"
			},
			"lightTeleportChance": {
				"type": "Decimal",
				"default_value": "0.01",
				"description": "Modifies the chance that the entity will teleport if the entity is in daylight\n"
			},
			"maxRandomTeleportTime": {
				"type": "Decimal",
				"default_value": "20.0",
				"description": "Maximum amount of time in seconds between random teleports\n"
			},
			"minRandomTeleportTime": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": "Minimum amount of time in seconds between random teleports\n"
			},
			"randomTeleportCube": {
				"type": "Vector [a, b, c]",
				"default_value": "[32.0, 16.0, 32.0]",
				"description": "Entity will teleport to a random position within the area defined by this cube\n"
			},
			"randomTeleports": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the entity will teleport randomly\n"
			},
			"targetDistance": {
				"type": "Decimal",
				"default_value": "16.0",
				"description": "Maximum distance the entity will teleport when chasing a target\n"
			},
			"target_teleport_chance": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100%\n"
			},
			"__des__": "Defines an entity's teleporting behavior."
		},
		"minecraft:tick_world": {
			"distance_to_players": {
				"type": "Decimal",
				"default_value": "128",
				"description": "The distance at which the closest player has to be before this entity despawns. This option will be ignored if never_despawn is true. Min: 128 blocks.\n"
			},
			"never_despawn": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, this entity will not despawn even if players are far away. If false, distance_to_players will be used to determine when to despawn.\n"
			},
			"radius": {
				"type": "Positive Integer",
				"default_value": "2",
				"description": "The area around the entity to tick. Default: 2. Allowed range: 2-6.\n"
			},
			"__des__": "Defines if the entity ticks the world and the radius around it to tick."
		},
		"minecraft:timer": {
			"looping": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the timer will restart every time after it fires\n"
			},
			"randomInterval": {
				"type": "Boolean",
				"default_value": "true",
				"description": "If true, the amount of time on the timer will be random between the min and max values specified in time\n"
			},
			"time": {
				"type": "Range [a, b]",
				"default_value": "[0.0, 0.0]",
				"description": "Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max)\n"
			},
			"time_down_event": {
				"type": "String",
				"default_value": "",
				"description": "Event to fire when the time on the timer runs out\n"
			},
			"__des__": "Adds a timer after which an event will fire."
		},
		"minecraft:trade_table": {
			"display_name": {
				"type": "String",
				"default_value": "",
				"description": "Name to be displayed while trading with this entity\n"
			},
			"table": {
				"type": "String",
				"default_value": "",
				"description": "File path relative to the resource pack root for this entity's trades\n"
			},
			"__des__": "Defines this entity's ability to trade with players."
		},
		"minecraft:transformation": {
			"add": {
				"type": "JSON Object",
				"default_value": "",
				"description": "List of components to add to the entity after the transformation\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>component_groups</td>\n<td>List</td>\n<td></td>\n<td>Names of component groups to add\n</td>\n</tr>\n</tbody></table>\n"
			},
			"begin_transform_sound": {
				"type": "String",
				"default_value": "",
				"description": "Sound to play when the transformation starts\n"
			},
			"delay": {
				"type": "JSON Object",
				"default_value": "",
				"description": "Defines the properties of the delay for the transformation\n<table border=\"1\">\n<tbody><tr> <th>Name</th> <th>Type</th> <th>Default Value</th> <th>Description</th> </tr>\n<tr>\n<td>block_assist_chance</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>Chance that the entity will look for nearby blocks that can speed up the transformation. Value must be between 0.0 and 1.0\n</td>\n</tr>\n<tr>\n<td>block_chance</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>Chance that, once a block is found, will help speed up the transformation\n</td>\n</tr>\n<tr>\n<td>block_max</td>\n<td>Integer</td>\n<td>0</td>\n<td>Maximum number of blocks the entity will look for to aid in the transformation. If not defined or set to 0, it will be set to the block radius\n</td>\n</tr>\n<tr>\n<td>block_radius</td>\n<td>Integer</td>\n<td>0</td>\n<td>Distance in Blocks that the entity will search for blocks that can help the transformation\n</td>\n</tr>\n<tr>\n<td>block_types</td>\n<td>List</td>\n<td></td>\n<td>List of blocks that can help the transformation of this entity\n</td>\n</tr>\n<tr>\n<td>keep_owner</td>\n<td>Boolean</td>\n<td></td>\n<td>If this entity is owned by another entity, it should remain owned after transformation.\n</td>\n</tr>\n<tr>\n<td>value</td>\n<td>Decimal</td>\n<td>0.0</td>\n<td>Time in seconds before the entity transforms\n</td>\n</tr>\n</tbody></table>\n"
			},
			"drop_equipment": {
				"type": "Boolean",
				"default_value": "",
				"description": "*EXPERIMENTAL* Cause the entity to drop all equipment upon transformation\n"
			},
			"into": {
				"type": "String",
				"default_value": "",
				"description": "Entity Definition that this entity will transform into\n"
			},
			"transformation_sound": {
				"type": "String",
				"default_value": "",
				"description": "Sound to play when the entity is done transforming\n"
			},
			"__des__": "Defines an entity's transformation from the current definition into another"
		},
		"minecraft:type_family": {
			"family": {
				"type": "List",
				"default_value": "",
				"description": "List of family names\n"
			},
			"__des__": "Defines the families this entity belongs to."
		},
		"minecraft:variant": {
			"value": {
				"type": "Integer",
				"default_value": "0",
				"description": "The ID of the variant. By convention, 0 is the ID of the base entity\n"
			},
			"__des__": "Used to differentiate the component group of a variant of an entity from others (e.g. ocelot, villager)"
		},
		"minecraft:walk_animation_speed": {
			"value": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "The higher the number, the faster the animation for walking plays. A value of 1.0 means normal speed, while 2.0 means twice as fast\n"
			},
			"__des__": "Sets the speed multiplier for this entity's walk animation speed."
		},
		"minecraft:wants_jockey": {
			"__des__": "Sets that this entity wants to become a jockey."
		},
		"minecraft:health": {
			"value": {
				"type": "Integer",
				"default_value": "20",
				"description": ""
			},
			"max": {
				"type": "Integer",
				"default_value": "20",
				"description": ""
			},
			"min": {
				"type": "Integer",
				"default_value": "0",
				"description": ""
			},
			"__des__": "Set the health of an entity."
		},
		"minecraft:movement": {
			"value": {
				"type": "Integer",
				"default_value": "1.0",
				"description": ""
			},
			"__des__": "Set the movement speed of an entity."
		},
		"minecraft:identifier": {
			"id": {
				"type": "String",
				"default_value": "",
				"description": ""
			},
			"__des__": "Set the identifier (id) of an entity."
		},
		"minecraft:physics": {
			"has_collison": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Sets whether the entity collides with the world"
			},
			"has_gravity": {
				"type": "Boolean",
				"default_value": "true",
				"description": "Sets whether the entity is affected by gravity"
			},
			"__des__": "Modify the physics of an entity."
		},
		"minecraft:fall_damage": {
			"value": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": ""
			},
			"__des__": "Modify the fall damage of an entity."
		},
		"minecraft:follow_range": {
			"value": {
				"type": "Integer",
				"default_value": "20",
				"description": ""
			},
			"max": {
				"type": "Integer",
				"default_value": "20",
				"description": ""
			},
			"__des__": "Define a follow range for the \"minecraft:behavior.follow_owner\" component."
		},
		"minecraft:horse.jump_strength": {
			"value": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": "You can use this as an object and define range_max and range_min arguments"
			},
			"__des__": "Define the jump strength of a horse."
		},
		"minecraft:knockback_resistance": {
			"value": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": ""
			},
			"max": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": ""
			},
			"__des__": "Modify the knockback resistance of an entity."
		},
		"minecraft:underwater_movement": {
			"value": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": ""
			},
			"max": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": ""
			},
			"__des__": "Modify the underwater movement of an entity."
		},
		"minecraft:player.experience": {
			"value": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": ""
			},
			"max": {
				"type": "Decimal",
				"default_value": "1.0",
				"description": ""
			},
			"min": {
				"type": "Decimal",
				"default_value": "0.0",
				"description": ""
			},
			"__des__": "Set the player's experience."
		},
		"minecraft:player.level": {
			"value": {
				"type": "Integer",
				"default_value": "0",
				"description": ""
			},
			"max": {
				"type": "Integer",
				"default_value": "24791",
				"description": ""
			},
			"min": {
				"type": "Integer",
				"default_value": "0",
				"description": ""
			},
			"__des__": "Set the player's level."
		},
		"minecraft:player.exhaustion": {
			"value": {
				"type": "Integer",
				"default_value": "0",
				"description": ""
			},
			"max": {
				"type": "Integer",
				"default_value": "4",
				"description": ""
			},
			"min": {
				"type": "Integer",
				"default_value": "0",
				"description": ""
			},
			"__des__": "Set the player's exhaustion."
		},
		"minecraft:player.saturation": {
			"value": {
				"type": "Integer",
				"default_value": "20",
				"description": ""
			},
			"max": {
				"type": "Integer",
				"default_value": "undefined",
				"description": ""
			},
			"min": {
				"type": "Integer",
				"default_value": "0",
				"description": ""
			},
			"__des__": "Set the player's saturation."
		}
	},
	"events": {
		"minecraft:entity_born": {
			"description": "Event called on an entity that is spawned through two entities breeding.\n"
		},
		"minecraft:entity_spawned": {
			"description": "Event called on an entity that is placed in the level.\n"
		},
		"minecraft:entity_transformed": {
			"description": "Event called on an entity that transforms into another entity.\n"
		},
		"minecraft:on_prime": {
			"description": "Event called on an entity whose fuse is lit and is ready to explode.\n"
		}
	},
	"blocks": ["210", "211", "212", "217", "230", "242", "256", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "425", "426", "427", "428", "429", "430", "431", "432", "433", "434", "435", "436", "437", "438", "439", "440", "441", "442", "443", "444", "445", "446", "447", "448", "449", "450", "451", "452", "453", "454", "455", "456", "457", "458", "459", "460", "461", "462", "463", "464", "465", "466", "467", "468", "469", "470", "471", "472", "473", "474", "475", "476", "477", "478", "479", "480", "481", "482", "483", "484", "485", "486", "487", "488", "489", "490", "491", "492", "493", "494", "495", "496", "497", "498", "499", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511", "acacia_button", "acacia_door", "acacia_fence_gate", "acacia_pressure_plate", "acacia_stairs", "acacia_trapdoor", "activator_rail", "air", "anvil", "beacon", "bed", "bedrock", "beetroot", "birch_button", "birch_door", "birch_fence_gate", "birch_pressure_plate", "birch_stairs", "birch_trapdoor", "black_glazed_terracotta", "blue_glazed_terracotta", "blue_ice", "bone_block", "bookshelf", "brewing_stand", "brick_block", "brick_stairs", "brown_glazed_terracotta", "brown_mushroom", "brown_mushroom_block", "cactus", "cake", "carpet", "carrots", "carved_pumpkin", "cauldron", "chain_command_block", "chemical_heat", "chemistry_table", "chest", "chorus_flower", "chorus_plant", "clay", "coal_block", "coal_ore", "cobblestone", "cobblestone_wall", "cocoa", "colored_torch_bp", "colored_torch_rg", "command_block", "concrete", "concretePowder", "coral", "coral_block", "coral_fan", "coral_fan_dead", "coral_fan_hang", "coral_fan_hang2", "coral_fan_hang3", "crafting_table", "cyan_glazed_terracotta", "dark_oak_button", "dark_oak_door", "dark_oak_fence_gate", "dark_oak_pressure_plate", "dark_oak_stairs", "dark_oak_trapdoor", "dark_prismarine_stairs", "daylight_detector", "daylight_detector_inverted", "deadbush", "detector_rail", "diamond_block", "diamond_ore", "dirt", "dispenser", "double_plant", "double_stone_slab", "double_stone_slab2", "double_wooden_slab", "dragon_egg", "dried_kelp_block", "dropper", "element_0", "element_1", "element_10", "element_100", "element_101", "element_102", "element_103", "element_104", "element_105", "element_106", "element_107", "element_108", "element_109", "element_11", "element_110", "element_111", "element_112", "element_113", "element_114", "element_115", "element_116", "element_117", "element_118", "element_12", "element_13", "element_14", "element_15", "element_16", "element_17", "element_18", "element_19", "element_2", "element_20", "element_21", "element_22", "element_23", "element_24", "element_25", "element_26", "element_27", "element_28", "element_29", "element_3", "element_30", "element_31", "element_32", "element_33", "element_34", "element_35", "element_36", "element_37", "element_38", "element_39", "element_4", "element_40", "element_41", "element_42", "element_43", "element_44", "element_45", "element_46", "element_47", "element_48", "element_49", "element_5", "element_50", "element_51", "element_52", "element_53", "element_54", "element_55", "element_56", "element_57", "element_58", "element_59", "element_6", "element_60", "element_61", "element_62", "element_63", "element_64", "element_65", "element_66", "element_67", "element_68", "element_69", "element_7", "element_70", "element_71", "element_72", "element_73", "element_74", "element_75", "element_76", "element_77", "element_78", "element_79", "element_8", "element_80", "element_81", "element_82", "element_83", "element_84", "element_85", "element_86", "element_87", "element_88", "element_89", "element_9", "element_90", "element_91", "element_92", "element_93", "element_94", "element_95", "element_96", "element_97", "element_98", "element_99", "emerald_block", "emerald_ore", "enchanting_table", "end_bricks", "end_gateway", "end_portal", "end_portal_frame", "end_rod", "end_stone", "ender_chest", "farmland", "fence", "fence_gate", "fire", "flower_pot", "flowing_lava", "flowing_water", "frame", "frosted_ice", "furnace", "glass", "glass_pane", "glow_stick", "glowingobsidian", "glowstone", "gold_block", "gold_ore", "golden_rail", "grass", "grass_path", "gravel", "gray_glazed_terracotta", "green_glazed_terracotta", "hard_glass", "hard_glass_pane", "hard_stained_glass", "hard_stained_glass_pane", "hardened_clay", "hay_block", "heavy_weighted_pressure_plate", "hopper", "ice", "info_update", "info_update2", "invisibleBedrock", "iron_bars", "iron_block", "iron_door", "iron_ore", "iron_trapdoor", "jukebox", "jungle_button", "jungle_door", "jungle_fence_gate", "jungle_pressure_plate", "jungle_stairs", "jungle_trapdoor", "kelp", "ladder", "lapis_block", "lapis_ore", "lava", "leaves", "leaves2", "lever", "light_blue_glazed_terracotta", "light_weighted_pressure_plate", "lime_glazed_terracotta", "lit_furnace", "lit_pumpkin", "lit_redstone_lamp", "lit_redstone_ore", "log", "log2", "magenta_glazed_terracotta", "magma", "melon_block", "melon_stem", "mob_spawner", "monster_egg", "mossy_cobblestone", "movingBlock", "mycelium", "nether_brick", "nether_brick_fence", "nether_brick_stairs", "nether_wart", "nether_wart_block", "netherrack", "netherreactor", "noteblock", "oak_stairs", "observer", "obsidian", "orange_glazed_terracotta", "packed_ice", "pink_glazed_terracotta", "piston", "pistonArmCollision", "planks", "podzol", "portal", "potatoes", "powered_comparator", "powered_repeater", "prismarine", "prismarine_bricks_stairs", "prismarine_stairs", "pumpkin", "pumpkin_stem", "purple_glazed_terracotta", "purpur_block", "purpur_stairs", "quartz_block", "quartz_ore", "quartz_stairs", "rail", "red_flower", "red_glazed_terracotta", "red_mushroom", "red_mushroom_block", "red_nether_brick", "red_sandstone", "red_sandstone_stairs", "redstone_block", "redstone_lamp", "redstone_ore", "redstone_torch", "redstone_wire", "reeds", "repeating_command_block", "reserved6", "sand", "sandstone", "sandstone_stairs", "sapling", "seaLantern", "sea_pickle", "seagrass", "shulker_box", "silver_glazed_terracotta", "skull", "slime", "snow", "snow_layer", "soul_sand", "sponge", "spruce_button", "spruce_door", "spruce_fence_gate", "spruce_pressure_plate", "spruce_stairs", "spruce_trapdoor", "stained_glass", "stained_glass_pane", "stained_hardened_clay", "standing_banner", "standing_sign", "sticky_piston", "stone", "stone_brick_stairs", "stone_button", "stone_pressure_plate", "stone_slab", "stone_slab2", "stone_stairs", "stonebrick", "stonecutter", "stripped_acacia_log", "stripped_birch_log", "stripped_dark_oak_log", "stripped_jungle_log", "stripped_oak_log", "stripped_spruce_log", "structure_block", "tallgrass", "tnt", "torch", "trapdoor", "trapped_chest", "tripWire", "tripwire_hook", "underwater_torch", "undyed_shulker_box", "unlit_redstone_torch", "unpowered_comparator", "unpowered_repeater", "vine", "wall_banner", "wall_sign", "water", "waterlily", "web", "wheat", "white_glazed_terracotta", "wooden_button", "wooden_door", "wooden_pressure_plate", "wooden_slab", "wool", "yellow_flower", "yellow_glazed_terracotta"],
	"items": ["acacia_door", "anvil", "apple", "appleEnchanted", "armor_stand", "arrow", "baked_potato", "balloon", "banner", "beacon", "bed", "beef", "beetroot", "beetroot_seeds", "beetroot_soup", "birch_door", "blaze_powder", "blaze_rod", "bleach", "boat", "bone", "book", "bow", "bowl", "bread", "brewingStandBlock", "brewing_stand", "brick", "brown_mushroom_block", "bucket", "cake", "carpet", "carrot", "carrotOnAStick", "cauldron", "chainmail_boots", "chainmail_chestplate", "chainmail_helmet", "chainmail_leggings", "chemistry_table", "chest_minecart", "chicken", "chorus_fruit", "chorus_fruit_popped", "clay_ball", "clock", "clownfish", "coal", "cobblestone_wall", "colored_torch_bp", "colored_torch_rg", "command_block_minecart", "comparator", "compass", "compound", "concrete", "concrete_powder", "cooked_beef", "cooked_chicken", "cooked_fish", "cooked_porkchop", "cooked_rabbit", "cooked_salmon", "cookie", "coral", "coral_block", "coral_fan", "coral_fan_dead", "dark_oak_door", "diamond", "diamond_axe", "diamond_boots", "diamond_chestplate", "diamond_helmet", "diamond_hoe", "diamond_leggings", "diamond_pickaxe", "diamond_shovel", "diamond_sword", "dirt", "double_plant", "double_stone_slab", "double_stone_slab2", "dragon_breath", "dried_kelp", "dye", "egg", "element_0", "element_1", "element_10", "element_100", "element_101", "element_102", "element_103", "element_104", "element_105", "element_106", "element_107", "element_108", "element_109", "element_11", "element_110", "element_111", "element_112", "element_113", "element_114", "element_115", "element_116", "element_117", "element_118", "element_12", "element_13", "element_14", "element_15", "element_16", "element_17", "element_18", "element_19", "element_2", "element_20", "element_21", "element_22", "element_23", "element_24", "element_25", "element_26", "element_27", "element_28", "element_29", "element_3", "element_30", "element_31", "element_32", "element_33", "element_34", "element_35", "element_36", "element_37", "element_38", "element_39", "element_4", "element_40", "element_41", "element_42", "element_43", "element_44", "element_45", "element_46", "element_47", "element_48", "element_49", "element_5", "element_50", "element_51", "element_52", "element_53", "element_54", "element_55", "element_56", "element_57", "element_58", "element_59", "element_6", "element_60", "element_61", "element_62", "element_63", "element_64", "element_65", "element_66", "element_67", "element_68", "element_69", "element_7", "element_70", "element_71", "element_72", "element_73", "element_74", "element_75", "element_76", "element_77", "element_78", "element_79", "element_8", "element_80", "element_81", "element_82", "element_83", "element_84", "element_85", "element_86", "element_87", "element_88", "element_89", "element_9", "element_90", "element_91", "element_92", "element_93", "element_94", "element_95", "element_96", "element_97", "element_98", "element_99", "elytra", "emerald", "emptyMap", "enchanted_book", "end_crystal", "end_portal_frame", "ender_eye", "ender_pearl", "experience_bottle", "feather", "fence", "fermented_spider_eye", "fireball", "fireworks", "fireworksCharge", "fish", "fishing_rod", "flint", "flint_and_steel", "flower_pot", "frame", "ghast_tear", "glass_bottle", "glow_stick", "glowstone_dust", "gold_ingot", "gold_nugget", "golden_apple", "golden_axe", "golden_boots", "golden_carrot", "golden_chestplate", "golden_helmet", "golden_hoe", "golden_leggings", "golden_pickaxe", "golden_shovel", "golden_sword", "gunpowder", "hard_stained_glass", "hard_stained_glass_pane", "heart_of_the_sea", "hopper", "hopper_minecart", "horsearmordiamond", "horsearmorgold", "horsearmoriron", "horsearmorleather", "ice_bomb", "iron_axe", "iron_boots", "iron_chestplate", "iron_door", "iron_helmet", "iron_hoe", "iron_ingot", "iron_leggings", "iron_nugget", "iron_pickaxe", "iron_shovel", "iron_sword", "jungle_door", "kelp", "lead", "leather", "leather_boots", "leather_chestplate", "leather_helmet", "leather_leggings", "leaves", "leaves2", "lingering_potion", "log", "log2", "magma", "magma_cream", "map", "medicine", "melon", "melon_seeds", "minecart", "monster_egg", "mushroom_stew", "muttonCooked", "muttonRaw", "name_tag", "nautilus_shell", "netherStar", "nether_wart", "netherbrick", "painting", "paper", "piston", "planks", "poisonous_potato", "porkchop", "potato", "potion", "prismarine", "prismarine_crystals", "prismarine_shard", "pufferfish", "pumpkin_pie", "pumpkin_seeds", "purpur_block", "quartz", "quartz_block", "rabbit", "rabbit_foot", "rabbit_hide", "rabbit_stew", "rapid_fertilizer", "record_11", "record_13", "record_blocks", "record_cat", "record_chirp", "record_far", "record_mall", "record_mellohi", "record_stal", "record_strad", "record_wait", "record_ward", "red_flower", "red_mushroom_block", "red_sandstone", "redstone", "reeds", "repeater", "rotten_flesh", "saddle", "salmon", "sand", "sandstone", "sapling", "seaLantern", "sea_pickle", "seagrass", "shears", "shulker_box", "shulker_shell", "sign", "skull", "slime_ball", "snow_layer", "snowball", "sparkler", "spawn_egg", "speckled_melon", "spider_eye", "splash_potion", "sponge", "spruce_door", "stained_glass", "stained_glass_pane", "stained_hardened_clay", "stick", "sticky_piston", "stone", "stone_axe", "stone_hoe", "stone_pickaxe", "stone_shovel", "stone_sword", "stonebrick", "string", "sugar", "tallgrass", "tnt", "tnt_minecart", "totem", "trident", "undyed_shulker_box", "waterlily", "wheat", "wheat_seeds", "wooden_axe", "wooden_door", "wooden_hoe", "wooden_pickaxe", "wooden_shovel", "wooden_slab", "wooden_sword", "wool", "writable_book", "written_book", "yellow_flower"],
	"entities": ["agent", "area_effect_cloud", "armor_stand", "arrow", "balloon", "bat", "blaze", "boat", "cave_spider", "chest_minecart", "chicken", "cod", "command_block_minecart", "cow", "creeper", "dolphin", "donkey", "dragon_fireball", "drowned", "egg", "elder_guardian", "ender_crystal", "ender_dragon", "ender_pearl", "enderman", "endermite", "evocation_fang", "evocation_illager", "eye_of_ender_signal", "falling_block", "fireball", "fireworks_rocket", "fishing_hook", "ghast", "guardian", "hopper_minecart", "horse", "husk", "ice_bomb", "iron_golem", "item", "leash_knot", "lightning_bolt", "lingering_potion", "llama", "llama_spit", "magma_cube", "minecart", "mooshroom", "moving_block", "mule", "ocelot", "painting", "parrot", "pig", "player", "polar_bear", "pufferfish", "rabbit", "salmon", "sheep", "shulker", "shulker_bullet", "silverfish", "skeleton", "skeleton_horse", "slime", "small_fireball", "snow_golem", "snowball", "spider", "splash_potion", "squid", "stray", "thrown_trident", "tnt", "tnt_minecart", "tropicalfish", "vex", "villager", "vindicator", "witch", "wither", "wither_skeleton", "wither_skull", "wither_skull_dangerous", "wolf", "xp_bottle", "xp_orb", "zombie", "zombie_horse", "zombie_pigman", "zombie_villager"]
}