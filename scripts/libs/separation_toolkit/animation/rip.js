/*
 *  Animation associated to tear movement
 */
Separation.tear_animation = function(tear_word){
  var shape_position = tear_word.group.getPosition();

  var dechirer = new Separation.cut({
    x: shape_position.x,
    y: shape_position.y,
    width: shape_position.width,
    height: shape_position.height
  });

  var sens = true; // quel mot doit-on faire apparaitre
  var enable = false;

  function animation_tear(node1, node2){
    var tween1 = new Kinetic.Tween({
      node: node1,
      duration: 3,
      easing: Kinetic.Easings.StrongEaseInOut,
      offsetX: stage.getWidth() / 4,
      scaleX: 0
    })
    tween1.play();

    var tween2 = new Kinetic.Tween({
      node: node2,
      duration: 3,
      easing: Kinetic.Easings.StrongEaseInOut,
      offsetX: 0,
      scaleX: 1
    })
    setTimeout(function(){
      tween2.play();
    }, 400)

    setTimeout(function(){
      tween1.finish();
      tween2.finish();

      node1.setAttrs({
        offsetX: - stage.getWidth()/4
      });
    }, 2000);
  }

  this.start = function(){ enable = true; };

  this.stop = function(){ enable = false; };

  this.play = function(lock){
    dechirer.on(function(){
      if(enable == true){
		sound_play("tear");

        if(sens == true){
          animation_tear(tear_word.center_a, tear_word.center_b);
          sens = false;
        } else {
          animation_tear(tear_word.center_b, tear_word.center_a);
          sens = true;
        }
      }
    });
  }
}
