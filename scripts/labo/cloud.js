/**
	Classe Cloud
*/
function Cloud() {
	this.words = new Array(); // Tableau des mots
	this.nb = 0; // Nombre de mots
	this.nb_max=10; //nombre maximum de mots
	this.rayon = 0; //rayon du cercle
	this.central_word = "";

	CloudConstruct(this);
}

/*
	Constructeur
*/
function CloudConstruct(cloud) {
}

/*
	Ajoute un mot sur la ligne.
	@param (word) : Objet Word
*/
Cloud.prototype.add = function(word) {
	this.nb++;
	this.words.push(word);
}

/*
	Ajoute un mot central au cloud
*/
Cloud.prototype.addCentralWord = function(word) {
	this.central_word = word;
}

/*
	Génère la ligne en générant tous les mots et en centrant la ligne si demandé
*/
Cloud.prototype.generate = function() {
	var center = [screenWidth/2 , screenHeight/2];
	var x;
	var y;
	var angle=Math.PI/this.nb;

// a modifier ////////////////////////////////////////
	this.central_word.font.group.setScaleX(2);		//
	this.central_word.font.group.setScaleY(2);		//
	this.central_word.scale=2;						//
//////////////////////////////////////////////////////

	for(var i = 0; i < this.nb; i++) {
		x = (center[0] + Math.cos(angle)*screenWidth*0.4);
		y = (center[1] + Math.sin(angle)*screenHeight*0.4);

		this.words[i].setCenterX(x);
		this.words[i].setCenterY(y);
		angle = angle + 2*Math.PI/this.nb;
	}

	this.central_word.setCenterX(center[0]);
	this.central_word.setCenterY(center[1]);
}

/*
	Affiche la ligne en affichant tous les mots
*/
Cloud.prototype.display = function(layer) {
	for(var i = 0; i < this.nb; i++) {
		this.words[i].display(layer);
	}
	this.central_word.display(layer);
}


scriptLoaded('scripts/labo/cloud.js');
