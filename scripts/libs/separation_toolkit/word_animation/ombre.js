/*
	Animation mbre statique
*/
var active_OMBRE = true;
Animation.ombre = function(word) {
	
	var tween = new Array();
	
	if(active_OMBRE) {
		active_OMBRE = false;
		tween[0] = new Kinetic.Tween({
			node: OMBRE,
			duration: Word_cst.duration.ombre,
			opacity: 0,
		});

		tween[1] = new Kinetic.Tween({
			node: CYGNE,
			duration: Word_cst.duration.ombre,
			opacity: 1,
			onFinish: function(){word.animationFinished();},
		});
	}
	else {
		active_OMBRE = true;
		tween[0] = new Kinetic.Tween({
			node: CYGNE,
			duration: Word_cst.duration.ombre,
			opacity: 0,
		});

		tween[1] = new Kinetic.Tween({
			node: OMBRE,
			duration: Word_cst.duration.ombre,
			opacity: 1,
			onFinish: function(){word.animationFinished();},
		});
	}
	
	tween[0].play();
	tween[1].play();
}

scriptLoaded('scripts/libs/separation_toolkit/word_animation/ombre.js');
