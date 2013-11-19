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
	while (i<(len)) {
		rand1=randRange(0,len-1);
		rand2=randRange(0,len-1);
		temp=array[rand1];
		array[rand1]=array[rand2];
		array[rand2]=temp;
		i++;
	}
	return array;
}

function getWordCodes(word, police)
{
	// Initialisation
	var word_codes = [];
	word = word.toLowerCase();
	
	// On parcourt toutes les lettres du mot
	for (var i = 0; i < word.length; i++)
	{
		var c = word[i];
		// On récupère la liste des codes de la lettre
		var n = c.charCodeAt(0) - 'a'.charCodeAt(0);
		var codes = code_polices[police][n];
		
		var new_word_codes = [];
		
		// On parcourt tous les codes possibles
		for(var j in codes)
		{
			var code = codes[j];
			// Si word_codes est vide, on ajoute les premiers codes
			if(word_codes.length <= 0)
			{
				new_word_codes.push(code);
			}
			// Sinon on rajoute le code à la fin de chaque mot présent
			else
			{
				for(k in word_codes)
				{
					new_word_codes.push(word_codes[k] + code);
				}
			}
		}
		
		word_codes = new_word_codes;
	}
	
	return word_codes;
}

scriptLoaded('scripts/functions.js');
