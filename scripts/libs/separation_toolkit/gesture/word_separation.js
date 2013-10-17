/*
 * Geste qui détecte la séparation d'un mot
 *
 * @param {Object} paramètres pour dessiner le rectangle : taille du rectangle, placement du rectangle
 * @param {Text} type de coupure : "l_r" pour left to right, "r_l" pour le contraire, toutes les autres valeurs pour les deux sens
 * déclenche la fonction handler dès que la fonction repère un mouvement de coupure
 * faire attention à définir la fonction après les autres variables pour que le rectangle soit au premier plan
 */
Separation.cut = function(params, type){
	var detect = new Separation.horizontal_move(params);

	this.on = function(handler) {
		detect.on(function(){
			if (type != 'lTr') {detect.rightToLeft(handler);}
			if (type != 'rTl') {detect.leftToRight(handler);}
		});
	}
};

Separation.tap = function(params, word){
	

  function inRectangle(touchPos){
    if(
      ((touchPos.x > params.x) && (touchPos.x < (params.x + params.width))) &&
      ((touchPos.y > params.y) && (touchPos.y < (params.y + params.height)))
    ){
      return true;
    } else { return false; }
  }

	this.on = function(handler){
		// touch event
		
		function detect_tap(event){
			event.preventDefault;

			myEvent(event);
			alert(touchPos.x + ',' + touchPos.y);

			if(inRectangle(touchPos) == true){
				handler(word);
			}
		};

			window.addEventListener(events['tap'], detect_tap, false);
		}
	}


scriptLoaded('scripts/libs/separation_toolkit/gesture/word_separation.js');