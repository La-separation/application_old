/*
 * Toolkit for the Separation Project
 *
 * Includes the gestures and the animations
 */

function appOnDevice()	{
	if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|PlayBook|IEMobile)/) != null)
		return true;
	return false;
}

/*
	namespace Separation
 */
var Separation = {};

scriptLoaded('scripts/libs/separation_toolkit/intro.js');