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

	// Creation of stage with the same size of the device's screen
	stage = new Kinetic.Stage( {
		container : 'main',
		width : screenWidth,
		height : screenHeight,
		// background: #040,
	} );

	// Need to force style in block to not resize the div content of stage
	stage.getContent().style.display = 'block';
	
	stage.on(events['tap'], function(event) { Event.tap(event); });
	// stage.on(events['touchmove'], function(event) { Event.touchmove(event); });

	loadButtons();

	initImages();
	initSounds();

	// setTimeout important, résolution d'un bug
	// setTimeout(Introduction.start, 1);
	setTimeout(Menu.start, 1);

	stage.add(mainLayer);
	stage.add(actionLayer);
}

scriptLoaded('scripts/main/main.js');
