/**
	Class Word
*/
function Word(value, next_value, police) {
	this.x = 0; // Position x en pixel
	this.y = 0; // Position y en pixel
	
	this.size = 24; // Taille de la police en pixel
	this.cst = fontConst['24px']; // Constantes en fonction de la taille
	
	this.police = (police == undefined) ? this.cst.police.name : police; // Police
	this.fontSize = this.cst.car.size; // Hauteur du mot en pixel
	this.color = this.cst.car.color; // Couleur
	
	this.value = value; // Valeur du mot actuel
	this.next_value = (next_value == undefined) ? value : next_value; // Valeur du mot après transformation
	this.font = null; // Groupe Kinetic qui sera affiché
	this.animation = null; // Fonction de callback pour l'animation ('Animation.x')
	this.inAnimation = false;
	
	this.active = false; // Booléen pour savoir si il est mis en avant
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
	switch(this.police)
	{
		case 'coupable_haut':
			this.font = new Word_DemiHaut({
				value: this.value,
				next_value: this.next_value,
				fontSize: this.fontSize,
				police: this.police,
				color: this.color,
				cst: this.cst,
			});
		break;
		case 'coupable_bas':
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
	var temp = this.next_value;
	this.next_value = this.value;
	this.value = temp;
	
	this.font.destroy();
	
	this.generate();
	this.display(mainLayer);
}

Word.prototype.setAnimation = function(type) {
	switch(this.police) {
		case 'coupable_haut':
			if(type == 'rTl')
				this.animation = Animation.downCutLeft;
			else
				this.animation = Animation.downCutRight;
		break;
		case 'coupable_bas':
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
		case 'coupable_haut':
		case 'coupable_bas':
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

// Fonctions de mise en avant
Word.prototype.activate = function() {
	this.active = true;
	
	var all_words = this.font.group.getParent().getChildren();
	for(var i = 0; i < all_words.length ; i++)
	{
		if(all_words[i] != this.font.group) { 
			Effects.setDark(all_words[i]); 
		}
		all_words[i].setListening(false);
	}
	
	this.zoom(Word_cst.zoom.recit);
	
	/*stage.on(events['click'], function() {
		
	});*/
}

Word.prototype.disable = function() {
	this.active = false;
	
	var all_words = this.font.group.getParent().getChildren();
	//stage.off("dbltap");
	for(var i = 0; i < all_words.length ; i++)
	{
		if(all_words[i] != this.font.group) { 
			Effects.setLight(all_words[i]);
		}
		all_words[i].setListening(true);
	}
	
	this.zoomOut();
	/*if(inTuto == true || currentStoryType == StoryType['alter']) {
		node_unzoom(wordGroup, previousPos.x, previousPos.y);
	}
	else {
		alert("story type continue");
	}*/
}

Word.prototype.zoom = function(scaleTo) {
	this.scale = scaleTo;
	
	var x = (screenWidth - this.getWidth()) / 2;
	var y = (screenHeight - this.getHeight()) / 2;
	
	new Kinetic.Tween({
		node: this.font.group,
		scaleX: scaleTo,
		scaleY: scaleTo,
		x: x,
		y: y,
		duration: Word_cst.duration.zoom,
	}).play();
}
	
Word.prototype.zoomOut = function() {
	this.scale = 1;
	
	var x = (screenWidth - this.getWidth()) / 2;
	var y = (screenHeight - this.getHeight()) / 2;
	
	new Kinetic.Tween({
		node: this.font.group,
		scaleX: 1,
		scaleY: 1,
		x: this.x,
		y: this.y,
		duration: Word_cst.duration.zoomout,
	}).play();
}

// Get
Word.prototype.getX = function() { return this.x; }
Word.prototype.getY = function() { return this.y; }
Word.prototype.getWidth = function() { return this.font.group.getWidth() * this.scale; }
Word.prototype.getHeight = function() { return this.cst.car.height * this.scale; }
// Set
Word.prototype.setX = function(data) { this.x = data; }
Word.prototype.setY = function(data) { this.y = data; }

/**********************
	Groupe Kinetic en fonction de la police
***********************/

function Word_DemiHaut(data) {
	this.up = new Kinetic.Text({
		y: data.cst.police[data.police].offset.up,
		text: data.value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name.up,
		fill: data.color,
	});

	this.down = new Kinetic.Text({
		y: data.cst.police[data.police].offset.down,
		text: data.value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name.down,
		fill: data.color,
	});
	
	this.next_down = new Kinetic.Text({
		y: data.cst.police[data.police].offset.down,
		text: data.next_value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name.down,
		fill: data.color,
		opacity: 0,
	});
	
	this.group = new Kinetic.Group({
		width: this.up.getWidth(),
	});
	
	this.group.add(this.up);
	this.group.add(this.down);
	this.group.add(this.next_down);
	
	this.destroy = function() {
		this.up.destroy();
		this.down.destroy();
		this.next_down.destroy();
		this.group.destroy();
	}
	
	// DEBUG
	if(DEBUG)
	{
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
	}
}

function Word_DemiBas(data) {
	this.up = new Kinetic.Text({
		y: data.cst.police[data.police].offset.up,
		text: data.value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name.up,
		fill: data.color,
	});
	
	this.next_up = new Kinetic.Text({
		y: data.cst.police[data.police].offset.up,
		text: data.next_value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name.up,
		fill: data.color,
		opacity: 0,
	});

	this.down = new Kinetic.Text({
		y: data.cst.police[data.police].offset.down,
		text: data.value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name.down,
		fill: data.color,
	});
	
	this.group = new Kinetic.Group({
		width: this.up.getWidth(),
	});
	
	this.group.add(this.up);
	this.group.add(this.down);
	this.group.add(this.next_up);
	
	this.destroy = function() {
		this.up.destroy();
		this.down.destroy();
		this.next_up.destroy();
		this.group.destroy();
	}
	
	// DEBUG
	if(DEBUG)
	{
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
	}
}