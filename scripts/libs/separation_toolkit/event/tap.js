/*
	Events tap et dbltap
*/
Event.tap_obj = {};
Event.dbltap_obj = {};

Event.dbltapId = function(id) { return 'dbltap_' + id; };

Event.onTap = function(id, object, callback, restart) {
	Event.tap_obj[id] = {
		x1: object.getX(),
		y1: object.getY(),
		x2: object.getX() + object.getWidth(),
		y2: object.getY() + object.getHeight(),
		onTap: callback,
	};
}

Event.tap = function(event) {
	event.preventDefault();
	var coord = Event.getTouchPos(event);
	// On regarde si les coordon�es du 'tap' se situent dans un rectangle actif
	for(var i in Event.tap_obj) {
		var obj = Event.tap_obj[i];
		if(obj == undefined) alert('undefined : ' + i); else
		if((obj.x1 <= coord.x) && (coord.x <= obj.x2)) {
		if((obj.y1 <= coord.y) && (coord.y <= obj.y2)) {
			obj.onTap();
		}}
	}
}

Event.onDblTap = function(id, object, callback, restart) {
	Event.dbltap_obj[id] = false;
	
	// Event.dbltapId(id) pour un id sp�cifique au dbltap, sinon si un tap est activ� avec le m�me id en m�me temps il y a conflit
	Event.onTap(Event.dbltapId(id), object, function(id, callback, restart) { return function() {
		if(Event.dbltap_obj[id]) {
			Event.dbltap_obj[id] = false;
			if(!restart) {
				Event.destroyDbltap(id);
			}
			callback();
		}
		else {
			Event.dbltap_obj[id] = true;
			setTimeout(function(id) { return function() {
				if(Event.dbltap_obj[id] != undefined) {
					Event.dbltap_obj[id] = false;
				}
			}}(id), 1000);
		}
	}}(id, callback, restart), true);
}

Event.destroyTap = function(id) {
	Destroy.listItem(Event.tap_obj, id);
}

Event.destroyDbltap = function(id) {
	Event.destroyTap(Event.dbltapId(id));
	Destroy.listItem(Event.dbltap_obj, id);
}

scriptLoaded('scripts/libs/separation_toolkit/event/tap.js');