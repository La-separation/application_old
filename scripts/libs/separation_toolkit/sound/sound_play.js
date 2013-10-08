function sound_play(name) {
	if (appOnDevice()) {
		sounds[name].play();
	}
	else {
		document.getElementById(name).play();
	}
}
