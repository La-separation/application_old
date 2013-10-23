var word_active = false;
var fontSize = '24px';

/**
	Class Word
*/
function Word(value, next_value, police) {
	this.x = 0; // Position x en pixel
	this.y = 0; // Position y en pixel
	
	this.size = 24; // Taille de la police en pixel
	this.cst = fontConst[fontSize]; // Constantes en fonction de la taille
	
	this.police = ((police == undefined) || (police == null)) ? this.cst.police.name : police; // Police
	this.fontSize = this.cst.car.size; // Hauteur du mot en pixel
	this.color = this.cst.car.color; // Couleur
	
	this.value = value; // Valeur du mot actuel
	this.next_value = ((next_value == undefined) || (next_value == null)) ? value : next_value; // Valeur du mot après transformation
	this.font = null; // Groupe Kinetic qui sera affiché
	this.animation = null; // Fonction de callback pour l'animation ('Animation.x')
	this.inAnimation = false;
	
	this.active = false; // Booléen pour savoir si il est mis en avant
	this.zoomOnActive = true;
	this.activeX = 0;
	this.activeY = 0;
	this.scale = 1; // Zoom de la police (100% = 1)
	
	this.gesture = null;
	
	WordConstruct(this);
}

/*
	Constructeur
*/
function WordConstruct(word) {
	word.generate();
}

Word.prototype.generate = function() {
	if(this.font != null) {
		this.font.destroy();
	}
	
	switch(this.police)
	{
		case 0:
			this.font = new Word_DemiHaut({
				value: this.value,
				next_value: this.next_value,
				fontSize: this.fontSize,
				police: this.police,
				color: this.color,
				cst: this.cst,
			});
		break;
		case 1:
			this.font = new Word_DemiBas({
				value: this.value,
				next_value: this.next_value,
				fontSize: this.fontSize,
				police: this.police,
				color: this.color,
				cst: this.cst,
			});
		break;
		default:
			alert('Police inconnue : ' + this.police);
		break;
	}
	this.font.group.setScaleX(this.scale);
	this.font.group.setScaleY(this.scale);
}

Word.prototype.display = function(layer) {
	this.font.group.setX(this.getX());
	this.font.group.setY(this.getY());

	layer.add(this.font.group);
}

Word.prototype.animate = function() {
	if(!this.inAnimation && (!word_active || this.active))
	{
		this.inAnimation = true;
		this.animation(this);
		this.disableDbltap();
	}
}

Word.prototype.animationFinished = function() {
	this.inAnimation = false;
	var temp = this.next_value;
	this.next_value = this.value;
	this.value = temp;
	
	this.generate();
	this.display(mainLayer);
	
	this.activeDbltap();
}

Word.prototype.setAnimation = function(type) {
	switch(this.police) {
		case 0:
			if(type == 'rTl')
				this.animation = Animation.downCutLeft;
			else
				this.animation = Animation.downCutRight;
		break;
		case 1:
			if(type == 'rTl')
				this.animation = Animation.upCutLeft;
			else
				this.animation = Animation.upCutRight;
		break;
		default:
			alert('Police inconnue : ' + this.police);
		break;
	}
}

// Fonctions pour la gestuelle
Word.prototype.addGesture = function() {
	switch(this.police)
	{
		case 0:
		case 1:
			var word = this;
			this.gesture = new Array();
			this.gesture[0] = new Separation.cut({
				x: this.getX() - this.getWidth() / 4,
				y:	this.getY() - this.getHeight() / 2,
				width: this.getWidth() * 1.5,
				height: this.getHeight() * 2,
			}, 'lTr');
			this.gesture[0].on(function(){
				word.setAnimation('lTr');
				word.animate();
			});
			this.gesture[1] = new Separation.cut({
				x: this.getX() - this.getWidth() / 4,
				y:	this.getY() - this.getHeight() / 2,
				width: this.getWidth() * 1.5,
				height: this.getHeight() * 2,
			}, 'rTl');
			this.gesture[1].on(function(){
				word.setAnimation('rTl');
				word.animate();
			});
		break;
		default:
			alert('Police inconnue : ' + this.police);
		break;
	}
}

