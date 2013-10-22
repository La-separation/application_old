/**
	Namespace Labo
**/
var Labo = {};

var Labo_max_possibilities = 100;

Labo.start = function() {
	clearStage();
	Labo.getMenu();
}

Labo.getMenu = function() {
	setHomeBtn();
	
	var cloud = new Cloud();
	
	cloud.addCentralWord(new Word("neige"));
	cloud.setPossibilities(Xml.importLabRequest("XML/lab_request.xml", cloud.getCentralWord()));
	cloud.generate(1);
	cloud.display(mainLayer);
	mainLayer.draw();
	actionLayer.draw();
};


scriptLoaded('scripts/labo/laboratory.js');
