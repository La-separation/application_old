/*
	Event cut
*/
Event.erase_obj = {};

Event.onErase = function(id, object, callback, callbackOnChange, restart) {
	Event.erase_obj[id] = {
		x1: object.getX() + Math.floor(object.getWidth() * 0.3),
		y1: object.getY() + Math.floor(object.getHeight() * -0.3),
		x2: object.getX() + Math.floor(object.getWidth() * 0.7),
		y2: object.getY() + Math.floor(object.getHeight() * 1.3),
		onEvent: callback,
		onChange: callbackOnChange,
		direction: 0,
		value: 0,
		old_value: 0,
		rect: null,
	};
	// Event.erase_obj[id].rect = new Kinetic.Rect({
			// x:Event.erase_obj[id].x1,
			// y:Event.erase_obj[id].y1,
			// width:Event.erase_obj[id].x2-Event.erase_obj[id].x1,
			// height:Event.erase_obj[id].y2-Event.erase_obj[id].y1,
			// fill:'#a00',
			// opacity: 0.5,
		// });
	// mainLayer.add(Event.erase_obj[id].rect);
	// mainLayer.draw();
}

Event.erase = function(coords) {
	for(var i in Event.erase_obj) {
		var obj = Event.erase_obj[i];
		if(obj == undefined) alert('undefined : ' + i); else
		// On regarde si le curseur est dans le cadre selon l'axe y
		if((obj.y1 <= coords.y1) && (coords.y1 <= obj.y2) &&
		   (obj.y1 <= coords.y2) && (coords.y2 <= obj.y2)) {
			// Si le curseur est entré dans le rectangle par la gauche,
			// c'est le début d'un erase ltr (left to right)
			if((coords.x1 <= obj.x1) && (obj.x1 <= coords.x2)) {
				obj.direction = 1;
				obj.onChange(obj.direction, obj.value);
			}
			// Si le curseur est entré dans le rectangle par la droite,
			// c'est le début d'un erase rtl (right to left)
			else if((coords.x2 <= obj.x2) && (obj.x2 <= coords.x1)) {
				obj.direction = -1;
				obj.onChange(obj.direction, obj.value);
			}

			// Si un erase est en cours
			// On calcule la valeur de l'avancement du geste
			if(obj.direction == 1) { // Si c'est un erase ltr
				obj.value = (coords.x2 - obj.x1) / (obj.x2 - obj.x1);
			}
			else if(obj.direction == -1) { // Si c'est un erase rtl
				obj.value = -(coords.x2 - obj.x2) / (obj.x2 - obj.x1);
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

Event.destroyErase = function(id) {
	Destroy.listItem(Event.erase_obj, id);
}

scriptLoaded('scripts/libs/separation_toolkit/event/erase.js');