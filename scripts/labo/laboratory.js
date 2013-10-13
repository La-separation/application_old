/**
	Namespace Labo
**/
var Labo = {};

var rct; // RecitConsTantes (RCT) : Constantes (taille de la police, etc.) utilisées pour le récit

Labo.start = function() {
	clearStage();
	setHomeBtn();
	rct = fontConst['24px'];
	Labo.getMenu();
}

Labo.getMenu = function() {
	var cloud = new Cloud();
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
