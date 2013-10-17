/*
 *  Tweens for opacity settings
 */
function node_set_opacity(node, opacity){
  var tween = new Kinetic.Tween({
    node: node,
    duration: 1,
    opacity: opacity
  });
  tween.play();
};

function node_dark(node){ node_set_opacity(node, 0.25); };

function node_light(node){ node_set_opacity(node, 1); };


scriptLoaded('scripts/libs/separation_toolkit/opacity.js');