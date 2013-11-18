/*
	Word event
*/
Word.prototype.addGesture = function() {
	
	var word = this;
	function onEvent(dir) {
		word.setAnimation(dir);
		word.animate(dir);
	}
	function onChange(dir, value) {
		word.setAnimationOnChange(dir);
		word.animateOnChange(value);
	}
	
	switch(this.police)
	{
		case 0:
		case 1:
		case 5:
			Event.onCut(this.getId(), this, onEvent, onChange, true);
		break;
		case 2:
			Event.onOpen(this.getId(), this, onEvent, onChange, true);
		break;
		case 3:
			Event.onErase(this.getId(), this, onEvent, onChange, true);
		break;
		default:
			alert('Police inconnue : ' + this.police + ' dans la fonction Word.addGesture()');
		break;
	}
}

Word.prototype.removeGesture = function() {
	switch(this.police)
	{
		case 0:
		case 1:
		case 5:
			Event.destroy(this.getId(), 'cut');
		break;
		case 3:
			Event.destroy(this.getId(), 'erase');
		break;
		case 2:
			Event.destroy(this.getId(), 'open');
		break;
		default:
			alert('Police inconnue : ' + this.police + ' dans la fonction Word.removeGesture()');
		break;
	}
}

Word.prototype.onTap = function(handler) {
	var id = this.getId();
	
	Event.onTap(id, this, function(word) { return function() {
		if(!word_active)
			handler(word);
	}}(this), true);
}

Word.prototype.activeOnTap = function() {
	if(this.value != this.next_value) {
		// this.onTap(function(word){
			// word.activate();
		// });
		this.addGesture();
	}
}

Word.prototype.activeDbltap = function() {
	// Event.onDblTap(this.getId(), stage, function(word) { return function() {
		// word.disable();
	// }}(this), false);
	this.setDone('eventFinished', function(word) { return function() {
		word.disable();
	}}(this));
}

Word.prototype.disableDbltap = function() {
	// Event.destroyDbltap(this.getId());
	this.removeDone('eventFinished');
}

scriptLoaded('scripts/libs/separation_toolkit/event/word.js');