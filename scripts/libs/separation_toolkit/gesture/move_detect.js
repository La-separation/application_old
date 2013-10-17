/*
 * Detecter si un mouvement est sur une zone
 *
 * @param {Object} pamètres pour dessiner le rectangle
 * renvoie vrai si le toucher est dans le rectangle, et faux sinon
 */
Separation.onZone = function(params){
  function inRectangle(touchPos){
    if(
      ((touchPos.x > (params.x)) && (touchPos.x < (params.x + params.width))) &&
      ((touchPos.y > (params.y)) && (touchPos.y < (params.y + params.height)))
    ){
      return true;
    } else { return false; }
  }

  this.on = function(handler){
    function detect_touch(event){
      var touchPos = {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY
      }

      if(!inRectangle(touchPos)){ handler() };

    }

    window.addEventListener(events['touchmove'], detect_touch, false);
  }
};

Separation.onCorner = function(){
  var lines = stage.getHeight() / 6;
  var cols = stage.getWidth() / 10;

  var detect = new Separation.onZone({
    x: cols,
    y: lines,
    width: 8*cols,
    height: 4*lines
  });

  this.on = function(handler){
    detect.on(handler);
  }
};


scriptLoaded('scripts/libs/separation_toolkit/gesture/move_detect.js');