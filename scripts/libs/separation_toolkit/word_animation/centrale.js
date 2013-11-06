/*
	Animation cut
	@param word : objet Word à animer
	@param x_central : position x de la partie basse à remplacer
	@param x_central_next : position x de la partie basse à afficher
*/
Animation.centraleCut = function(word, x_central, x_central_next) {
	
	word.font.central.setX(x_central);
	word.font.next_central.setX(x_central_next);
	//word.font.next_down.setOpacity(1);
	
	word.tween[0] = new Kinetic.Tween({
		node: word.font.central,
		x: x_central_next,
		duration: Word_cst.duration.downCut,
		easing: Kinetic.Easings.EaseIn,
		onFinish: function(){word.tween[1].play()},
		opacity: 0,
	});
	
	word.tween[1] = new Kinetic.Tween({
		node: word.font.next_central,
		x: x_central,
		duration: Word_cst.duration.downCut,
		easing: Kinetic.Easings.EaseOut,
		onFinish: function(){word.animationFinished();},
		opacity: 1,
	});
	
	word.tween[0].play();
}

Animation.centraleCutLeft = function(word) {
	var x_central = word.font.down.getX() / word.getScale();
	var x_central_next = -(word.getWidth() + word.getX()) / word.getScale();
	
	Animation.centraleCut(word, x_central, x_central_next);
}

Animation.centraleCutRight = function(word) {
	var x_central = word.font.down.getX() / word.getScale();
	var x_central_next = (screenWidth - word.getX()) / word.getScale();
	
	Animation.centraleCut(word, x_central, x_central_next);
}

scriptLoaded('scripts/libs/separation_toolkit/word_animation/centrale.js');