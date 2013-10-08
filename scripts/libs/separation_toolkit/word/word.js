/**
	Class Word
*/
function Word(value, next_down) {
	this.x = 0; // Position x en pixel
	this.y = 0; // Position y en pixel
	this.police = rct.police.name; // Police
	this.fontSize = rct.car.size; // Hauteur du mot en pixel
	this.color = rct.car.color; // Couleur
	
	this.value = value; // Valeur du mot actuel
	this.next_down = (next_down == undefined) ? value : next_down; // Valeur du mot après transformation
	this.font = null; // Groupe Kinetic qui sera affiché
	this.animation = null; // Fonction de callback pour l'animation ('Animation.x')
	this.inAnimation = false;
	
	WordConstruct(this);
}

/*
	Constructeur
*/
function WordConstruct(word) {
	word.generate();
}

Word.prototype.generate = function() {
	this.font = new Word_DemiHaut({
		value: this.value,
		next_down: this.next_down,
		fontSize: this.fontSize,
		police: this.police,
		color: this.color,
	});
	this.animation = Animation.downCutLeft;
}

Word.prototype.display = function(layer) {
	this.font.group.setX(this.x);
	this.font.group.setY(this.y);

	layer.add(this.font.group);
}

Word.prototype.animate = function() {
	if(!this.inAnimation)
	{
		this.inAnimation = true;
		this.animation(this);
	}
}

Word.prototype.animationFinished = function() {
	this.inAnimation = false;
}

// Get
Word.prototype.getX = function() { return this.x; }
Word.prototype.getY = function() { return this.y; }
Word.prototype.getWidth = function() { return this.font.group.getWidth(); }
// Set
Word.prototype.setX = function(data) { this.x = data; }
Word.prototype.setY = function(data) { this.y = data; }

/**********************
	Groupe Kinetic en fonction de la police
***********************/

function Word_DemiHaut(data) {
	this.up = new Kinetic.Text({
		y: rct.police[data.police].offset.up,
		text: data.value,
		fontSize: data.fontSize,
		fontFamily: rct.police[data.police].name.up,
		fill: data.color,
	});

	this.down = new Kinetic.Text({
		y: rct.police[data.police].offset.down,
		text: data.value,
		fontSize: data.fontSize,
		fontFamily: rct.police[data.police].name.down,
		fill: data.color,
	});
	
	this.next_down = new Kinetic.Text({
		y: rct.police[data.police].offset.down,
		text: data.next_down,
		fontSize: data.fontSize,
		fontFamily: rct.police[data.police].name.down,
		fill: data.color,
		opacity: 0,
	});
	
	this.group = new Kinetic.Group({
		width: this.up.getWidth(),
	});
	
	this.group.add(this.up);
	this.group.add(this.down);
	this.group.add(this.next_down);
	
	/* DEBUG 
	this.debug_up = new Kinetic.Rect({
		x: this.up.getX(),
		y: this.up.getY(),
		width: this.up.getWidth(),
		height: this.up.getHeight(),
		fill: "#0F0",
		opacity: 0.2,
	});
	this.debug_down = new Kinetic.Rect({
		x: this.down.getX(),
		y: this.down.getY(),
		width: this.down.getWidth(),
		height: this.down.getHeight(),
		fill: "#00F",
		opacity: 0.2,
	});

	this.group.add(this.debug_up);
	this.group.add(this.debug_down);
	//*/
}
