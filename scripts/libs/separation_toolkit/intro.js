/*
 * Toolkit for the Separation Project
 *
 * Includes the gestures and the animations
 */

function appOnDevice()	{
	return false;
}

var events = {
	tap : (appOnDevice() ? 'tap' : 'click'),
	touchmove : (appOnDevice() ? 'touchmove' : 'mousemove'),
};
var touchPos = {x:0,y:0};

function myEvent(event) {
	if(appOnDevice())
	{
		touchPos.x = event.touches[0].pageX;
		touchPos.y = event.touches[0].pageY;
	}
	else
	{
		touchPos.x = event.pageX;
		touchPos.y = event.pageY;
	}
}
/*
	* @namespace Separation
 */
var Separation = {};

/*
 * Logo de la Separation à utiliser comme on veut
 *
 * l'ajouter comme un node normal en appelant "layer.add(logo.overall)"
 * on peut modifier tous les attributs via logo.overall qui est un groupe
 */
function Logo(){
  border = 20;
  radius = 6 * border;
  x = 6 * border;
  y = 6 * border;

  function draw(){
	arc_haut = new Kinetic.Shape({
		drawFunc: function(canvas) {
			var ctx = canvas.getContext();
			ctx.beginPath();
			ctx.arc(x, y-border/2, radius, Math.PI, 0);
			canvas.stroke(this);
		},
		stroke: '#FFF',
		strokeWidth: border,
    });

	arc_bas = new Kinetic.Shape({
		drawFunc: function(canvas) {
			var ctx = canvas.getContext();
			ctx.beginPath();
			ctx.arc(x, y+border/2, radius, 0, Math.PI);
			canvas.stroke(this);
		},
		stroke: '#FFF',
		strokeWidth: border,
    });

    line = new Kinetic.Line({
      points: [x - 4.5*border, y, x + 4.5*border, y],
      stroke: "#FFF",
      strokeWidth: border,
    });
  }

  this.getWidth = function(){ return 12 * border; }
  this.getHeight = function(){ return (12*border + 0.1*y);}

  draw();

  logo_group = new Kinetic.Group({
    width: this.getWidth,
    height: this.getHeight
  });
  logo_group.add(arc_haut);
  logo_group.add(arc_bas);
  logo_group.add(line);

  logo_group.setOffset({
    x: this.getWidth()/2,
    y: this.getHeight()/2
  });

  this.arc_haut = arc_haut;
  this.arc_bas = arc_bas;
  this.line = line;
  this.overall = logo_group;
};
