function appOnDevice() {
	return false;
}

function main() {
	if(appOnDevice()) {
		document.addEventListener("deviceready", appStart, false);
	}
	else {
		appStart();
	}
}

function appStart() {
	/* Initialisations */
	// Récupération de la taille de l'écran
	initSizes();
	
	// Création du contexte Kinetic avec la taille de l'écran
	stage = new Kinetic.Stage( {
		container : 'main',
		width : screenWidth,
		height : screenHeight
	} );

	// Need to force style in block to not resize the div content of stage
	stage.getContent().style.display = 'block';

	initButtons();
	initImages();
	/* Ne fonctionne pas encore sans phonegap TODO
	// initSounds();
	*/
	
	/* Démarrage du programme */
	navigation();
	//initMainMenu();

	stage.add(mainLayer);
	stage.add(actionLayer);
}
