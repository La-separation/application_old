/*
	Animation cut
	@param word : objet Word à animer
	@param x_up : position x de la partie haute à remplacer
	@param x_up_next : position x de la partie haute à afficher
*/
Animation.upCut = function(word, x_up, x_up_next) {
	
	word.font.up.setX(x_up);
	word.font.next_up.setX(x_up_next);
	//word.font.next_up.setOpacity(1);
	
	word.tween[0] = new Kinetic.Tween({
		node: word.font.up,
		x: x_up_next,
		duration: Word_cst.duration.upCut,
		// easing: Kinetic.Easings.EaseIn,
		onFinish: function(){word.tween[1].play();},
		opacity: 0,
	});
	
	word.tween[1] = new Kinetic.Tween({
		node: word.font.next_up,
		x: x_up,
		duration: Word_cst.duration.upCut,
		easing: Kinetic.Easings.EaseOut,
		onFinish: function(){word.animationFinished(true);},
		opacity: 1,
	});
	
	word.tween[0].play();
}

Animation.upCutLeft = function(word, dir) {
	var x_up = word.font.down.getX() / word.getScale();
	var x_up_next = -(word.getWidth() + word.getX()) / word.getScale();
	
	Animation.upCut(word, x_up, x_up_next);
}

Animation.upCutRight = function(word, dir) {
	var x_up = word.font.down.getX() / word.getScale();
	var x_up_next = (screenWidth - word.getX()) / word.getScale();
	
	Animation.upCut(word, x_up, x_up_next);
}

Animation.onChange.upCutLeft = function(word, val) {
	word.font.up.setOffsetX(word.font.up.getWidth() * val * 0.8);
}

Animation.onChange.upCutRight = function(word, val) {
	word.font.up.setOffsetX(-word.font.up.getWidth() * val * 0.8);
}

Animation.onAbort.upCut = function(word) {
	word.font.up.setOffsetX(0);
}

scriptLoaded('scripts/libs/separation_toolkit/word_animation/coupable_bas.js');