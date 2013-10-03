/*
 *  Demihaut word constructor
 */
function word_demihaut(params){
  this.haut = new Kinetic.Text({
    text: params.mot1,
    fontSize: params.fontSize,
    fontFamily: 'DemiHautH',
    fill: params.fill
  });

  this.bas_a = new Kinetic.Text({
	text: params.mot1,
    fontSize: params.fontSize,
    fontFamily: 'DemiHautB',
    fill: params.fill
  });

  this.bas_b = new Kinetic.Text({
	x : - stage.getWidth(),
    text: params.mot2,
    fontSize: params.fontSize,
    fontFamily: 'DemiHautB',
    fill: params.fill
  });

  this.bas_a.setY( this.haut.getHeight() - (0.1*params.fontSize) );
  this.bas_b.setY( this.haut.getHeight() - (0.1*params.fontSize) );

  this.group = new Kinetic.Group({
    x: params.x,
    y: params.y,
    width: this.haut.getWidth(),
    height: this.haut.getHeight() + this.bas_a.getHeight() - 0.1 * params.fontSize
  });

  this.group.add(this.haut);
  this.group.add(this.bas_a);
  this.group.add(this.bas_b);

};

function word_demibas(params){
  this.bas = new Kinetic.Text({
    text: params.mot1,
    fontSize:  params.fontSize,
    fontFamily: 'DemiBasB',
    fill: params.fill
  });

  this.haut_a = new Kinetic.Text({
    text: params.mot1,
    fontSize:  params.fontSize,
    fontFamily: 'DemiBasH',
    fill: params.fill
  });

  this.haut_b = new Kinetic.Text({
	x : - stage.getWidth(),
    text: params.mot2,
    fontSize:  params.fontSize,
    fontFamily: 'DemiBasH',
    fill: params.fill
  });

  this.bas.setY( this.haut_a.getHeight() - (0.1*params.fontSize) );

  this.group = new Kinetic.Group({
    x: params.x,
    y: params.y,
    width: this.bas.getWidth(),
    height: this.bas.getHeight() + this.haut_a.getHeight() - 0.1 * params.fontSize
  });

  this.group.add(this.bas);
  this.group.add(this.haut_a);
  this.group.add(this.haut_b);

};
