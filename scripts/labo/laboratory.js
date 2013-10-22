/**
	Namespace Labo
**/
var Labo = {};

Labo.start = function() {
	clearStage();
	Labo.getMenu();
}

Labo.getMenu = function() {
	setHomeBtn();

	var cloud = Xml.importLabRequest("XML/lab_request.xml" ,"neige")

	cloud.generate();
	cloud.display(mainLayer);
	mainLayer.draw();
};


scriptLoaded('scripts/labo/laboratory.js');
