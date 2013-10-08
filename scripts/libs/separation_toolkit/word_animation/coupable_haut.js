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
		duration: 2,
		onFinish: function(){tween2.play()},
	});
	
	tween2 = new Kinetic.Tween({
		node: word.font.next_down,
		x: x_down,
		duration: 2,
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