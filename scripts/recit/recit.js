var heightLine; // Hauteur d'une ligne
var heightFont; // Hauteur des polices
var heightChar; // Hauteur d'un caractère
var heightMarginUp; // Hauteur de la marge (au dessus des caractères)
var heightMarginDown; // Hauteur de la marge (en dessous des caractères)
var fontUsed; // Constantes en rapport avec la police utilisée

function recit_start() {
	clearStage();
	
	heightLine = Math.round(screenHeight / 8);
	heightChar = Math.round(heightLine * 0.6);
	if(heightChar % 2 == 1)
		heightChar--;
	heightMarginUp = Math.round(heightLine * 0.2);
	heightMarginDown = heightLine - heightMarginUp - heightChar;
	fontUsed = fontConst['24'];
	
	add_lines();
	
	/* DEBUG /
		alert("heightLine = " + heightLine + " ; heightChar = " + heightChar + " ; heightMarginUp = "
		+ heightMarginUp + " ; heightMarginDown = " + heightMarginDown + " ; heightFont = " + heightFont["coupable_haut"]);
	//*/
	
	var line = new Line();
	line.add(new Word("CLEF"));
	line.addTab();
	line.add(new Word("CIEL"));
	line.generate();
	
	line.display(mainLayer);
	
	//test_mot.display(mainLayer);
	/*test_mot.set({
		value: "clef",
		next_value: "ciel",
		police: "coupable_haut",
	});*/
	
	/*var test_phrase = new Sentence();
	test_phrase.addWord(test_mot);
	test_phrase.generate();
	*/
	mainLayer.draw();
}

function add_lines() {
	for(var i = 0; i < 9; i++)
	{
		var rect = new Kinetic.Rect({
			x: 0,
			y: heightLine*i - heightMarginDown,
			width: screenWidth,
			height: heightMarginDown + heightMarginUp,
			fill: "red",
			opacity: 0.2,
		});
		mainLayer.add(rect);
	}
}