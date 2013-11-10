/*
	Events tap et dbltap
*/
Event.tap_obj = {};
Event.dbltap_obj = {};

Event.dbltapId = function(id) { return 'dbltap_' + id; };

Event.onTap = function(id, object, handler, restart) {
	Event.tap_obj[id] = {
		x_start: object.getX(),
		y_start: object.getY(),
		x_end: object.getX() + object.getWidth(),
		y_end: object.getY() + object.getHeight(),
		onTap: handler,
	};
}

Event.tap = function(event) {
	event.preventDefault;
	var coord = getTouchPos(event);
	// On regarde si les coordonées du 'tap' se situent dans un rectangle actif
	for(var i in Event.tap_obj) {
		if(Event.tap_obj[i] == undefined) alert(i); else
		if((Event.tap_obj[i].x_start <= coord.x) && (coord.x <= Event.tap_obj[i].x_end)) {
		if((Event.tap_obj[i].y_start <= coord.y) && (coord.y <= Event.tap_obj[i].y_end)) {
			Event.tap_obj[i].onTap();
		}}
	}
}

Event.onDblTap = function(id, object, handler, restart) {
	Event.dbltap_obj[id] = false;
	
	// Event.dbltapId(id) pour un id spécifique au dbltap, sinon si un tap est activé avec le même id en même temps il y a conflit
	Event.onTap(Event.dbltapId(id), object, function(id, handler, restart) { return function() {
		if(Event.dbltap_obj[id]) {
			Event.dbltap_obj[id] = false;
			if(!restart) {
				Event.destroyDbltap(id);
			}
			handler();
		}
		else {
			Event.dbltap_obj[id] = true;
			setTimeout(function(id) { return function() {
				if(Event.dbltap_obj[id] != undefined) {
					Event.dbltap_obj[id] = false;
				}
			}}(id), 1000);
		}
	}}(id, handler, restart), true);
}

Event.destroyTap = function(id) {
	Destroy.listItem(Event.tap_obj, id);
}

Event.destroyDbltap = function(id) {
	Event.destroyTap(Event.dbltapId(id));
	Destroy.listItem(Event.dbltap_obj, id);
}

scriptLoaded('scripts/libs/separation_toolkit/event/tap.js');