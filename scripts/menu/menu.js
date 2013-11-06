/*
	Namespace Menu
*/
var Menu = {};
Recit.words = new Array();
Recit.anim_duration = 2;
Recit.opacity = 0.5;

Menu.start = function() {
	mainLayer.clear();
	actionLayer.clear();
	clearStage();
	
	// Introduction.destroy();
	Introduction.destroy();
	Aide.destroy();
	Recit.destroy();
	Labo.destroy();
	
	Menu.recit();
	Menu.labo();
	Menu.aide();
	Menu.aPropos();
	Menu.lang();
	
	mainLayer.draw();
	actionLayer.draw();
}

Menu.recit = function() {
	var zoom = 3;

	Recit.words['recit'] = new Word('Recit', null, 5);
	Recit.words['recit'].setZoom(zoom);
	Recit.words['recit'].setX(-Recit.words['recit'].getWidth());
	Recit.words['recit'].setCenterY(screenHeight * 1/2);
	Recit.words['recit'].display(mainLayer);
	
	Recit.words['recit'].setCenterX(screenWidth * 1/5);
	
	new Kinetic.Tween({
		node: Recit.words['recit'].getNode(),
		x: Recit.words['recit'].getX(),
		easing: Kinetic.Easings.EaseOut,
		duration: Recit.anim_duration,
	}).play();
	
	Event.onTap('Menu.recit', Recit.words['recit'], function() {
		Recit.start();
	}, true);
}

Menu.labo = function() {
	var zoom = 3;

	Recit.words['labo'] = new Word('Labo', null, 5);
	Recit.words['labo'].setZoom(zoom);
	Recit.words['labo'].setX(screenWidth);
	Recit.words['labo'].setCenterY(screenHeight * 1/2);
	Recit.words['labo'].display(mainLayer);

	Recit.words['labo'].setCenterX(screenWidth * 4/5);
	
	new Kinetic.Tween({
		node: Recit.words['labo'].getNode(),
		x: Recit.words['labo'].getX(),
		easing: Kinetic.Easings.EaseOut,
		duration: Recit.anim_duration,
	}).play();
	
	Event.onTap('Menu.labo', Recit.words['labo'], function() {
		Labo.start();
	}, true);
}

Menu.aide = function() {
	Recit.words['aide'] = new Word('aide', null, 0);
	Recit.words['aide'].setCenterXY(screenWidth / 2, screenHeight * 8/12);
	Recit.words['aide'].getNode().setOpacity(0);
	Recit.words['aide'].display(mainLayer);
	
	new Kinetic.Tween({
		node: Recit.words['aide'].getNode(),
		opacity: Recit.opacity,
		easing: Kinetic.Easings.EaseIn,
		duration: Recit.anim_duration,
	}).play();
	
	Event.onTap('Menu.aide', Recit.words['aide'], function() {
		Aide.start();
	}, true);
}

Menu.aPropos = function() {
	Recit.words['a_propos'] = new Word('a propos', null, 0);
	Recit.words['a_propos'].setCenterXY(screenWidth / 2, screenHeight * 10/12);
	Recit.words['a_propos'].getNode().setOpacity(0);
	Recit.words['a_propos'].display(mainLayer);
	
	new Kinetic.Tween({
		node: Recit.words['a_propos'].getNode(),
		opacity: Recit.opacity,
		easing: Kinetic.Easings.EaseIn,
		duration: Recit.anim_duration,
	}).play();
	
	Event.onTap('Menu.a_propos', Recit.words['a_propos'], function() {
		alert('A venir \n Soon');
	}, true);
}

Menu.lang = function() {
	Recit.words['lang_EN'] = new Word('ENGLISH', null, 0, 'EOOLLOLL');
	Recit.words['lang_EN'].setCenterXY(screenWidth / 2, screenHeight * 2/12);
	Recit.words['lang_EN'].getNode().setOpacity(0);
	Recit.words['lang_EN'].display(mainLayer);

	new Kinetic.Tween({
		node: Recit.words['lang_EN'].getNode(),
		opacity: Recit.opacity,
		easing: Kinetic.Easings.EaseIn,
		duration: Recit.anim_duration,
	}).play();
	
	Event.onTap('Menu.lang_EN', Recit.words['lang_EN'], function() {
		alert('A venir \n Soon');
	}, true);
	
	Recit.words['lang_FR'] = new Word('FRENCH', null, 0, 'EOOLLOLL');
	Recit.words['lang_FR'].setZoom(0.5);
	Recit.words['lang_FR'].setCenterXY(screenWidth / 2, screenHeight * 1/12);
	Recit.words['lang_FR'].getNode().setOpacity(0);
	Recit.words['lang_FR'].display(mainLayer);
	
	new Kinetic.Tween({
		node: Recit.words['lang_FR'].getNode(),
		opacity: Recit.opacity / 2,
		easing: Kinetic.Easings.EaseIn,
		duration: Recit.anim_duration,
	}).play();
	
	Event.onTap('Menu.lang_FR', Recit.words['lang_FR'], function() {
		alert('A venir \n Soon');
	}, true);
}

scriptLoaded('scripts/menu/menu.js');
