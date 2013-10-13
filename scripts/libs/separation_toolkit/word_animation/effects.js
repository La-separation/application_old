var Effects = {}

Effects.setLight = function(word_node) {
	new Kinetic.Tween({
		node: word_node,
		opacity: OPACITY.word.light,
		duration: 2,
	}).play();
}

Effects.setDark = function(word_node) {
	new Kinetic.Tween({
		node: word_node,
		opacity: OPACITY.word.dark,
		duration: 2,
	}).play();
}