/**
	Namespace Labo
**/
var Labo = {};

var word_searched = '';
var cloud = null;
var page = 1;

Labo.start = function() {	
	Destroy.all();
	page = 1;
	
	word_searched = prompt("Choisissez un mot :");
	if (word_searched != "" && word_searched != null) {
		Labo.menu();
	} else {
		Labo.start();
	}
}

Labo.menu = function() {
	Destroy.all();
	Gui.homeBtn();
	
	Labo.generateCloud();

	mainLayer.draw();
	actionLayer.draw();
};

Labo.generateCloud = function() {
	Destroy.all();
	loadingImg();
	
	cloud = new Cloud();
	cloud.addCentralWord(new Word(word_searched));

	setTimeout(function(){
		// cloud.setPossibilities(Xml.importLabRequest(word_searched));
		cloud.setPossibilities(Db.wordPossibilities(word_searched));
		Labo.displayCloud();
	}, 1);
}

Labo.displayCloud = function() {
	Destroy.all();
	Gui.Labo.displayAll();
	
	cloud.generate(page);
	cloud.display(mainLayer);
	
	mainLayer.draw();
	actionLayer.draw();
}

Labo.destroy = function() {
	Destroy.objet(cloud);
}

function loadingImg() {
	Gui.homeBtn();
	var loading = new Word("Chargement");
	
	loading.setCenterX(screenWidth/2);
	loading.setCenterY(screenHeight/2);
	
	loading.display(mainLayer);
	mainLayer.draw();
}

scriptLoaded('scripts/labo/laboratory.js');
