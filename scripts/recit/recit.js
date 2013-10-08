/**
	Namespace recit
*/
var Recit = {};
var rct; // RecitConsTantes (RCT) : Constantes (taille de la police, etc.) utilisées pour le récit
var DEBUG = true;

/*
	Point d'entrée du récit
*/
Recit.start = function() {
	clearStage();
	
	this.computeSizes();
	if(DEBUG) this.addLines();
	
	var sentence = new Sentence();
	
	sentence.add(new Word('LA'));
	sentence.addSpace();
	sentence.add(new Word('SEPARATION'));
	sentence.newLine();
	sentence.newLine();
	sentence.add(new Word('CLEF'));
	sentence.addTab();
	sentence.add(new Word('CIEL'));
	
	sentence.generate(12);
	sentence.display(mainLayer);

	mainLayer.draw();
}

/*
	Détermination de la taille de la police en fonction de la hauteur du canvas
*/
Recit.computeSizes = function() {
	rct = fontConst['24px'];
	rct.line.nb = Math.floor(screenHeight / rct.line.height);
}

/** DEBUG **/

/*
	Ajoute des marges inter-lignes en rouge pour visualiser les lignes
*/
Recit.addLines = function() {
	for(var i = 0; i < rct.line.nb+1; i++)
	{
		var rect = new Kinetic.Rect({
			x: 0,
			y: rct.line.height * i - rct.car.margin.down,
			width: screenWidth,
			height: rct.car.margin.down + rct.car.margin.up,
			fill: "red",
			opacity: 0.2,
		});
		mainLayer.add(rect);
	}
}