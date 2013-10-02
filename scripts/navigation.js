if(appOnDevice()) {
	document.addEventListener("deviceready", checkDevice, false);
}
else {
	checkDevice();
}

document.body.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, false);

function computeSizes() {
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;
	
	titleSize = 0.1*screenHeight;
	entireSize = 0.1*screenHeight;
	/*Need to compute sizes because font sizes or not the same between central, normal and cut fonts.*/
	demiSize = entireSize*(6/11);
	centraleSize = entireSize*(9/11);
}

function checkDevice() {
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
	//initSounds();

	introductionStage();
	//initMainMenu();

	stage.add(mainLayer);
	stage.add(actionLayer);
}

function initImages() {
	var hand_tuto_img = new Image();
	hand_tuto_img.src = "imgs/hand_tuto.png";
	hand_tuto_img.onload = function() {
		hand_tuto = new Kinetic.Image({
			x : 0,
			y : - screenHeight,
			listening : true,
			image: hand_tuto_img,
			offset: { x : 0 , y : 0 },
			width : screenHeight*0.075,
			height : screenHeight*0.075
		});
	};
	var arrowUpImg = new Image();
	arrowUpImg.src = "imgs/btns/arrow_up.png";
	arrowUpImg.onload = function() {
		arrowUp = new Kinetic.Image({
			x : 0,
			y : - screenHeight,
			listening : true,
			image: arrowUpImg,
			offset: { x : 0 , y : 0 },
			width : entireSize,
			height : entireSize
		});
	};
	var arrowDownImg = new Image();
	arrowDownImg.src = "imgs/btns/arrow_down.png";
	arrowDownImg.onload = function() {
		arrowDown = new Kinetic.Image({
			x : 0,
			y : - screenHeight,
			listening : true,
			image: arrowDownImg,
			offset: { x : 0 , y : 0 },
			width : entireSize,
			height : entireSize
		});
	};
}

function initSounds() {
	sounds["cut"] = new Media("/android_asset/www/sounds/Coupable_3.wav");
	sounds["rub"] = new Media("/android_asset/www/sounds/Ombre_2.wav");
	sounds["tear"] = new Media("/android_asset/www/sounds/Centrale_1.wav");
	sounds["ambiant"] = new Media("/android_asset/www/sounds/ambiant.wav");
}

btnFunctions['home'] = function () {
	clearStage();
	getMainMenu();
}
btnFunctions['shuffle'] = function () {
	clearStage();
	getRandomStory();
}
btnFunctions['return'] = function () {
	clearStage();
	getStoriesMenu();
}

function loadButtons() {
	var homeImg = new Image();
	homeImg.src = "imgs/btns/icon.png";
	homeImg.onload = function() {
		homeBtn = new Kinetic.Image({
			x : 0,
			y : screenHeight,
			listening : true,
			image: homeImg,
			width : screenHeight*0.075,
			height : screenHeight*0.075
		});
		homeBtn.setOffset(0,homeBtn.getHeight());
		homeBtn.on(events['tap'], btnFunctions['home']);
	};

	var shuffleImg = new Image();
	shuffleImg.src = "imgs/btns/shuffle.png";
	shuffleImg.onload = function() {
		shuffleBtn = new Kinetic.Image({
			x : screenWidth,
			y : screenHeight,
			listening : true,
			image: shuffleImg,
			width : screenHeight*0.075,
			height : screenHeight*0.075
		});
		shuffleBtn.setOffset(shuffleBtn.getWidth(),shuffleBtn.getHeight());
		shuffleBtn.on(events['tap'], btnFunctions['shuffle']);
	};

	var returnImg = new Image();
	returnImg.src = "imgs/btns/arrow.png";
	returnImg.onload = function() {
		returnBtn = new Kinetic.Image({
			x : 0,
			y : 0,
			listening : true,
			image: returnImg,
			width : screenHeight*0.075,
			height : screenHeight*0.075
		});
		returnBtn.setOffset(0,0);
		returnBtn.on(events['tap'], btnFunctions['return']);
	};
}

function setHomeBtn() {
	actionLayer.add(homeBtn);
	actionLayer.draw();
}

function setShuffleBtn() {
	actionLayer.add(shuffleBtn);
	actionLayer.draw();
}

function setReturnBtn() {
	actionLayer.add(returnBtn);
	actionLayer.draw();
}

function clearStage() {
	/*Faire de l'animation pour effacer le stage*/
	mainLayer.removeChildren();
	actionLayer.removeChildren();
	mainLayer.draw();
	actionLayer.draw();
}

