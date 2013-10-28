/*
	Convertit un code de l'ancien système dans le nouveau
*/
function convertCode(code, police) {
	var new_code = '';
	
	for(var i = 0; i < code.length; i++) {
		switch(police) {
			case 1:
				switch(code[i]) {
					case 'a': new_code += 'o'; break;
					case 'o': new_code += 'a'; break;
					case 'i': new_code += 'l'; break;
					case 'b': new_code += 'v'; break;
					case 'e': new_code += 'w'; break;
					default: new_code += code[i];
				}
			break;
			default: new_code += code[i];
		}
	}
	
	// alert('"' + new_code + '"');
	
	return new_code;
}

/*
	Convertit un mot de l'ancien système dans le nouveau
*/
function convertValue(value, code, police) {
	var new_value = '';
	for(var i = 0, i_code = 0; i < value.length; i++, i_code++) {
		switch(police) {
			case 1:
				switch(value[i]) {
					case 'm': // Lettres de largeur 3
						new_value += value[i];
						if(code[i_code] == 'l') i_code += 2;
					break;
					case 'h': case 'k': case 'n': case 'x': // Lettres de largeur 2
						new_value += value[i];
						if(code[i_code] == 'l') i_code++;
					break;
					case 'i':
						new_value += (code[i_code] == 'o') ? 'i ' : 'i';
					break;
					case 't':
						new_value += (code[i_code] == 'o') ? 't ' : 't';
					break;
					default:
						new_value += value[i];
				}
			break;
			default:
				new_value += value[i];
		}
	}
	
	return new_value;
}

scriptLoaded('scripts/libs/separation_toolkit/codes/codes.js');
