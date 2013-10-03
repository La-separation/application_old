/*
 *  Centrale word constructor
 */
function word_centrale(params){
  this.haut = new Kinetic.Text({
    text: params.mot1,
    fontSize:  params.fontSize,
    fontFamily: 'CentraleH',
    fill: params.fill
  });

  this.center_a = new Kinetic.Text({
    text: params.mot1,
    fontSize:  params.fontSize,
    fontFamily: 'CentraleC',
    fill: params.fill
  });

  this.center_b = new Kinetic.Text({
    text: params.mot2,
    fontSize:  params.fontSize,
    fontFamily: 'CentraleC',
    fill: params.fill,
  });

  this.bas = new Kinetic.Text({
    text: params.mot1,
    fontSize:  params.fontSize,
    fontFamily: 'CentraleB',
    fill: params.fill
  });

  this.center_a.setPosition({
    y: this.haut.getHeight() - 0.5 * params.fontSize
  });
  this.center_b.setPosition({
    x: - stage.getWidth(),
    y: this.haut.getHeight() - 0.5 * params.fontSize
  });
  this.bas.setPosition({
    y: this.haut.getHeight() + this.center_a.getHeight() - 1.1 * params.fontSize
  });

  this.group = new Kinetic.Group({
    x: params.x,
    y: params.y,
    width: this.haut.getWidth(),
    height: this.haut.getHeight() + this.center_a.getHeight() + this.bas.getHeight() - 1.1 * params.fontSize
  });

  this.group.add(this.haut);
  this.group.add(this.center_a);
  this.group.add(this.center_b);
  this.group.add(this.bas);

};
