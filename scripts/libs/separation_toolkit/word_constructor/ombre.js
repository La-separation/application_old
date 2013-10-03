/*
 *  Ombre word constructor
 */
function word_ombre(params){
  var imageObj1 = new Image();
  imageObj1.src = params.img1;
  var imageObj2 = new Image();
  imageObj2.src = params.img2;

  this.img_a = new Kinetic.Image({
	image: imageObj1
  });
  var imga = this.img_a;
  imageObj1.onload = function() {
	imga.setHeight(demiSize);
	imga.setWidth((demiSize * this.width) / this.height);
	mainLayer.draw();
  };

  this.img_b = new Kinetic.Image({
    image: imageObj2,
    opacity: 0
  });
  var imgb = this.img_b;
  imageObj2.onload = function() {
	imgb.setHeight(demiSize);
	imgb.setWidth((demiSize * this.width) / this.height);
	mainLayer.draw();
  };

  this.group = new Kinetic.Group({
    x: params.x,
    y: params.y
  });

  this.group.add(this.img_a);
  this.group.add(this.img_b);

};
