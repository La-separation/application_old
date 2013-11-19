/*
 * cut --> coupable
 * rub1, rub2 --> ombre
 * tear, tear1, tear2 --> centrale
 * ambiant
 * tap
*/
sound_police_begin = function(police, dir) {
	switch(police) {
		case 0:
		case 1:
		case 5:
			sound_play('cut');
		break;
		case 2:
			if(dir == -1) {
				sound_play('tear1');
			} else {
				sound_play('tear2');
			}
		break;
		case 3:
			if(dir == -1) {
				sound_play('rub1');
			} else {
				sound_play('rub2');
			}
		break;
		default:
			alert('Police inconnue : ' + this.police + ' dans la fonction sound_police_begin()');
		break;
	}
}

sound_police_abort = function(police) {
	switch(police) {
		case 0:
		case 1:
		case 5:
			sound_stop('cut');
		break;
		case 2:
			sound_stop('tear1');
			sound_stop('tear2');
		break;
		case 3:
			sound_stop('rub1');
			sound_stop('rub2');
		break;
		default:
			alert('Police inconnue : ' + this.police + ' dans la fonction sound_police_begin()');
		break;
	}
}

scriptLoaded('scripts/libs/separation_toolkit/sound/polices.js');
