/*** TEMP ***/

function Word_ombre(data) {
	
	this.group = new Kinetic.Group({
		width: 771/4,
		height: 267/4,
		y: data.cst.police[data.police].offset,
	});

	this.group.add(CYGNE);
	this.group.add(OMBRE);
	
	this.destroy = function() {
		// this.group.destroy();
	}
}

var imgs = new Array();
imgs[0] = new Image();
imgs[1] = new Image();

var CYGNE = null;
var OMBRE = null;

if(appOnDevice()) {
	var path = location.pathname;
	var tab = path.split("/");
	imgs[0].src = path.replace(tab[tab.length-1], "imgs/aide/OMBRE.jpg");
	imgs[1].src = path.replace(tab[tab.length-1], "imgs/aide/CYGNE.jpg");
}
else {
	imgs[0].src = "imgs/aide/OMBRE.jpg";
	imgs[1].src = "imgs/aide/CYGNE.jpg";
}

this.group = new Kinetic.Group({
	width: 771,
	height: 267,
});
var group_kinetic = this.group;

imgs[0].onload = function() {
	OMBRE = new Kinetic.Image({
		image: imgs[0],
		width: 771/4,
		height: 267/4,
		y: -12,
	});
}
imgs[1].onload = function() {
	CYGNE = new Kinetic.Image({
		image: imgs[1],
		width: 771/4,
		height: 267/4,
		y: -12,
		opacity: 0,
	});
}

scriptLoaded('scripts/libs/separation_toolkit/word_kinetic/ombre.js');
