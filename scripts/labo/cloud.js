/**
	Classe Cloud
*/
function Cloud() {
	this.words = new Array(); // Tableau des mots
	this.possibilities = new Array(); // Tableau des mots possibles
	this.nb = 0; // Nombre de mots
	this.nb_max = 9; // Nombre maximum de mots
	this.rayon = 0; // Rayon du cercle
	this.central_word = null; // Objet Word
	this.central_word_value = null; // Objet Word

	CloudConstruct(this);
}

/*
	Constructeur
*/
function CloudConstruct(cloud) {
}

/*
	Ajoute un mot dans le nuage.
	@param (word) : Objet Word
*/
Cloud.prototype.add = function(word) {
	this.nb++;
	this.words.push(word);
}

Cloud.prototype.resetWords = function() {
	this.words = new Array();
	this.nb = 0;
	}

/*
	Ajoute un mot central au cloud
*/
Cloud.prototype.addCentralWord = function(word) {
	this.central_word = word;
	this.central_word_value = word.getValue();
}

Cloud.prototype.getCentralWord = function() {
	return this.central_word;
}

Cloud.prototype.setPossibilities = function(data) {
	this.possibilities = data;
}

/*
	Génère la ligne en générant tous les mots et en centrant la ligne si demandé
*/
Cloud.prototype.generate = function(page) {
	this.resetWords();
	
	for (var i = 0; i < this.nb_max; i++) {
		var ind = i + (page-1) * this.nb_max;
		if (this.possibilities.length > ind) {
			var p = this.possibilities[ind];
			this.add(new Word(p.getValue(), null, p.getPolice(), p.getCode()));
		}
	}
	
	var center = [screenWidth/2, screenHeight/2];
	var x;
	var y;
	var angle = Math.PI / this.nb;

	this.central_word.setZoom(2);
	this.central_word.setZoomOnActive(false);

	for(var i = 0; i < this.nb; i++) {
		x = Math.floor(center[0] + Math.cos(angle) * screenWidth * 0.4);
		y = Math.floor(center[1] + Math.sin(angle) * screenHeight * 0.4);

		this.words[i].setCenterX(x);
		this.words[i].setCenterY(y);
		angle = angle + 2 * Math.PI / this.nb;
		
		var cloud = this;
		this.words[i].onTap(function(word) {
			cloud.generateCentralWord(word.getValue(), word.getPolice(), word.getCode(), center);
		});
	}

	this.central_word.setCenterX(center[0]);
	this.central_word.setCenterY(center[1]);
	this.central_word.generate();
}

Cloud.prototype.generateCentralWord = function(next_value, police, code, center) {
	this.central_word.setValue(this.central_word_value);
	this.central_word.setNextValue(next_value);
	this.central_word.setPolice(police);
	this.central_word.setCode(code);

	this.central_word.generate();
	this.central_word.setCenterX(center[0]);
	this.central_word.setCenterY(center[1]);
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

Cloud.prototype.destroy = function() {
	Destroy.arrayObjet(this.words);
	Destroy.objet(this.central_word);
}


scriptLoaded('scripts/labo/cloud.js');
