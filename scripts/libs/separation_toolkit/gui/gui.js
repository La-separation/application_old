/*
	Namespace Gui
*/
var Gui = {};
Gui.Labo = {};
Gui.Recit = {};
var zoomCoef = 4; // Attention, pour l'instant ce n'est pas très au point, le "P" sera décalé et s'affichera mal

Gui.homeBtn = function() {
	setHomeBtn();
}

// labo GUI

Gui.Labo.nextBtn = function() {
	var zoom = zoomCoef; 
	var nextBtn = new Word(" > ",null,4); 	nextBtn.setZoom(zoom);
	nextBtn.setX(screenWidth - nextBtn.getWidth());
	nextBtn.setY(0);
	nextBtn.display(actionLayer);
	nextBtn.onTap(function(){if(page < Math.ceil(cloud.possibilities.length/cloud.nb_max)){page++;Labo.displayCloud();}});

	actionLayer.draw();
}

Gui.Labo.lastBtn = function() {
	var zoom = zoomCoef;
	
	var lastBtn = new Word(" < ",null,4);	lastBtn.setZoom(zoom);
	lastBtn.setX(0);
	lastBtn.setY(0);
	lastBtn.display(actionLayer);
	lastBtn.onTap(function(){if(page > 1){page--;Labo.displayCloud();}});

	actionLayer.draw();
}

Gui.Labo.policeBtn = function() {
	var zoom = zoomCoef;
	
	var policeBtn = new Word(" P ",null,4); policeBtn.setZoom(zoom);
	policeBtn.setX(screenWidth - policeBtn.getWidth());
	policeBtn.setY(screenHeight - policeBtn.getHeight() / 4);
	policeBtn.display(actionLayer);
	policeBtn.onTap(function(){Labo.menu()});

	actionLayer.draw();
}

Gui.Labo.displayAll = function() {
	Gui.homeBtn();
	// Gui.Labo.policeBtn();
	Gui.Labo.nextBtn();
	Gui.Labo.lastBtn();
}

// Recit GUI

Gui.Recit.menuNextBtn = function() {
	var zoom = zoomCoef;
	
	var nextBtn = new Word(" > ", null, 4);		nextBtn.setZoom(zoom);
	nextBtn.setX(screenWidth - nextBtn.getWidth());
	nextBtn.setY(0);
	nextBtn.display(actionLayer);
	nextBtn.onTap(function(){
		if(story_page<(xmlList.length/nb_recit_max)) {
			Recit.displayStoriesMenu();
		}
	});

	actionLayer.draw();
}

Gui.Recit.menuLastBtn = function() {
	var zoom = zoomCoef;

	var lastBtn = new Word(" < ", null, 4);		lastBtn.setZoom(zoom);
	lastBtn.setX(0);
	lastBtn.setY(0);
	lastBtn.display(actionLayer);
	lastBtn.onTap(function(){
		if(story_page>1) {
			story_page--;
			Recit.displayStoriesMenu();
		}
	});
	
	actionLayer.draw();
}

Gui.Recit.menuDisplayAll = function() {
	Gui.homeBtn();
	// Gui.Recit.menuNextBtn();
	// Gui.Recit.menuLastBtn();
}

Gui.Recit.storiesBtn = function () {
	var zoom = zoomCoef;
	
	var storiesBtn = new Word(" R", null, 4);	storiesBtn.setZoom(zoom);
	storiesBtn.setX(screenWidth - storiesBtn.getWidth());
	storiesBtn.setY(screenHeight - storiesBtn.getHeight() / 2);
	storiesBtn.display(actionLayer);
	storiesBtn.onTap(function(){Recit.start();});

	actionLayer.draw();
}

Gui.Recit.nextBtn = function() {
	var zoom = zoomCoef;
	
	var nextBtn = new Word(" > ", null, 4);		nextBtn.setZoom(zoom);
	nextBtn.setX(screenWidth - nextBtn.getWidth());
	nextBtn.setY(0);
	nextBtn.display(actionLayer);
	nextBtn.onTap(function(){}); // A COMPLETER !!!

	actionLayer.draw();
}

Gui.Recit.lastBtn = function() {
	var zoom = zoomCoef;
	
	var lastBtn = new Word(" < ", null, 4);		lastBtn.setZoom(zoom);
	lastBtn.setX(0);
	lastBtn.setY(0);
	lastBtn.display(actionLayer);
	lastBtn.onTap(function(){}); // A COMPLETER !!!

	actionLayer.draw();
}

Gui.Recit.displayAll = function() {
	Gui.homeBtn();
	Gui.Recit.storiesBtn();
	// Gui.Recit.nextBtn();
	// Gui.Recit.lastBtn();
}


scriptLoaded('scripts/libs/separation_toolkit/gui.js');
