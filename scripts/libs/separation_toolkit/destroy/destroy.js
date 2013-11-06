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

scriptLoaded('scripts/libs/separation_toolkit/destroy/destroy.js');
