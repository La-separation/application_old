/*
 * Geste qui détecte la déchirure d'un mot (coupure à deux doigts)
 *
 * @param {Object} paramètres pour dessiner le rectangle : taille du rectangle, placement du rectangle
 * @param {Text} type de coupure : "l_r" pour left to right, "r_l" pour le contraire, toutes les autres valeurs pour les deux sens
 * déclenche la fonction handler dès que la fonction repère un mouvement de déchirure
 */
Separation.tear = function(params, type){
  var rTl = 0;
  var lTr = 0;
  var x1 = 0;
  var x2 = 0;
  var oldx1 = 0;
  var oldx2 = 0;

  var section = params.width / 4;

  function inRectangle(touchPos){
    if(
      ((touchPos.x1 > params.x) && (touchPos.x1 < (params.x + params.width))) &&
      ((touchPos.x2 > params.x) && (touchPos.x2 < (params.x + params.width))) &&
      ((touchPos.y1 > params.y) && (touchPos.y1 < (params.y + params.height / 2))) &&
      ((touchPos.y2 > (params.y + params.height / 2)) && (touchPos.y2 < (params.y + params.height)))
    ){
      return true;
    } else { return false; }
  }

  function rightToLeft(handler){
    switch(rTl){
      case 0:
        if(
          (x1 > (params.x + section * 3)) &&
          (x2 > (params.x + section * 3))
        ){
          rTl = 1;
        }
        break;

      case 1:
        if((x1 < oldx1) && (x2 < oldx2)){
          if(
            ((x1 > (params.x + section * 2)) && (x1 < (params.x + section * 3))) &&
            ((x2 > (params.x + section * 2)) && (x2 < (params.x + section * 3)))
          ){
            rTl = 2;
          }
        } else { rTl = 0; }
        break;

      case 2:
        if((x1 < oldx1) && (x2 < oldx2)){
          if(
            ((x1 > (params.x + section)) && (x1 < (params.x + section * 2))) &&
            ((x2 > (params.x + section)) && (x2 < (params.x + section * 2)))
          ){
            rTl = 3;
          }
        } else { rTl = 0; }

      case 3:
        if((x1 < oldx1) && (x2 < oldx2)){
          if(
            (x1 < (params.x + section)) &&
            (x2 < (params.x + section))
          ){
            handler()
            rTl = 0;
          }
        } else { rTl = 0; }
    };
  }

  function leftToRight(handler){
    switch(lTr){
      case 0:
        if(
          (x1 < (params.x + section)) &&
          (x2 < (params.x + section))
        ){
          lTr = 1;
        }
        break;

      case 1:
        if((x1 > oldx1) && (x2 > oldx2)){
          if(
            ((x1 > (params.x + section)) && (x1 < (params.x + section * 2))) &&
            ((x2 > (params.x + section)) && (x2 < (params.x + section * 2)))
          ){
            lTr = 2;
          }
        } else { lTr = 0; }
        break;

      case 2:
        if((x1 > oldx1) && (x2 > oldx2)){
          if(
            ((x1 > (params.x + section * 2)) && (x1 < (params.x + section * 3))) &&
            ((x2 > (params.x + section * 2)) && (x2 < (params.x + section * 3)))
          ){
            rTl = 3;
          }
        } else { lTr = 0; }

      case 3:
        if((x1 > oldx1) && (x2 > oldx2)){
          if(
            (x1 > (params.x + section * 3)) &&
            (x2 > (params.x + section * 3))
          ){
            handler()
            lTr = 0;
          }
        } else { lTr = 0; }
    };
  }

  this.on = function(handler) {
    function detect_touch(event){
      event.preventDefault;

      if(event.touches[1]){
        var touch1 = 0;
        var touch2 = 1;

        if(event.touches[0].pageY < event.touches[0].pageY) {
          touch1 = event.touches[0];
          touch2 = event.touches[1];
        } else {
          touch1 = event.touches[1];
          touch2 = event.touches[0];
        }

        var touchPos = {
          x1: touch1.pageX,
          y1: touch1.pageY,
          x2: touch2.pageX,
          y2: touch2.pageY
        };

        x1 = touch1.pageX;
        x2 = touch2.pageX;

        if(inRectangle(touchPos)){
          if (type != "l_r") { rightToLeft(handler); }
          if (type != "r_l") { leftToRight(handler); }
        }

        oldx1 = x1;
        oldx2 = x2;
      }
    };

    window.addEventListener(events["touchmove"], detect_touch, false);
  }
};


scriptLoaded('scripts/libs/separation_toolkit/gesture/word_rip.js');