/**
	Classe Cloud
*/
function Cloud() {
	this.words = new Array(); // Tableau des mots
	this.nb = 0; // Nombre de mots
	this.nb_max=10; //nombre maximum de mots
	this.rayon = 0; //rayon du cercle

	CloudConstruct(this);
}

/*
	Constructeur
*/
function CloudConstruct(cloud) {
	cloud.computeRayon();
}

/*
	Ajoute un mot sur la ligne.
	@param (word) : Objet Word
*/
Cloud.prototype.add = function(word) {
	if (this.nb < this.nb_max) {
		this.nb++;
		this.words.push(word);
		return true;
	}
	else {
		return false;
	}
}

/*
	Calcule le rayon du cloud
 */
Cloud.prototype.computeRayon = function() {
	var min = (screenWidth > screenHeight) ? screenHeight : screenWidth;
	this.rayon = min*0.4;
}

/*
	Génère la ligne en générant tous les mots et en centrant la ligne si demandé
*/
Cloud.prototype.generate = function() {
	var center = [screenWidth/2 , screenHeight/2];
	var x;
	var y;
	var angle=Math.PI/this.nb;

	for(var i = 0; i < this.nb; i++) {
		x = (center[0] + Math.cos(angle)*screenWidth*0.4) - (this.words[i].getWidth()/2);
		y = (center[1] + Math.sin(angle)*screenHeight*0.4);

		this.words[i].setX(x);
		this.words[i].setY(y);
		angle = angle + 2*Math.PI/this.nb;
	}
}

/*
	Affiche la ligne en affichant tous les mots
*/
Cloud.prototype.display = function(layer) {
	for(var i = 0; i < this.nb; i++) {
		this.words[i].display(layer);
	}
}
