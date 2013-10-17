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


scriptLoaded('scripts/libs/separation_toolkit/sound/sound_play.js');