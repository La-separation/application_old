/*
	logs de ce qui se passe pour débugguer
	uniquement si le mode débug est activé
*/
function log(str) {
	// TO DO écriture dans une fichier
}

function randRange(from,to) {
	return Math.floor(Math.random()*(to-from+1)+from);
}

function randArray(array) {
	len=array.length;
	i=0;
	while (i<len) {
		rand1=randRange(0,len-1);
		rand2=randRange(0,len-1);
		temp=array[rand1];
		array[rand1]=array[rand2];
		array[rand2]=temp;
		i++;
	}
	return array;
}

function getWordCodes(word, police) {
	var word_codes = [""];
	var i=0;
	while (i < word.length) {
		var ilist = code[police][word[i].charCodeAt(0) - "a".charCodeAt(0)];
		var j=1;
		var k=0;
		while (j <= ilist.length) {
			if (j != 1) {
				word_codes=word_codes.concat(word_codes);
			}
			while (k < (word_codes.length*j/ilist.length)) {
				word_codes[k]=word_codes[k] + ilist[j-1];
				k++;
			}
			j++;
		}
		i++;
	}
	return word_codes;
}

scriptLoaded('scripts/functions.js');
