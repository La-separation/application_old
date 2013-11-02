/*
	Namespace Gui
*/
var Gui= {};
var zoomCoef = 4; // Attention, pour l'instant ce n'est pas très au point, le "P" sera décalé et s'affichera mal

Gui.homeBtn = function() {
	setHomeBtn();
}

// lab gui
Gui.laboNextBtn = function() {
	var zoom = zoomCoef; 
	var nextBtn = new Word(" > ",null,4); 	nextBtn.setZoom(zoom);
	nextBtn.setX(screenWidth - nextBtn.getWidth());
	nextBtn.setY(0);
	nextBtn.display(mainLayer);
	nextBtn.onTap(function(){if(page < Math.ceil(cloud.possibilities.length/cloud.nb_max)){page++;Labo.displayCloud();}});

	mainLayer.draw();
	actionLayer.draw();
}

Gui.laboLastBtn = function() {
	var zoom = zoomCoef;
	
	var lastBtn = new Word(" < ",null,4);	lastBtn.setZoom(zoom);
	lastBtn.setX(0);
	lastBtn.setY(0);
	lastBtn.display(mainLayer);
	lastBtn.onTap(function(){if(page > 1){page--;Labo.displayCloud();}});

	mainLayer.draw();
	actionLayer.draw();
}

Gui.laboPoliceBtn = function() {
	var zoom = zoomCoef;
	
	var policeBtn = new Word(" P ",null,4); policeBtn.setZoom(zoom);
	policeBtn.setX(screenWidth - policeBtn.getWidth());
	policeBtn.setY(screenHeight - policeBtn.getHeight() / 4);
	policeBtn.display(mainLayer);
	policeBtn.onTap(function(){Labo.menu()});

	mainLayer.draw();
	actionLayer.draw();
}

Gui.laboDisplayAll = function() {
	Gui.homeBtn();
	Gui.laboPoliceBtn();
	Gui.laboNextBtn();
	Gui.laboLastBtn();
}

// stories gui
Gui.storiesNextBtn = function() {
	var zoom = zoomCoef;
	
	var nextBtn = new Word(" > ", null, 4);		nextBtn.setZoom(zoom);
	nextBtn.setX(screenWidth - nextBtn.getWidth());
	nextBtn.setY(0);
	nextBtn.display(mainLayer);
	nextBtn.onTap(function(){
		if(story_page<(xmlList.length/nb_recit_max)) {
			story_page++;
			clearStage();
			Gui.storiesDisplayAll();
			Recit.displayStoriesMenu();
		}
	});

	mainLayer.draw();
	actionLayer.draw();
}

Gui.storiesLastBtn = function() {
	var zoom = zoomCoef;

	var lastBtn = new Word(" < ", null, 4);		lastBtn.setZoom(zoom);
	lastBtn.setX(0);
	lastBtn.setY(0);
	lastBtn.display(mainLayer);
	lastBtn.onTap(function(){
		if(story_page>1) {
			story_page--;
			clearStage();
			Gui.storiesDisplayAll();
			Recit.displayStoriesMenu();
		}
	});
	
	mainLayer.draw();
	actionLayer.draw();

}

Gui.storiesDisplayAll = function() {
	Gui.homeBtn();
	Gui.storiesNextBtn();
	Gui.storiesLastBtn();
}

// story gui
Gui.storyStoriesBtn = function () {
	var zoom = zoomCoef;
	
	var storiesBtn = new Word(" R", null, 4);	storiesBtn.setZoom(zoom);
	storiesBtn.setX(screenWidth - storiesBtn.getWidth());
	storiesBtn.setY(screenHeight - storiesBtn.getHeight() / 4);
	storiesBtn.display(mainLayer);
	storiesBtn.onTap(function(){Recit.start()});

	mainLayer.draw();
	actionLayer.draw();
}

Gui.storyNextBtn = function() {
	var zoom = zoomCoef;
	
	var nextBtn = new Word(" > ", null, 4);		nextBtn.setZoom(zoom);
	nextBtn.setX(screenWidth - nextBtn.getWidth());
	nextBtn.setY(0);
	nextBtn.display(mainLayer);
	nextBtn.onTap(function(){}); // A COMPLETER !!!

	mainLayer.draw();
	actionLayer.draw();
}

Gui.storyLastBtn = function() {
	var zoom = zoomCoef;
	
	var lastBtn = new Word(" < ", null, 4);		lastBtn.setZoom(zoom);
	lastBtn.setX(0);
	lastBtn.setY(0);
	lastBtn.display(mainLayer);
	lastBtn.onTap(function(){}); // A COMPLETER !!!

	mainLayer.draw();
	actionLayer.draw();
}

Gui.storyDisplayAll = function() {
	Gui.homeBtn();
	Gui.storyStoriesBtn();
	Gui.storyLastBtn();
	Gui.storyNextBtn();
}


scriptLoaded('scripts/gui.js');
