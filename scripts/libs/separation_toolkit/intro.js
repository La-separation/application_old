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

var events = {
	tap : (appOnDevice() ? 'tap' : 'click'),
	touchmove : (appOnDevice() ? 'touchmove' : 'mousemove'),
	dbltap : (appOnDevice() ? 'dbltap' : 'dblclick'),
};
var touchPos = {x:0,y:0};

function myEvent(event) {
	if(appOnDevice())
	{
		touchPos.x = event.touches[0].pageX;
		touchPos.y = event.touches[0].pageY;
	}
	else
	{
		touchPos.x = event.pageX;
		touchPos.y = event.pageY;
	}
}
/*
	namespace Separation
 */
var Separation = {};

scriptLoaded('scripts/libs/separation_toolkit/intro.js');