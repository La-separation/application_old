function sound_play(name) {
	if (appOnDevice()) {
		sounds[name].play();
	}
	else {
		document.getElementById(name).play();
	}
}

function sound_stop(name) {
	if (appOnDevice()) {
		sounds[name].stop();
	}
	else {
		document.getElementById(name).pause();
		document.getElementById(name).currentTime = 0;
	}
}

function initSounds() {
	if (appOnDevice()) {
		var path = location.pathname;
		var tab = path.split("/")
		sounds["cut"] = new Media(path.replace(tab[tab.length-1], "sounds/cut.ogg"));
		sounds["rub"] = new Media(path.replace(tab[tab.length-1], "sounds/rub.ogg"));
		sounds["tear"] = new Media(path.replace(tab[tab.length-1], "sounds/tear.ogg"));
		sounds["ambiant"] = new Media(path.replace(tab[tab.length-1], "sounds/ambiant.ogg"));
		sounds["error"] = new Media(path.replace(tab[tab.length-1], "sounds/error.ogg"));
		sounds["tap"] = new Media(path.replace(tab[tab.length-1], "sounds/tap.ogg"));
		sounds["cut1"] = new Media(path.replace(tab[tab.length-1], "sounds/cut1.ogg"));
		sounds["cut2"] = new Media(path.replace(tab[tab.length-1], "sounds/cut2.ogg"));
		sounds["login"] = new Media(path.replace(tab[tab.length-1], "sounds/login.ogg"));
	}
}

scriptLoaded('scripts/libs/separation_toolkit/sound/sound_play.js');
