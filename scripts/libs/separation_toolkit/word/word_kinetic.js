/**********************
	Groupe Kinetic en fonction de la police
***********************/

function Word_DemiHaut(data) {
	this.up = new Kinetic.Text({
		y: data.cst.police[data.police].offset.up,
		text: data.code,
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
		height: data.cst.car.height,
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
		text: data.code,
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

function Word_Centrale(data) {
	this.up = new Kinetic.Text({
		y: data.cst.police[data.police].offset.up,
		text: data.value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name.up,
		fill: data.color,
	});

	this.central = new Kinetic.Text({
		y: data.cst.police[data.police].offset.central,
		text: data.value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name.central,
		fill: data.color,
	});

	this.next_central = new Kinetic.Text({
		y: data.cst.police[data.police].offset.central,
		text: data.next_value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name.central,
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
	this.group.add(this.central);
	this.group.add(this.next_central);
	this.group.add(this.down);
	
	this.destroy = function() {
		this.up.destroy();
		this.central.destroy();
		this.next_central.destroy();
		this.down.destroy();
		this.group.destroy();
	}
	
	/* DEBUG
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
	// */
}

function Word_DemiHautEntier(data) {

	this.text = new Kinetic.Text({
		y: data.cst.police[data.police].offset,
		text: data.value,
		fontSize: data.fontSize,
		fontFamily: data.cst.police[data.police].name,
		fill: data.color,
	});
	
	this.group = new Kinetic.Group({
		width: this.text.getWidth(),
	});
	
	this.group.add(this.text);
	
	this.destroy = function() {
		this.text.destroy();
		this.group.destroy();
	}
}


scriptLoaded('scripts/libs/separation_toolkit/word/word_kinetic.js');