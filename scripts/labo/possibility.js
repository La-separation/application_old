function Possibility(value, police) {
	this.value = value;
	this.police = police;
}

Possibility.prototype.getValue = function() {
	return this.value;
}

Possibility.prototype.getPolice = function() {
	return this.police;
}

scriptLoaded('scripts/labo/possibility.js');
