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

Event.destroy = function(id, type) {
	if(type != undefined) {
		switch(type) {
			case 'tap' : Event.destroyTap(id); break;
			case 'dbltap' : Event.destroyDbltap(id); break;
			default: alert('"' + type + '" inconnu dans Event.destroy()');
		}
	}
	else {
		Event.destroyTap(id);
		Event.destroyDbltap(id);
	}
}

Event.destroyAll = function() {
	Destroy.list(Event.tap_obj);
	Destroy.list(Event.dbltap_obj);
}

scriptLoaded('scripts/libs/separation_toolkit/event/event.js');