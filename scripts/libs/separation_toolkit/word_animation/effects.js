var Effects = {}

Effects.respire_stop = new Array();

Effects.setLight = function(word_node) {
	new Kinetic.Tween({
		node: word_node,
		opacity: Word_cst.opacity.light,
		duration: Word_cst.duration.opacity,
		Easing: Kinetic.EaseIn,
	}).play();
}

Effects.setDark = function(word_node) {
	new Kinetic.Tween({
		node: word_node,
		opacity: Word_cst.opacity.dark,
		duration: Word_cst.duration.opacity,
	}).play();
}

Effects.respire = function(id, node, min, max) {
	
	Effects.respire_stop[id] = false;

	function effects_light() {
		//if(!Effects.respire_stop[id])
		//{
			// sound_play('inspiration');
			new Kinetic.Tween({
				node: node,
				opacity: max,
				duration: 1.2,
				easing: Kinetic.Easings.EaseInOut,
				onFinish: effects_dark,
			}).play();
		//}
	}
	function effects_dark() {
		if(!Effects.respire_stop[id])
		{
			// sound_play('expiration');
			new Kinetic.Tween({
				node: node,
				opacity: min,
				duration: 1.2,
				easing: Kinetic.Easings.EaseOut,
				onFinish: effects_light,
			}).play();
		}
	}
	
	effects_dark();
}

Effects.stopRespire = function(id, node) {
	Effects.respire_stop[id] = true;
}

scriptLoaded('scripts/libs/separation_toolkit/word_animation/effects.js');