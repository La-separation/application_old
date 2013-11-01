var word_active = false;
var fontSize = '24px';

/**
	Class Word
*/
function Word(value, next_value, police, code) {	
	this.x = 0; // Position x en pixel
	this.y = 0; // Position y en pixel
	
	this.size = 24; // Taille de la police en pixel
	this.cst = fontConst[fontSize]; // Constantes en fonction de la taille
	
	this.police = ((police == undefined) || (police == null)) ? this.cst.police.name : police; // Police
	this.fontSize = this.cst.car.size; // Hauteur du mot en pixel
	this.color = this.cst.car.color; // Couleur
	
	this.value = value; // Valeur du mot actuel
	this.next_value = ((next_value == undefined) || (next_value == null)) ? value : next_value; // Valeur du mot après transformation
	this.code = ((code == undefined) || (code == null)) ? value : code; // Code du mot
	this.font = null; // Groupe Kinetic qui sera affiché
	this.animation = null; // Fonction de callback pour l'animation ('Animation.x')
	this.inAnimation = false; // Boolen pour savoir si le mot est entrain d'être animer
	
	this.active = false; // Booléen pour savoir si il est mis en avant
	this.zoomOnActive = true; // Active ou désactive le zoom/dezoom lors de l'activation
	this.activeX = 0; // Coordonnée X du mot quand il est activé
	this.activeY = 0; // Coordonnée Y du mot quand il est activé
	this.scale = 1; // Zoom de la police (100% = 1)
	
	this.gesture = null;
	
	this.list_done = new Array(); // Liste des fonctions à appeler quand une fonction est terminée
	
	WordConstruct(this);
}

/*
	Constructeur
*/
function WordConstruct(word) {
	word.generate();
}

Word.prototype.done = function(fct_done) {
	if(this.list_done[fct_done] != undefined)
		this.list_done[fct_done]();
}

Word.prototype.generate = function() {
	var opacity = 1;
	
	if(this.font != null) {
		opacity = this.getOpacity();
		this.font.destroy();
	}
	
	if(this.getCode() != this.getValue()) {
		var new_code = convertCode(this.getCode(), this.getPolice());
		var new_value = convertValue(this.getValue(), new_code, this.getPolice());
		var new_next_value = convertValue(this.getNextValue(), new_code, this.getPolice());
	}
	else {
		var new_code = this.getCode();
		var new_value = this.getValue();
		var new_next_value = this.getNextValue();
	}
	
	switch(this.police)
	{
		case 0:
		case 5:
			this.font = new Word_DemiHaut({
				value: new_value,
				next_value: new_next_value,
				code: new_code,
				fontSize: this.fontSize,
				police: this.police,
				color: this.color,
				cst: this.cst,
			});
		break;
		case 1:
			this.font = new Word_DemiBas({
				value: new_value,
				next_value: new_next_value,
				code: new_code,
				fontSize: this.fontSize,
				police: this.police,
				color: this.color,
				cst: this.cst,
			});
		break;
		case 2:
			this.font = new Word_Centrale({
				value: this.value,
				next_value: this.next_value,
				code: this.code,
				fontSize: this.fontSize,
				police: this.police,
				color: this.color,
				cst: this.cst,
			});
		break;
		case 4:
			this.font = new Word_DemiHautEntier({
				value: new_value,
				fontSize: this.fontSizes,
				police: this.police,
				color: this.color,
				cst: this.cst,
			});
		break;
		default:
			alert('Police inconnue : ' + this.police + ' dans la fonction Word.generate()');
		break;
	}
	this.font.group.setScaleX(this.scale);
	this.font.group.setScaleY(this.scale);
	this.font.group.setOpacity(opacity);
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
	
	this.done('animate');
}

Word.prototype.animationFinished = function() {
	this.inAnimation = false;
	var temp = this.next_value;
	this.next_value = this.value;
	this.value = temp;
	
	this.generate();
	this.display(mainLayer);
	
	this.activeDbltap();
	this.done('animationFinished');
}

Word.prototype.setAnimation = function(type) {
	switch(this.police) {
		case 0:
		case 5:
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
		case 2:
			if(type == 'rTl')
				this.animation = Animation.centraleCutLeft;
			else
				this.animation = Animation.centraleCutRight;
		break;
		default:
			alert('Police inconnue : ' + this.police + ' dans la fonction Word.setAnimation()');
		break;
	}
}

// Fonctions pour la gestuelle
Word.prototype.addGesture = function() {
	switch(this.police)
	{
		case 0:
		case 1:
		case 2:
		case 5:
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
			alert('Police inconnue : ' + this.police + ' dans la fonction Word.addGesture()');
		break;
	}
}

Word.prototype.removeGesture = function() {
	switch(this.police)
	{
		case 0:
		case 1:
		case 2:
		case 5:
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
	
	var word = this;
	
	new Kinetic.Tween({
		node: this.font.group,
		scaleX: 1,
		scaleY: 1,
		x: this.getX(),
		y: this.getY(),
		duration: Word_cst.duration.zoomout,
		onFinish: function() { word.done('zoomOut') },
	}).play();
}

// Get
Word.prototype.getX = function() { if(!this.active) return this.x; else return this.activeX; }
Word.prototype.getY = function() { if(!this.active) return this.y; else return this.activeY; }
Word.prototype.getCenterX = function() { return this.getX() - this.getWidth() / 2; }
Word.prototype.getCenterY = function() { return this.getY() - this.getHeight() / 2; }
Word.prototype.getOffsetX = function() { return this.font.group.getOffsetX(); }
Word.prototype.getOffsetY = function() { return this.font.group.getOffsetY(); }
Word.prototype.getWidth = function() { return this.font.group.getWidth() * this.scale; }
Word.prototype.getHeight = function() { return this.cst.car.height * this.scale; }
Word.prototype.getScale = function(data) { return this.scale; }
Word.prototype.getValue = function(data) { return this.value; }
Word.prototype.getNextValue = function(data) { return this.next_value; }
Word.prototype.getPolice = function(data) { return this.police; }
Word.prototype.getCode = function(data) { return this.code; }
Word.prototype.getNode = function(data) { return this.font.group; }
Word.prototype.getNodeUp = function(data) { return this.font.up; } // Police coupable
Word.prototype.getNodeDown = function(data) { return this.font.down; } // Police coupable
Word.prototype.getOpacity = function(data) { return this.font.up.getOpacity(); }
// Set
Word.prototype.setX = function(data) { this.x = data; }
Word.prototype.setY = function(data) { this.y = data; }
Word.prototype.setXY = function(data, data2) { this.setX(data); this.setY(data2); }
Word.prototype.setCenterX = function(data) { this.setX(data - this.getWidth() / 2); }
Word.prototype.setCenterY = function(data) { this.setY(data - this.getHeight() / 2); }
Word.prototype.setCenterXY = function(data, data2) { this.setCenterX(data); this.setCenterY(data2); }
Word.prototype.setValue = function(data) { this.value = data; }
Word.prototype.setNextValue = function(data) { this.next_value = data; }
Word.prototype.setCode = function(data) { this.code = data; }
Word.prototype.setPolice = function(data) { this.police = data; }
Word.prototype.setZoomOnActive = function(data) { this.zoomOnActive = data; }
Word.prototype.setDone = function(fct_done, handler) { this.list_done[fct_done] = handler; }
Word.prototype.setScale = function(data) {
	this.scale = data;
	
	this.activeX = (screenWidth - this.getWidth()) / 2;
	this.activeY = (screenHeight - this.getHeight()) / 2;
}

scriptLoaded('scripts/libs/separation_toolkit/word/word.js');
