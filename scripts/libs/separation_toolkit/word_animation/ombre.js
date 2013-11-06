/*
	Animation cut
	@param word : objet Word à animer
	@param x_central : position x de la partie basse à remplacer
	@param x_central_next : position x de la partie basse à afficher
*/
Animation.ombre = function(word) {
	
	// word.font.central.setX(x_central);
	// word.font.next_central.setX(x_central_next);
	//word.font.next_down.setOpacity(1);
	var opacity = OMBRE.getOpacity();
	var tween = new Array();
	alert('test');

	if(opacity > 0) {
		tween[0] = new Kinetic.Tween({
			node: OMBRE,
			duration: Word_cst.duration.ombre,
			easing: Kinetic.Easings.EaseIn,
			opacity: 0,
		});

		tween[1] = new Kinetic.Tween({
			node: CYGNE,
			duration: Word_cst.duration.ombre,
			easing: Kinetic.Easings.EaseOut,
			opacity: 1,
		});
	}
	else {
		tween[0] = new Kinetic.Tween({
			node: CYGNE,
			duration: Word_cst.duration.ombre,
			easing: Kinetic.Easings.EaseIn,
			opacity: 0,
		});

		tween[1] = new Kinetic.Tween({
			node: OMBRE,
			duration: Word_cst.duration.ombre,
			easing: Kinetic.Easings.EaseOut,
			opacity: 1,
		});
	}
	
	tween[0].play();
	tween[1].play();
}

scriptLoaded('scripts/libs/separation_toolkit/word_animation/ombre.js');