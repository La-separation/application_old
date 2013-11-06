/*
	Namespace Event
*/
var Event = {};
Event.tap = new Array();

Event.onTap = function(id, object, handler, restart) {
	
	Event.tap[id] = new Kinetic.Rect({
		listening : true,
		x: object.getX(),
		y: object.getY(),
		width: object.getWidth(),
		height: object.getHeight(),
		opacity: 0,
	});
	// alert(object.getX() + "x" + object.getY() + " ; " + object.getWidth() + "x" + object.getHeight());

	Event.tap[id].on(events['tap'], function(id){ return function() {
		if(!restart) {
			Event.destroy('tap', id);
		}
		sound_play('tap');
		handler();
	}(id)});
	actionLayer.add(Event.tap[id]);
}

Event.destroy = function(type, id) {
	switch(type) {
		case 'tap':
			if(Event.tap[id] != undefined) {
				Event.tap[id].setListening(false);
				Event.tap[id].destroy();
			}
		break;
	}
}

scriptLoaded('scripts/libs/separation_toolkit/event/event.js');