//Creating the main menu interface
function initMainMenu() {
	//sounds['ambiant'].stop();
	
	mainLayer.removeChildren();
	actionLayer.removeChildren();

	opacite = 0.5;

	tutorielH = new Kinetic.Text( {
		text : activeLang["tuto"],
		fontFamily : "DemiHautH",
		fontSize : demiSize/2,
		fill : "#FFF",
		align : "center",
		x : stage.getWidth()/2,
		y : stage.getHeight()*0.75,
		opacity: opacite
	} );
	tutorielH.setOffset( tutorielH.getWidth()/2, tutorielH.getHeight()/2 );

	tutorielB = new Kinetic.Text( {
		text : activeLang["tuto"],
		fontFamily : "DemiHautB",
		fontSize : demiSize/2,
		fill : "#FFF",
		align : "center",
		offset : { x :tutorielH.getWidth()/2,
			y : tutorielH.getHeight()/2 },
			x : stage.getWidth()/2,
			y : tutorielH.getY()+stage.getHeight()*0.025,
			opacity: opacite
		} );

	tutoriel = new Kinetic.Rect( {
		listening : true,
		width : tutorielH.getWidth()*1.5,
		height : tutorielH.getHeight() + tutorielB.getHeight(),
		x : tutorielH.getX()-(tutorielH.getWidth()*0.5)+(tutorielH.getWidth()*0.25),
		y : tutorielH.getY(),
		offset : tutorielH.getOffset(),
		opacity : 0
	} );

	recitH = new Kinetic.Text( {
		text : activeLang["story"],
		fontFamily : "DemiHautH",
		fontSize : 4 * (demiSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth()/5,
		y : stage.getHeight()/2
	} );
	recitH.setOffset( recitH.getWidth()/2, recitH.getHeight()/2 );

	recitB = new Kinetic.Text( {
		text : activeLang["story"],
		fontFamily : "DemiHautB",
		fontSize : 4 * (demiSize/2),
		fill : "#FFF",
		align : "center",
		offset : { x :recitH.getWidth()/2,
			y : recitH.getHeight()/2 },
			x : stage.getWidth()/5,
			y : recitH.getY()+stage.getHeight()*0.110
		} );

	recit = new Kinetic.Rect( {
		listening : true,
		width : recitH.getWidth()*1.5,
		height : recitH.getHeight() + recitB.getHeight(),
		x : recitH.getX()-(recitH.getWidth()*0.5)+(recitH.getWidth()*0.25),
		y : recitH.getY(),
		offset : recitH.getOffset(),
		opacity : 0
	} );

	laboratoireH = new Kinetic.Text( {
		text : activeLang["labo"],
		fontFamily : "DemiHautH",
		fontSize : 4 * (demiSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth() / 5 * 4,
		y : stage.getHeight()/2
	} );
	laboratoireH.setOffset( laboratoireH.getWidth()/2, laboratoireH.getHeight()/2 );
	laboratoireB = new Kinetic.Text( {
		text : activeLang["labo"],
		fontFamily : "DemiHautB",
		fontSize : 4 * (demiSize/2),
		fill : "#FFF",
		align : "center",
		offset : { x :laboratoireH.getWidth()/2,
			y : laboratoireH.getHeight()/2 },
			x : stage.getWidth()/5 * 4,
			y : laboratoireH.getY() + stage.getHeight()*0.110
		} );

	laboratoire = new Kinetic.Rect( {
		listening : true,
		width : laboratoireH.getWidth()*1.5,
		height : laboratoireH.getHeight() + laboratoireB.getHeight(),
		x : laboratoireH.getX()-(laboratoireH.getWidth()*0.5)+(laboratoireH.getWidth()*0.25),
		y : laboratoireH.getY(),
		offset : laboratoireH.getOffset(),
		opacity : 0
	} );

	conceptH = new Kinetic.Text( {
		text : activeLang["concept"],
		fontFamily : "DemiHautH",
		fontSize : demiSize/2,
		fill : "#FFF",
		align : "center",
		x : stage.getWidth()/2,
		y : stage.getHeight()*0.85,
		opacity: opacite
	} );
	conceptH.setOffset( conceptH.getWidth()/2, conceptH.getHeight()/2 );
	conceptB = new Kinetic.Text( {
		text : activeLang["concept"],
		fontFamily : "DemiHautB",
		fontSize : demiSize/2,
		fill : "#FFF",
		align : "center",
		offset : { x :conceptH.getWidth()/2,
			y : conceptH.getHeight()/2 },
			x : stage.getWidth()/2,
			y : conceptH.getY()+ stage.getHeight()*0.025,
			opacity: opacite
		} );

	concept = new Kinetic.Rect( {
		listening : true,
		width : conceptH.getWidth()*1.5,
		height : conceptH.getHeight() + conceptB.getHeight(),
		x : conceptH.getX()-(conceptH.getWidth()*0.5)+(conceptH.getWidth()*0.25),
		y : conceptH.getY(),
		offset : conceptH.getOffset(),
		opacity : 0
	} );

	fr_w = new Kinetic.Text( {
		text : 'fr',
		fontFamily : "DemiHaut",
		fontSize : 1.2 * (entireSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth() / 2,
		y : stage.getHeight() * 0.2,
		listening : true,
		opacity: opacite / 3
	} );

	en_w = new Kinetic.Text( {
		text : 'en',
		fontFamily : "DemiHaut",
		fontSize : 1.2 * (entireSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth() / 2,
		y : stage.getHeight() * 0.2,
		listening : true,
		opacity: opacite 
	} );

	trait = new Kinetic.Text( {
		text : '|',
		fontFamily : "DemiHaut",
		fontSize : 1.2 * (entireSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth() / 2,
		y : stage.getHeight() * 0.2,
		opacity: opacite
	} );

	lang_size = fr_w.getWidth() + en_w.getWidth() + trait.getWidth();
	fr_w.setOffset(lang_size / 2, 0);
	trait.setOffset(lang_size / 2 - fr_w.getWidth(), 0);
	en_w.setOffset(lang_size / 2 - fr_w.getWidth() - trait.getWidth(), 0);


	tutoriel.on(events['tap'], function() {
		var langue = "fr";
		if(activeLang == en) {
			langue = "en";
		}
		getTutorielMenu(langue);
	} );
	recit.on(events['tap'], function() {
		var langue = "fr";
		if(activeLang == en) {
			langue = "en";
		}
		getStoriesMenu(langue);
	} );
	laboratoire.on(events['tap'], function() {
		if(navigator.connection.type == Connection.NONE)
		{
			var errorMsg = "";
			if(activeLang == fr) {
				errorMsg = "Impossible d'utiliser le labo des mots : aucune connection détectée.";
			}
			else {
				errorMsg = "Can not use the word lab : no connection detected.";
			}
			alert(errorMsg);
		}
		else {
			getLaboratoryMenu();
		}
	} );
	concept.on(events['tap'], function() {
		getConceptMenu();
	} );
	fr_w.on(events['tap'], function() {
		fr_w.setOpacity(opacite/3);
		en_w.setOpacity(opacite);
		changeLanguage(fr);	
	});
	en_w.on(events['tap'], function(){
		en_w.setOpacity(opacite/3);
		fr_w.setOpacity(opacite);
		changeLanguage(en);
	});

	getMainMenu();
}

function changeLanguage(lang) {
	if(lang == fr) { activeLang = fr; }
	else { activeLang = en; }
	
	alreadyReadXML = false;
	
	tutorielH.setText(activeLang["tuto"]);
	tutorielH.setOffset( tutorielH.getWidth()/2, tutorielH.getHeight()/2 );	

	tutorielB.setText(activeLang["tuto"]);
	tutorielB.setOffset( tutorielB.getWidth()/2 , tutorielB.getHeight()/2 );

	recitH.setText(activeLang["story"]);
	recitH.setOffset( recitH.getWidth()/2, recitH.getHeight()/2 );
	
	recitB.setText(activeLang["story"]);
	recitB.setOffset( recitB.getWidth()/2, recitB.getHeight()/2 );

	laboratoireH.setText(activeLang["labo"]);
	laboratoireH.setOffset( laboratoireH.getWidth()/2, laboratoireH.getHeight()/2 );	

	laboratoireB.setText(activeLang["labo"]);
	laboratoireB.setOffset( laboratoireB.getWidth()/2, laboratoireB.getHeight()/2 );	

	conceptH.setText(activeLang["concept"]);
	conceptH.setOffset( conceptH.getWidth()/2, conceptH.getHeight()/2 );
	
	conceptB.setText(activeLang["concept"]);
	conceptB.setOffset( conceptB.getWidth()/2 , conceptB.getHeight()/2 );

	mainLayer.draw();
}

/*Displaying the main menu interface*/
function getMainMenu() {
	inTuto = false;
	inLab = false;

	mainLayer.add(tutorielH);
	mainLayer.add(tutorielB);
	mainLayer.add(recitH);
	mainLayer.add(recitB);
	mainLayer.add(laboratoireH);
	mainLayer.add(laboratoireB);
	mainLayer.add(conceptH);
	mainLayer.add(conceptB);
	mainLayer.add(fr_w);
	mainLayer.add(en_w);
	mainLayer.add(trait);

	actionLayer.add(tutoriel);
	actionLayer.add(recit);
	actionLayer.add(laboratoire);
	actionLayer.add(concept);

	mainLayer.draw();
	actionLayer.draw();
}