function Word_coupable_entier(data) {

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

scriptLoaded('scripts/libs/separation_toolkit/word_kinetic/coupable_entier.js');
