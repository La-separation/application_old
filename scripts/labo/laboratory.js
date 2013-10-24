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
	
	var police = 'coupable_min_haut';
	var word_searched = 'mot';
	
	cloud.addCentralWord(new Word(word_searched));
	
	//cloud.setPossibilities(Xml.importLabRequest("XML/lab_request.xml", cloud.getCentralWord()));
	cloud.setPossibilities(Xml.importLabRequest('http://www.sgoo.fr/proxy.php?url=http%3A%2F%2F192.185.52.237%2F%7Elasepa%2Fbeta%2Fwords.php%3Fprocedes%3D' + police + '%26word%3D' + word_searched + '%26casse%3D1', cloud.getCentralWord()));
	cloud.generate(1);
	cloud.display(mainLayer);
	mainLayer.draw();
	actionLayer.draw();
};


scriptLoaded('scripts/labo/laboratory.js');
