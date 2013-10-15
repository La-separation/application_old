var Effects = {}

Effects.setLight = function(word_node) {
	new Kinetic.Tween({
		node: word_node,
		opacity: Word_cst.opacity.light,
		duration: Word_cst.duration.opacity,
	}).play();
}

Effects.setDark = function(word_node) {
	new Kinetic.Tween({
		node: word_node,
		opacity: Word_cst.opacity.dark,
		duration: Word_cst.duration.opacity,
	}).play();
}