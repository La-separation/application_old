/*
 * Logo de la Separation
 */
function Logo() {
	this.group = null; // Groupe Kinetic
	this.border = Math.floor(screenHeight / 40); // Largeur des lignes du logo (~20)
	
	this.width = 12 * this.border; // Largeur du logo
	this.height = 12 * this.border; // Hauteur du logo
	
	this.x = 0; // Position x
	this.y = 0; // Position y
	
	LogoConstruct(this);
}

LogoConstruct = function(logo) {
	logo.generate();
	logo.setCenterXY(screenWidth / 2, screenHeight / 2); // Par défaut on centre le logo
}

Logo.prototype.generate = function() {
	var border = this.border;
	var radius = 6 * border;
	var x = 6 * border;
	var y = 6 * border;
	var line_width = 9 * border;
	
	this.arc_up = new Kinetic.Shape({
		drawFunc: function(canvas) {
			var ctx = canvas.getContext();
			ctx.beginPath();
			ctx.arc(x, y - border / 2, radius, Math.PI, 0);
			canvas.stroke(this);
		},
		stroke: '#FFF',
		strokeWidth: border,
    });
	
	this.arc_down = new Kinetic.Shape({
		drawFunc: function(canvas) {
			var ctx = canvas.getContext();
			ctx.beginPath();
			ctx.arc(x, y + border / 2, radius, 0, Math.PI);
			canvas.stroke(this);
		},
		stroke: '#FFF',
		strokeWidth: border,
    });
	
	this.central_line = new Kinetic.Line({
		points: [x - line_width / 2, y, x + line_width / 2, y],
		stroke: "#FFF",
		strokeWidth: border,
    });
	
	this.group = this.group = new Kinetic.Group({
		width: border * 12,
		height: border * 12,
		offsetX: border * 6,
		offsetY: border * 6,
	});
	
	this.group.add(this.arc_up);
	this.group.add(this.arc_down);
	this.group.add(this.central_line);
	
	this.destroy = function() {
		this.arc_up.destroy();
		this.arc_down.destroy();
		this.central_line.destroy();
		this.group.destroy();
	}
}

Logo.prototype.display = function(layer) {
	this.group.setX(this.getX());
	this.group.setY(this.getY());
	
	layer.add(this.group);
}

Logo.prototype.animateIntro = function() {
	this.rotation90 = new Kinetic.Tween({
		node: this.getNode(),
		rotationDeg: 90,
		easing: Kinetic.Easings.EaseInOut,
		duration: 2,
		// onFinish: effects_dark,
	});
	
	this.rotation90.play();
}


// Set
Logo.prototype.setCenterXY = function(x, y) {
	this.x = x;// - this.getWidth() / 2;
	this.y = y;// - this.getHeight() / 2;
}
// Get
Logo.prototype.getX = function() { return this.x; }
Logo.prototype.getY = function() { return this.y; }
Logo.prototype.getWidth = function() { return this.width; }
Logo.prototype.getHeight = function() { return this.height; }
Logo.prototype.getNode = function() { return this.group; }

scriptLoaded('scripts/libs/separation_toolkit/logo/logo.js');