/*
	Namespace Event
*/
var Event = {};
Event.tap_callback = {};

var events = {
	tap : (appOnDevice() ? 'tap' : 'click'),
	touchmove : (appOnDevice() ? 'touchmove' : 'mousemove'),
	dbltap : (appOnDevice() ? 'dbltap' : 'dblclick'),
};

var touchPos = {x:0,y:0};

window.addEventListener(events['tap'], function() { Event.tap(event); }, false);

Event.onTap = function(id, object, handler, restart) {
	
	Event.tap_callback[id] = {
		x_start: object.getX(),
		y_start: object.getY(),
		x_end: object.getX() + object.getWidth(),
		y_end: object.getY() + object.getHeight(),
		onTap: handler,
	};
	
// alert(id);
	// alert(object.getX() + "x" + object.getY() + " ; " + object.getWidth() + "x" + object.getHeight());
}

Event.tap = function(event) {
	event.preventDefault;
	var coord = getTouchPos(event);
	// On regarde si les coordonées du 'tap' se situent dans un rectangle actif
	for(var i in Event.tap_callback) {
		if(Event.tap_callback[i] == undefined) alert(i); else
		if((Event.tap_callback[i].x_start <= coord.x) && (coord.x <= Event.tap_callback[i].x_end)) {
		if((Event.tap_callback[i].y_start <= coord.y) && (coord.y <= Event.tap_callback[i].y_end)) {
			Event.tap_callback[i].onTap();
		}}
	}
}

function getTouchPos(event) {
	var touchPos2 = {x:0,y:0};
	
	if(appOnDevice())
	{
		touchPos2.x = event.touches[0].pageX;
		touchPos2.y = event.touches[0].pageY;
	}
	else
	{
		touchPos2.x = event.pageX;
		touchPos2.y = event.pageY;
	}
	
	return touchPos2;
}

function myEvent(event) {
	if(appOnDevice())
	{
		touchPos.x = event.touches[0].pageX;
		touchPos.y = event.touches[0].pageY;
	}
	else
	{
		touchPos.x = event.pageX;
		touchPos.y = event.pageY;
	}
	
	return touchPos;
}

Event.destroy = function(type, id) {
	switch(type) {
		case 'tap':
			if(Event.tap_callback[id] != undefined) {
				// alert(Event.tap_callback[id].x_start);
				delete(Event.tap_callback[id]);
				// alert(Event.tap_callback[id].x_start);
			}
			break;
	}
}

Event.destroyAll = function() {
	Destroy.list(Event.tap_callback);
}

scriptLoaded('scripts/libs/separation_toolkit/event/event.js');