/*
 * Animation associated to cut movement
 */
Separation.cut_animation = function(cut_word){
  var shape_position = cut_word.group.getPosition();

  var couper = new Separation.cut({
    x: shape_position.x,
    y: shape_position.y,
    width: shape_position.width,
    height: shape_position.height
  });

  var params1 = {
    x: cut_word.bas_a.getX(),
    y: cut_word.bas_a.getY(),
    offsetX: cut_word.bas_a.getOffsetX(),
    offsetY: cut_word.bas_a.getOffsetY()
  };

  var params2 = {
    x: cut_word.bas_b.getX(),
    y: cut_word.bas_b.getY(),
    offsetX: cut_word.bas_b.getOffsetX(),
    offsetY: cut_word.bas_b.getOffsetY()
  };

  var sens = true; // quel mot doit-on faire apparaitre
  var enable = false;

  function animation_cut(node1, node2){
    var tween1 = new Kinetic.Tween({
      node: node1,
      duration: 2,
      easing: Kinetic.Easings.StrongEaseInOut,
      y: 2 * stage.getHeight()
    })
    tween1.play();

    var tween2 = new Kinetic.Tween({
      node: node2,
      duration: 2,
      easing: Kinetic.Easings.StrongEaseInOut,
      x: params1.x,
      offsetX: params1.offsetX
    })
    setTimeout(function(){
      tween2.play();
    }, 400)

    setTimeout(function(){
      tween1.finish();
      tween2.finish();

      node1.setAttrs({
        x: params2.x,
        offsetX: params2.offsetX,
        y: params2.y,
        offsetY: params2.offsetY
      });
    }, 2000);
  }

  this.start = function(){ enable = true; };

  this.stop = function(){ enable = false; };

  this.play = function(){
    couper.on(function(){
      if(enable == true){
        sound_play("cut");

        if(sens == true){
          animation_cut(cut_word.bas_a, cut_word.bas_b);
          sens = false;
        } else {
          animation_cut(cut_word.bas_b, cut_word.bas_a);
          sens = true;
        }
      }
    });
  }
}
