function sound_play(name) {
	sound_stop(name);
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
		sounds["rub1"] = new Media(path.replace(tab[tab.length-1], "sounds/rub1.ogg"));
		sounds["rub2"] = new Media(path.replace(tab[tab.length-1], "sounds/rub2.ogg"));
		sounds["tear"] = new Media(path.replace(tab[tab.length-1], "sounds/tear.ogg"));
		sounds["tear1"] = new Media(path.replace(tab[tab.length-1], "sounds/tear1.ogg"));
		sounds["tear2"] = new Media(path.replace(tab[tab.length-1], "sounds/tear2.ogg"));
		sounds["ambiant"] = new Media(path.replace(tab[tab.length-1], "sounds/ambiant.ogg"));
//		sounds["error"] = new Media(path.replace(tab[tab.length-1], "sounds/error.ogg"));
		sounds["tap"] = new Media(path.replace(tab[tab.length-1], "sounds/tap.ogg"));
	}
}

scriptLoaded('scripts/libs/separation_toolkit/sound/sound_play.js');
