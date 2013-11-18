/*
	Animation cut
	@param word : objet Word à animer
	@param x_central : position x de la partie basse à remplacer
	@param x_central_next : position x de la partie basse à afficher
*/

Animation.open = function(word, dir) {
	if(dir == -1) word.is_open_up = true;
	if(dir == 1) word.is_open_down = true;
	
	if(word.is_open_down && word.is_open_up) {
		var x_central = word.font.down.getX() / word.getScale();
		var x_central_next = (screenWidth - word.getX()) / word.getScale();
		
		word.font.central.setX(x_central);
		word.font.next_central.setX(x_central_next);
		
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
			onFinish: function(){word.animationFinished(true);},
			opacity: 1,
		});
		
		word.tween[0].play();
	} else {
		word.animationFinished(false);
	}
}

Animation.onChange.openUp = function(word, dir, val) {
	word.font.up.setOffsetY(-20 * value);
	mainLayer.draw();
}

Animation.onChange.openDown = function(word, dir, val) {
	word.font.down.setY(20 * value);
	mainLayer.draw();
}

Animation.onChange.openUp = function(word, val) {
	
}

Animation.onChange.openDown = function(word, val) {
	
}

scriptLoaded('scripts/libs/separation_toolkit/word_animation/centrale.js');