/**
	Namespace Labo
**/
var Labo = {};

Labo.start = function() {
	clearStage();
	setHomeBtn();
	Labo.getMenu();
}

Labo.getMenu = function() {
	var cloud = new Cloud();

	cloud.addCentralWord(new Word("central"));
	cloud.add(new Word("cle"));
	cloud.add(new Word("pierre"));
	cloud.add(new Word("helene"));
	cloud.add(new Word("serge"));
	cloud.add(new Word("UTC"));
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("test"));
	cloud.add(new Word("SEPARATION"));
	cloud.add(new Word("alexis"));
	cloud.add(new Word("adrien"));

	cloud.generate();
	cloud.display(mainLayer);
	mainLayer.draw();
};
