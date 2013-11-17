/*
	Namespace Menu
*/
var Menu = {};
Menu.words = new Array();
Menu.anim_duration = 2;
Menu.opacity = 0.5;

Menu.start = function() {
	Destroy.all();
	
	Menu.recit();
	Menu.labo();
	Menu.aide();
	Menu.aPropos();
	Menu.lang();
	
	mainLayer.draw();
	actionLayer.draw();
}

Menu.destroy = function() {
	Destroy.arrayObjet(Menu.words);
}

Menu.recit = function() {
	var zoom = 3;

	Menu.words['recit'] = new Word('carnet', null, 5);
	Menu.words['recit'].setZoom(zoom);
	Menu.words['recit'].setX(-Menu.words['recit'].getWidth());
	Menu.words['recit'].setCenterY(screenHeight * 1/2);
	Menu.words['recit'].display(mainLayer);
	
	Menu.words['recit'].setCenterX(screenWidth * 1/5);
	
	new Kinetic.Tween({
		node: Menu.words['recit'].getNode(),
		x: Menu.words['recit'].getX(),
		easing: Kinetic.Easings.EaseOut,
		duration: Menu.anim_duration,
	}).play();
	
	Event.onTap('Menu.recit', Menu.words['recit'], function() {
		Recit.start();
	}, true);
}

Menu.labo = function() {
	var zoom = 3;

	Menu.words['labo'] = new Word('labo', null, 5);
	Menu.words['labo'].setZoom(zoom);
	Menu.words['labo'].setX(screenWidth);
	Menu.words['labo'].setCenterY(screenHeight * 1/2);
	Menu.words['labo'].display(mainLayer);

	Menu.words['labo'].setCenterX(screenWidth * 4/5);
	
	new Kinetic.Tween({
		node: Menu.words['labo'].getNode(),
		x: Menu.words['labo'].getX(),
		easing: Kinetic.Easings.EaseOut,
		duration: Menu.anim_duration,
	}).play();
	
	Event.onTap('Menu.labo', Menu.words['labo'], function() {
		Labo.start();
	}, true);
}

Menu.aide = function() {
	Menu.words['aide'] = new Word('aide', null, 0);
	Menu.words['aide'].setCenterXY(screenWidth / 2, screenHeight * 8/12);
	Menu.words['aide'].getNode().setOpacity(0);
	Menu.words['aide'].display(mainLayer);
	
	new Kinetic.Tween({
		node: Menu.words['aide'].getNode(),
		opacity: Menu.opacity,
		easing: Kinetic.Easings.EaseIn,
		duration: Menu.anim_duration,
	}).play();
	
	Event.onTap('Menu.aide', Menu.words['aide'], function() {
		Aide.start();
	}, true);
}

Menu.aPropos = function() {
	Menu.words['a_propos'] = new Word('a propos', null, 0);
	Menu.words['a_propos'].setCenterXY(screenWidth / 2, screenHeight * 10/12);
	Menu.words['a_propos'].getNode().setOpacity(0);
	Menu.words['a_propos'].display(mainLayer);
	
	new Kinetic.Tween({
		node: Menu.words['a_propos'].getNode(),
		opacity: Menu.opacity,
		easing: Kinetic.Easings.EaseIn,
		duration: Menu.anim_duration,
	}).play();
	
	Event.onTap('Menu.a_propos', Menu.words['a_propos'], function() {
		alert('A venir \n Soon');
	}, true);
}

Menu.lang = function() {
	Menu.words['lang_EN'] = new Word('fr | en', null, 0);
	Menu.words['lang_EN'].setCenterXY(screenWidth / 2, screenHeight * 2/12);
	Menu.words['lang_EN'].getNode().setOpacity(0);
	Menu.words['lang_EN'].display(mainLayer);

	new Kinetic.Tween({
		node: Menu.words['lang_EN'].getNode(),
		opacity: Menu.opacity,
		easing: Kinetic.Easings.EaseIn,
		duration: Menu.anim_duration,
	}).play();
	
	Event.onTap('Menu.lang_EN', Menu.words['lang_EN'], function() {
		alert('A venir \n Soon');
	}, true);
	
	// Menu.words['lang_FR'] = new Word('FRENCH', null, 0, 'EOOLLOLL');
	// Menu.words['lang_FR'].setZoom(0.5);
	// Menu.words['lang_FR'].setCenterXY(screenWidth / 2, screenHeight * 1/12);
	// Menu.words['lang_FR'].getNode().setOpacity(0);
	// Menu.words['lang_FR'].display(mainLayer);
	
	// new Kinetic.Tween({
		// node: Menu.words['lang_FR'].getNode(),
		// opacity: Menu.opacity / 2,
		// easing: Kinetic.Easings.EaseIn,
		// duration: Menu.anim_duration,
	// }).play();
	
	// Event.onTap('Menu.lang_FR', Menu.words['lang_FR'], function() {
		// alert('A venir \n Soon');
	// }, true);
}

scriptLoaded('scripts/menu/menu.js');
