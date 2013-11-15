/*
	Namespace Event
*/
var Event = {};

var events = {
	tap : (appOnDevice_real() ? 'tap' : 'click'),
	touchmove : (appOnDevice_real() ? 'touchmove' : 'mousemove'),
	dbltap : (appOnDevice_real() ? 'dbltap' : 'dblclick'),
};

function getTouchPos(event) {
	return stage.getPointerPosition();
}

var old_touch_move = {x:0, y:0};
function getTouchMove(event) {
	var new_touch_move = stage.getPointerPosition();
	var coords = {
		x1: old_touch_move.x,
		y1: old_touch_move.y,
		x2: new_touch_move.x,
		y2: new_touch_move.y,
	};
	old_touch_move = new_touch_move;
	return coords;
}

Event.touchmove = function(event) {
	event.preventDefault;
	Event.cut(event);
}

Event.destroy = function(id, type) {
	if(type != undefined) {
		switch(type) {
			case 'tap' : Event.destroyTap(id); break;
			case 'dbltap' : Event.destroyDbltap(id); break;
			case 'cut' : Event.destroyCut(id); break;
			default: alert('"' + type + '" inconnu dans Event.destroy()');
		}
	}
	else {
		Event.destroyTap(id);
		Event.destroyDbltap(id);
		Event.destroyCut(id);
	}
}

Event.destroyAll = function() {
	Destroy.list(Event.tap_obj);
	Destroy.list(Event.dbltap_obj);
	Destroy.list(Event.cut_obj);
}

scriptLoaded('scripts/libs/separation_toolkit/event/event.js');