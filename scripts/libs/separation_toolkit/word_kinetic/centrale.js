function Word_centrale(data) {
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
}

scriptLoaded('scripts/libs/separation_toolkit/word_kinetic/centrale.js');
