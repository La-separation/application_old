function Sentence() {
	this.lines = new Array(); // Tableau des lignes de la phrase
	this.nb = 0; // Nombre de lignes dans la phrase
}

Sentence.prototype.addWord = function(word) {
	var width = word.getWidth();
	
	// Si on entame une nouvelle ligne
	if(this.lines[this.nb] == null)
	{
		this.lines[this.nb] = new Line();
	}
	var line = this.lines[this.nb];
	
	// Si on doit entamer une nouvelle ligne
	if(line.width + width > screenWidth)
	{
		this.nb++;
		this.addWord(word);
		return;
	}
	else
	{
		line.addWord(word);
	}
}

Sentence.prototype.generate = function() {
	for(var i = 0; i < this.nb; i++) {
		line = this.lines[i];
		line.generate();
	}
}