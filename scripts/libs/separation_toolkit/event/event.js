/*
	Namespace Event
*/
var Event = {};
Event.tap = new Array();

Event.onTap = function(id, node, handler) {
	Event.tap[id] = new Kinetic.Rect({
		listening : true,
		x: node.getX() - node.getOffsetX(),
		y: node.getY() - node.getOffsetY(),
		width: node.getWidth(),
		height: node.getHeight(),
		opacity: 0,
	});

	Event.tap[id].on(events['tap'], function(){
		handler();
	});
	actionLayer.add(Event.tap[id]);
}

scriptLoaded('scripts/libs/separation_toolkit/event/event.js');