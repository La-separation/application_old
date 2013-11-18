/*
	Animation cut
	@param word : objet Word à animer
	@param x_down : position x de la partie basse à remplacer
	@param x_next_down : position x de la partie basse à afficher
*/
Animation.downCut = function(word, x_down, x_next_down) {
	
	word.font.down.setX(x_down);
	word.font.next_down.setX(x_next_down);
	//word.font.next_down.setOpacity(1);
	
	word.tween[0] = new Kinetic.Tween({
		node: word.font.down,
		x: x_next_down,
		duration: Word_cst.duration.downCut,
		easing: Kinetic.Easings.EaseIn,
		onFinish: function(){word.tween[1].play()},
		opacity: 0,
	});
	
	word.tween[1] = new Kinetic.Tween({
		node: word.font.next_down,
		x: x_down,
		duration: Word_cst.duration.downCut,
		easing: Kinetic.Easings.EaseOut,
		onFinish: function(){word.animationFinished(true);},
		opacity: 1,
	});
	
	word.tween[0].play();
}

Animation.downCutLeft = function(word, dir) {
	var x_down = word.font.down.getX() / word.getScale();
	var x_next_down = -(word.getWidth() + word.getX()) / word.getScale();
	
	Animation.downCut(word, x_down, x_next_down);
}

Animation.downCutRight = function(word, dir) {
	var x_down = word.font.down.getX() / word.getScale();
	var x_next_down = (screenWidth - word.getX()) / word.getScale();
	
	Animation.downCut(word, x_down, x_next_down);
}

Animation.onChange.downCutLeft = function(word, val) {
	word.font.down.setOffsetX(word.font.down.getWidth() * val * 0.8);
}

Animation.onChange.downCutRight = function(word, val) {
	word.font.down.setOffsetX(-word.font.down.getWidth() * val * 0.8);
}

scriptLoaded('scripts/libs/separation_toolkit/word_animation/coupable_haut.js');