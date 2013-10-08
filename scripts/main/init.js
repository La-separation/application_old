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
	if (appOnDevice()) {
		var path = location.pathname;
		var tab = path.split("/")
		sounds["cut"] = new Media(path.replace(tab[tab.length-1], "sounds/cut.wav"));
		sounds["rub"] = new Media(path.replace(tab[tab.length-1], "sounds/rub.wav"));
		sounds["tear"] = new Media(path.replace(tab[tab.length-1], "sounds/tear.wav"));
		sounds["ambiant"] = new Media(path.replace(tab[tab.length-1], "sounds/ambiant.wav"));
	}
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
