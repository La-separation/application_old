/*
	Event cut
*/
Event.open_obj = {};

Event.onOpen = function(id, object, callback, callbackOnChange, restart) {
	Event.open_obj[id] = {
		x1: object.getX() + Math.floor(object.getWidth() * -0.1),
		y1: object.getY() + Math.floor(object.getHeight() * 0.0),
		x2: object.getX() + Math.floor(object.getWidth() * 1.1),
		y2: object.getY() + Math.floor(object.getHeight() * 1.0),
		onEvent: callback,
		onChange: callbackOnChange,
		direction: 0,
		value: 0,
		old_value: 0,
		rect: null,
	};
	// Event.open_obj[id].rect = new Kinetic.Rect({
			// x:Event.open_obj[id].x1,
			// y:Event.open_obj[id].y1,
			// width:Event.open_obj[id].x2-Event.open_obj[id].x1,
			// height:Event.open_obj[id].y2-Event.open_obj[id].y1,
			// fill:'#a00',
			// opacity: 0.5,
		// });
	// mainLayer.add(Event.open_obj[id].rect);
	// mainLayer.draw();
}

Event.open = function(coords) {
	for(var i in Event.open_obj) {
		var obj = Event.open_obj[i];
		if(obj == undefined) alert('undefined : ' + i); else
		// On regarde si le curseur est dans le cadre selon l'axe x
		if((obj.x1 <= coords.x1) && (coords.x1 <= obj.x2) &&
		   (obj.x1 <= coords.x2) && (coords.x2 <= obj.x2)) {
			// Si le curseur est entré dans le rectangle par le dessus,
			// c'est le début d'un open uTb (up to bottom)
			if((coords.y1 <= obj.y1) && (obj.y1 <= coords.y2)) {
				obj.direction = 1;
				obj.onChange(obj.direction, obj.value);
			}
			// Si le curseur est entré dans le rectangle par le dessous,
			// c'est le début d'un open bTu (bottom to up)
			else if((coords.y2 <= obj.y2) && (obj.y2 <= coords.y1)) {
				obj.direction = -1;
				obj.onChange(obj.direction, obj.value);
			}

			// Si un open en cours
			// On calcule la valeur de l'avancement du geste
			if(obj.direction == 1) { // Si c'est un open uTb
				obj.value = (coords.y2 - obj.y1) / (obj.y2 - obj.y1);
			}
			else if(obj.direction == -1) { // Si c'est un open bTu
				obj.value = -(coords.y2 - obj.y2) / (obj.y2 - obj.y1);
			}
			
			// On ajuste si le curseur est en dehors du rectangle
			if(obj.value < 0) {
				obj.value = 0;
			}
			else if(obj.value > 1) {
				obj.value = 1;
			}
			
			// Si la valeur est à 1 c'est que le geste est fini
			if(obj.value == 1) {
				obj.onEvent(obj.direction);
				
				obj.direction = 0;
				obj.value = 0;
				obj.old_value = 0;
			}
			if(obj.old_value != obj.value) {
				obj.onChange(obj.direction, obj.value);
			}
			obj.old_value = obj.value;
		}
		// Sinon on remets à 0 l'évènement
		else
		{
			obj.direction = 0;
			obj.value = 0;
			obj.old_value = 0;
			obj.onChange(obj.direction, obj.value);
		}
	}
}

Event.destroyOpen = function(id) {
	Destroy.listItem(Event.open_obj, id);
}

scriptLoaded('scripts/libs/separation_toolkit/event/open.js');