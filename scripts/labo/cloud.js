/**
	Classe Cloud
*/
function Cloud() {
	this.words = new Array(); // Tableau des mots
	this.possibilities = new Array(); // Tableau des mots possibles
	this.nb = 0; // Nombre de mots
	this.nb_max=10; //nombre maximum de mots
	this.rayon = 0; //rayon du cercle
	this.central_word = null; // objet Word

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

Cloud.prototype.resetWords = function() {
	this.words = new Array();
}

/*
	Ajoute un mot central au cloud
*/
Cloud.prototype.addCentralWord = function(word) {
	this.central_word = word;
}

Cloud.prototype.getCentralWord = function() {
	return this.central_word;
}

Cloud.prototype.setPossibilities = function(data) {
	this.possibilities=data;
}

/*
	Génère la ligne en générant tous les mots et en centrant la ligne si demandé
*/
Cloud.prototype.generate = function(page) {
	this.resetWords();
	
	for (var i = 0; i < this.nb_max; i++) {
		var ind = i+(page-1)*this.nb_max;
		if (this.possibilities.length > ind) {
			this.add(new Word(this.possibilities[ind].getValue() , null , this.possibilities[ind].getPolice()));
		}
	}
	
	var center = [screenWidth/2 , screenHeight/2];
	var x;
	var y;
	var angle=Math.PI/this.nb;

// a modifier ////////////////////////////////////////
	this.central_word.font.group.setScaleX(2);		//
	this.central_word.font.group.setScaleY(2);		//
	this.central_word.scale=2;						//
	this.central_word.setZoomOnActive(false);
//////////////////////////////////////////////////////

	for(var i = 0; i < this.nb; i++) {
		x = Math.floor(center[0] + Math.cos(angle)*screenWidth*0.4);
		y = Math.floor(center[1] + Math.sin(angle)*screenHeight*0.4);

		this.words[i].setCenterX(x);
		this.words[i].setCenterY(y);
		angle = angle + 2*Math.PI/this.nb;
		
		var cloud = this;
		//~ var word = this.words[i];
		//~ this.words[i].next_value = '';
		this.words[i].onTap(function(word) {
			cloud.generateCentralWord(word.value, word.police);
		});
	}

	this.central_word.setCenterX(center[0]);
	this.central_word.setCenterY(center[1]);
}

Cloud.prototype.generateCentralWord = function(next_value, police) {
	this.central_word.next_value = next_value;
	this.central_word.police = police;
	this.central_word.font.destroy();
	this.central_word.generate();
	this.central_word.display(mainLayer);
	this.central_word.activate();
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
