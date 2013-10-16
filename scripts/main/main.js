function computeSizes() {
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;

	titleSize = 0.1*screenHeight;
	entireSize = 0.1*screenHeight;
	/*Need to compute sizes because font sizes or not the same between central, normal and cut fonts.*/
	demiSize = entireSize*(6/11);
	centraleSize = entireSize*(9/11);
}

function appStart() {
	computeSizes();

	//Creation of stage with the same size of the device's screen
	stage = new Kinetic.Stage( {
		container : 'main',
		width : screenWidth,
		height : screenHeight
	} );

	//Need to force style in block to not resize the div content of stage
	stage.getContent().style.display = 'block';

	loadButtons();

	initImages();
	initSounds();

	// setTimeout important, résolution d'un bug
	//setTimeout(introductionStage, 1);
	setTimeout(initMainMenu, 1);

	stage.add(mainLayer);
	stage.add(actionLayer);
}
