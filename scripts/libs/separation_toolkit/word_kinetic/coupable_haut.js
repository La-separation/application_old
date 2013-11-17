function Word_coupable_haut(data) {
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
}

scriptLoaded('scripts/libs/separation_toolkit/word_kinetic/coupable_haut.js');
