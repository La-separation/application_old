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

scriptLoaded('scripts/recit/word_kinetic.js');