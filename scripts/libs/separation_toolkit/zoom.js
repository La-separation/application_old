/*
 *  Tweens for zooming
 */
function node_set_zoom(node, new_x, new_y, zoom){
  var tween = new Kinetic.Tween({
    node: node,
    duration: 1,
    scaleX: zoom,
    scaleY: zoom,
    x: new_x,
    y: new_y
  });
  tween.play();
};

function node_zoom(node, zoom){
	var x = ((screenWidth/2) - ( (node.getWidth()/2) + ((node.getWidth()*zoom)/2) ) );
	var y = ((screenHeight/2) - ( (node.getHeight()/2) + ((node.getHeight()*zoom)/2) ) );
	node_set_zoom(node, x, y, zoom);
};

function node_unzoom(node, x, y){ node_set_zoom(node, x, y, 1); };


scriptLoaded('scripts/libs/separation_toolkit/zoom.js');