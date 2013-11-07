/*
	Namespace Destroy
*/
var Destroy = {};

Destroy.objet = function(obj) {
	if(obj != null) {
		// alert(obj);
		obj.destroy();
		// for (attr in obj) {
			// obj[attr] = null;
		// }
		obj = null;
	}
}

Destroy.tab = function(tab) {
	for(var i in tab) {
		delete(tab[i]);
	}
	list = new Array();
}

Destroy.list = function(list) {
	for(var i in list) {
		delete(list[i]);
	}
	list = {};
}

Destroy.all = function() {
	mainLayer.clear();
	actionLayer.clear();
	
	Introduction.destroy();
	Menu.destroy();
	Aide.destroy();
	Recit.destroy();
	Labo.destroy();
	
	Event.destroyAll();
}

scriptLoaded('scripts/libs/separation_toolkit/destroy/destroy.js');
