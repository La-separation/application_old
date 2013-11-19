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

scriptLoaded('scripts/functions.js');
