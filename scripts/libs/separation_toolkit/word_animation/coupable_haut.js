/*
	Animation cut
	@param word : objet Word à animer
	@param x_down : position x de la partie basse à remplacer
	@param x_next_down : position x de la partie basse à afficher
*/
Animation.downCut = function(word, x_down, x_next_down) {
	
	word.font.down.setX(x_down);
	word.font.next_down.setX(x_next_down);
	word.font.next_down.setOpacity(1);
	
	tween1 = new Kinetic.Tween({
		node: word.font.down,
		x: x_next_down,
		duration: 1,
		onFinish: function(){tween2.play()},
	});
	
	tween2 = new Kinetic.Tween({
		node: word.font.next_down,
		x: x_down,
		duration: 1,
		onFinish: function(){word.animationFinished();},
	});
	
	tween1.play();
}

Animation.downCutLeft = function(word) {
	var x_down = word.font.down.getX();
	var x_next_down = -(word.getWidth() + word.getX());
	
	Animation.downCut(word, x_down, x_next_down);
}

Animation.downCutRight = function(word) {
	var x_down = word.font.down.getX();
	var x_next_down = screenWidth;
	
	Animation.downCut(word, x_down, x_next_down);
}

/*
	Animation cut
	@param word : objet Word à animer
	@param x_up : position x de la partie basse à remplacer
	@param x_up_next : position x de la partie basse à afficher
*/
Animation.upCut = function(word, x_up, x_up_next) {
	
	word.font.up.setX(x_up);
	word.font.next_up.setX(x_up_next);
	word.font.next_up.setOpacity(1);
	
	tween1 = new Kinetic.Tween({
		node: word.font.up,
		x: x_up_next,
		duration: 1,
		onFinish: function(){tween2.play()},
	});
	
	tween2 = new Kinetic.Tween({
		node: word.font.next_up,
		x: x_up,
		duration: 1,
		onFinish: function(){word.animationFinished();},
	});
	
	tween1.play();
}

Animation.upCutLeft = function(word) {
	var x_up = word.font.down.getX();
	var x_up_next = -(word.getWidth() + word.getX());
	
	Animation.upCut(word, x_up, x_up_next);
}

Animation.upCutRight = function(word) {
	var x_up = word.font.down.getX();
	var x_up_next = screenWidth;
	
	Animation.upCut(word, x_up, x_up_next);
}