
/*
 * détecter des mouvements horizontaux
 *
 * @param {Object} paramètres pour dessiner le rectangle : taille du rectangle, placement du rectangle
 * fonction utilisée pour coder cut et rub
 */
Separation.horizontal_move = function(params){
	var rTl = 0;
	var lTr = 0;
	var x = 0;
	var oldx = 0;
	var active = false;

	var section = params.width / 4;

	function inRectangle(touchPos) {
		if(
			((touchPos.x > params.x) && (touchPos.x < (params.x + params.width))) &&
			((touchPos.y > params.y) && (touchPos.y < (params.y + params.height)))
		) {
			return true;
		} else { return false; }
	}

	this.rightToLeft = function(handler) {
		switch(rTl) {
			case 0:
			if(x > (params.x + section * 3)) {
				rTl = 1;
			}
			break;

			case 1:
			if(x < oldx) {
				if((x > (params.x + section * 2)) && (x < (params.x + section * 3))) {
					rTl = 2;
					//sound_stop('cut');
					//sound_play('cut');
				}
			} else { rTl = 0; }
			break;

			case 2:
			if(x < oldx) {
				if((x > (params.x + section)) && (x < (params.x + section * 2))){
					rTl = 3;
				}
			} else { rTl = 0; }
			break;

			case 3:
			if(x < oldx) {
				if(x < (params.x + section)) {
					handler();
					rTl = 0;
				}
			} else { rTl = 0; }
			break;
		};
	}

	this.leftToRight = function(handler) {
		switch(lTr){
			case 0:
			if(x < params.x + section){
				lTr = 1;
			}
			break;

			case 1:
			if(x > oldx){
				if((x > (params.x + section)) && (x < (params.x + section * 2))){
					lTr = 2;
				}
			} else { lTr = 0; }
			break;

			case 2:
			if(x > oldx) {
				if((x > (params.x + section * 2)) && (x < (params.x + section * 3))){
					lTr = 3;
				}
			} else { lTr = 0; }
			break;

			case 3:
			if(x > oldx) {
				if(x > params.x + section * 3) {
					handler();
					lTr = 0;
				}
			} else { lTr = 0; }
			break;
		};
	}

	this.on = function(handler) {
		// touch event
		active = true;
		function detect_touch(event) {
			if(active)
			{
				event.preventDefault;

				touchPos = getTouchPos(event);

				x = touchPos.x;

				if(inRectangle(touchPos) == true){
					handler();
				}
				else {
					rTl = 0;
					lTr = 0;
				}

				oldx = x;
			}
		};

		stage.on(events['touchmove'], detect_touch);
	}
  
	this.off = function() {
		active = false;
	}
}


scriptLoaded('scripts/libs/separation_toolkit/gesture/horizontal_move.js');