/*
	Namespace Introduction
*/
var Introduction = {};

Introduction.start = function() {
	sound_play('ambiant');
	
	Introduction.logo();
}

Introduction.logo = function() {
	logo = new Logo();
	logo.display(mainLayer);
	
	Effects.respire('logo', logo.getNode(), 0.2, 1);
	Event.onTap('logo', logo, function() {
		Effects.stopRespire('logo');
		logo.animateIntro(function() { Introduction.laSeparation(); });
	}, false);
	
	mainLayer.draw();
	actionLayer.draw();
}

Introduction.laSeparation = function() {
	mainLayer.clear();
	actionLayer.clear();
	
	var anim_duration = 2;
	
	la_separation = new Word('la Separation', 'la Perception', 5);
	la_separation.setZoom(2);
	la_separation.setZoomOnActive(false);
	la_separation.setCenterXY(screenWidth / 2, screenHeight / 2);
	la_separation.getNode().setOpacity(0);
	la_separation.display(mainLayer);
	
	// new Kinetic.Tween({
		// node: la_separation.getNode(),
		// opacity: 1,
		// easing: Kinetic.Easings.EaseIn,
		// duration: anim_duration/2,
		// onFinish: cutLaSeparation,
	// }).play();
	cutLaSeparation();
	
	function cutLaSeparation() {
		la_separation.addGesture();
		Effects.respire('la_separation', la_separation.getNode(), 0.5, 1);
		la_separation.setDone('animate', function() { 
			Effects.stopRespire('la_separation');
		});
		la_separation.setDone('animationFinished', function() {
			setTimeout(function() {
				new Kinetic.Tween({
					node: la_separation.getNodeUp(),
					y: screenHeight / 4,
					opacity: 0,
					easing: Kinetic.Easings.EaseIn,
					duration: anim_duration,
				}).play();
				new Kinetic.Tween({
					node: la_separation.getNodeDown(),
					y: -screenHeight / 4,
					opacity: 0,
					easing: Kinetic.Easings.EaseIn,
					duration: anim_duration,
					onFinish: function() { Menu.start(); },
				}).play();
			}, 500);
		});
	}
	
	mainLayer.draw();
	actionLayer.draw();
}

scriptLoaded('scripts/introduction/introduction.js');
