function Line() {
	this.words = new Array(); // Tableau des mots
	this.nb = 0; // Nombre de mots
	this.width = 0; // Largeur totale des mots
	this.offsetY = 0; // 
}

/*
	Ajoute un mot sur la ligne.
	@param (word) : Objet Word
	@return (true/false) : Si la largeur du mot est trop grande, on retourne false, sinon true.
*/
Line.prototype.add = function(word) {
	word.generate();
	
	if(this.width + word.getWidth() < screenWidth) {
		this.width += word.getWidth();
		this.nb++;
		this.words.push(word);
		return true;
	}
	else
	{
		return false;
	}
}

Line.prototype.addSpace = function() {
	var word = new Word(' ');
	this.add(word);
}

Line.prototype.addTab = function() {
	var word = new Word('    ');
	this.add(word);
}

Line.prototype.reset = function() {
	this.words = new Array();
	this.nb = 0;
	this.width = 0;
}

Line.prototype.display = function(layer) {
	for(var i = 0; i < this.nb; i++) {
		this.words[i].display(layer);
	}
}

Line.prototype.generate = function() {
	var x = (screenWidth - this.width) / 2;
	for(var i = 0; i < this.nb; i++) {
		this.words[i].setX(x);
		x += this.words[i].getWidth();
	}
}