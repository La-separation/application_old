/**
	Namespace recit
*/
var Recit = {};
var DEBUG = false;

Recit.cst = {
	margin: {				// Marge...
		up: 12,					// ... supérieure (size/2)
		down: 12,				// ... inférieure
	},
	line: {				// Ligne
		height: 64,			// Hauteur
		nb: 1,				// Nombre de lignes
	},
}

/*
	Point d'entrée du récit
*/
Recit.start = function() {
	clearStage();
	setHomeBtn();

	this.computeSizes();
	if(DEBUG) this.addLines();

	var sentence = new Sentence();

	var mot1 = new Word('SEPARATION', 'PERCEPTION');
	var mot2 = new Word('green', 'peace');
	var mot3 = new Word('clef', 'ciel', 'coupable_bas');

	sentence.add(new Word('La'));
	sentence.addSpace();
	sentence.add(mot1);
	sentence.newLine();
	sentence.newLine();
	sentence.add(mot2);
	sentence.addTab();
	sentence.add(mot3);

	sentence.generate(12);
	sentence.display(mainLayer);
	
	/*
	var line = new Line();
	line.add(new Word('LA'));
	line.addSpace();
	line.add(new Word('SEPARATION'));
	line.generate(12);
	line.display(mainLayer);
	*/

	mainLayer.draw();

	mot1.addGesture();
	mot2.addGesture();
	mot3.addGesture();
	
	//setTimeout(function(){test.animate()},4000);
	//setTimeout(function(){test.activate()},1000);
	//setTimeout(function(){test.disable()},7000);
}

/*
	Détermination de la taille de la police en fonction de la hauteur du canvas
*/
Recit.computeSizes = function() {
	Recit.cst.line.height = 64; // TODO dynamique
	Recit.cst.line.nb = Math.floor(screenHeight / Recit.cst.line.height);
}

/** DEBUG **/

/*
	Ajoute des marges inter-lignes en rouge pour visualiser les lignes
*/
Recit.addLines = function() {
	for(var i = 0; i < Recit.cst.line.nb+1; i++)
	{
		var rect = new Kinetic.Rect({
			x: 0,
			y: Recit.cst.line.height * i - Recit.cst.margin.down,
			width: screenWidth,
			height: Recit.cst.margin.down + Recit.cst.margin.up,
			fill: "red",
			opacity: 0.3,
		});
		mainLayer.add(rect);
	}
}