Word.prototype.removeGesture = function() {
	switch(this.police)
	{
		case 0:
		case 1:
			this.gesture[0].off();
			this.gesture[1].off();
		break;
	}
	this.gesture = new Array();
}

Word.prototype.onTap = function(handler) {
	this.tap = new Kinetic.Rect({
		listening : true,
		x: this.getX(),
		y: this.getY(),
		width: this.getWidth(),
		height: this.getHeight(),
		opacity: 0,
	});
	var word = this;	
	this.tap.on(events['tap'], function(){
		if(!word_active)
			handler(word);
	});
	actionLayer.add(this.tap);
}

Word.prototype.activeOnTap = function() {
	if(this.value != this.next_value) {
		this.onTap(function(word){
			word.activate();
		});
	}
}
	
// Fonctions de mise en avant
Word.prototype.activate = function() {
	this.active = true;
	word_active = true;
	
	var all_words = this.font.group.getParent().getChildren();
	for(var i = 0; i < all_words.length ; i++)
	{
		if(all_words[i] != this.font.group) { 
			Effects.setDark(all_words[i]); 
		}
	}

	if(this.zoomOnActive) {
		this.zoom(Word_cst.zoom.recit);
	}
	else
		this.setScale(this.scale);
	
	this.addGesture();
	
	this.activeDbltap();
}

Word.prototype.activeDbltap = function() {
	var word = this;
	stage.on(events['dbltap'], function() {
		word.disable();
	});
}

Word.prototype.disableDbltap = function() {
	stage.off(events['dbltap']);
}

Word.prototype.disable = function() {
	this.active = false;
	word_active = false;
	this.removeGesture();
	
	var all_words = this.font.group.getParent().getChildren();
	for(var i = 0; i < all_words.length ; i++)
	{
		if(all_words[i] != this.font.group) { 
			Effects.setLight(all_words[i]);
		}
	}
	
	if(this.zoomOnActive) {
		this.zoomOut();
	}
	this.disableDbltap();
}

Word.prototype.setZoom = function(data) {
	this.setScale(data);
	this.font.group.setScaleX(data);
	this.font.group.setScaleY(data);
}

Word.prototype.zoom = function(scaleTo) {
	this.setScale(scaleTo);
	
	new Kinetic.Tween({
		node: this.font.group,
		scaleX: scaleTo,
		scaleY: scaleTo,
		x: this.getX(),
		y: this.getY(),
		duration: Word_cst.duration.zoom,
	}).play();
}
	
Word.prototype.zoomOut = function() {
	this.setScale(1);
	
	new Kinetic.Tween({
		node: this.font.group,
		scaleX: 1,
		scaleY: 1,
		x: this.getX(),
		y: this.getY(),
		duration: Word_cst.duration.zoomout,
	}).play();
}

// Get
Word.prototype.getX = function() { if(!this.active) return this.x; else return this.activeX; }
Word.prototype.getY = function() { if(!this.active) return this.y; else return this.activeY; }
Word.prototype.getWidth = function() { return this.font.group.getWidth() * this.scale; }
Word.prototype.getHeight = function() { return this.cst.car.height * this.scale; }
Word.prototype.getScale = function(data) { return this.scale; }
Word.prototype.getValue = function(data) { return this.value; }
Word.prototype.getNextValue = function(data) { return this.next_value; }
Word.prototype.getPolice = function(data) { return this.police; }
// Set
Word.prototype.setX = function(data) { this.x = data; }
Word.prototype.setY = function(data) { this.y = data; }
Word.prototype.setValue = function(data) { this.value = data; }
Word.prototype.setNextValue = function(data) { this.next_value = data; }
Word.prototype.setPolice = function(data) { this.police = data; }
Word.prototype.setCenterX = function(data) { this.x = data - this.getWidth() / 2; }
Word.prototype.setCenterY = function(data) { this.y = data - this.getHeight() / 2; }
Word.prototype.setZoomOnActive = function(data) { this.zoomOnActive = data; }
Word.prototype.setScale = function(data) {
	this.scale = data;
	
	this.activeX = (screenWidth - this.getWidth()) / 2;
	this.activeY = (screenHeight - this.getHeight()) / 2;
}

scriptLoaded('scripts/libs/separation_toolkit/word/word.js');
