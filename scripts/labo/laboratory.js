var rct; // RecitConsTantes (RCT) : Constantes (taille de la police, etc.) utilis�es pour le r�cit

function getLaboratoryMenu() {
	clearStage();
	setHomeBtn();
	rct = fontConst['24px'];

	var cloud = new Cloud();
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("bonjour"));
	cloud.add(new Word("bonjour"));
	cloud.generate();
	cloud.display(mainLayer);

	mainLayer.draw();
};
