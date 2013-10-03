/*
 *  Animation associated to rub movement
 */
Separation.rub_animation = function(rub_word){
  var shape_position = rub_word.group.getPosition();

  var frotter = new Separation.rub({
    x: shape_position.x,
    y: shape_position.y,
    width: shape_position.width,
    height: shape_position.height
  });

  var sens = true; // quel mot doit-on faire apparaitre
  var enable = false;

  var velocity = 0.25; // vitesse d'effacement
  var tempo = 0; // pour ne pas réinverser l'effet tout de suite

  var new_opacity = function(){
    var op = rub_word.img_a.getOpacity()

    if(sens == true){
      if(op >= velocity){ return (op - velocity); }
      else {
        if(tempo < 10){
          tempo = tempo + 1;
          return 0;
        } else {
          tempo = 0;
          sens = false;
          return 0;
        }
      }
    } else {
      if(op <= (1 - velocity)){ return (op + velocity); }
      else {
        if(tempo < 10){
          tempo = tempo + 1;
          return 1;
        } else {
          tempo = 0;
          sens = true;
          return 1;
        }
      }
    }
  }

  this.start = function(){ enable = true; }

  this.stop = function(){ enable = false; };

  this.play = function(){
    frotter.on(function(){
      if(enable == true){
        sounds['rub'].play();

        var new_op = new_opacity();

        var tween_a = new Kinetic.Tween({
          node: rub_word.img_a,
          duration: 0,
          opacity: new_op
        });
        tween_a.play();

        var tween_b = new Kinetic.Tween({
          node: rub_word.img_b,
          duration: 0,
          opacity: 1 - new_op
        });
        tween_b.play();
      }
    });
  }
};
