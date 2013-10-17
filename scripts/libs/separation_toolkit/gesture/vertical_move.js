/*
 * détecter des mouvements verticaux
 *
 * @param {Object} paramètres pour dessiner le rectangle : taille du rectangle, placement du rectangle
 * fonction utilisée pour scroll
 */
Separation.vertical_move = function(params){
  var tTd = 0;
  var dTt = 0;
  var y = 0;
  var oldy = 0;

  var section = params.height / 6;

  function inRectangle(touchPos){
    if(
      ((touchPos.x > params.x) && (touchPos.x < (params.x + params.width))) &&
      ((touchPos.y > params.y) && (touchPos.y < (params.y + params.height)))
    ){
      return true;
    } else { return false; }
  }

  this.topToDown = function(handler){
    switch(tTd){
      case 0:
        if(y < (params.y + section * 4)){
          tTd = 1;
        }
        break;

      case 1:
        if(y > oldy){
          if((y > (params.y + section * 1)) && (y < (params.y + section * 5))){
            tTd = 2;
          }
        } else { tTd = 0; }
        break;

      case 2:
        if(y > oldy){
          if((y > (params.y + section*2)) && (y < (params.y + section * 6))){
            handler();
			tTd = 0;
          }
        } else { tTd = 0; }
        break;
    };
  }

  this.downToTop = function(handler){
    switch(dTt){
      case 0:
        if((y < (params.y + section * 6)) && (y > (params.y + section * 2))){
          dTt = 1;
        }
        break;

      case 1:
        if(y < oldy){
          if((y < (params.y + section * 5)) && (y > (params.y + section))){
            dTt = 2;
          }
        } else { dTt = 0; }
        break;

      case 2:
        if(y < oldy){
          if((y < (params.y + section * 4)) && (y > params.y)){
            handler();
			dTt = 0;
          }
        } else { dTt = 0; }
        break;
    };
  }

  this.on = function(handler){
    // touch event
    function detect_touch(event){
      event.preventDefault;

      var touchPos = {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY
      }

      y = touchPos.y;

      if(inRectangle(touchPos) == true){
        handler()
      }
      else {
        tTd = 0;
        dTt = 0;
      }

      oldy = y;

    };
    window.addEventListener(events['touchmove'], detect_touch, false);
  }
}


scriptLoaded('scripts/libs/separation_toolkit/gesture/vertical_move.js');