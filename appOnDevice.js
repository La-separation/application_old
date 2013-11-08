var onDevice = (navigator.userAgent.match((/(iPhone|iPod|iPad|Android|BlackBerry|PlayBook|IEMobile)/)) == null) ? false : true;

function appOnDevice() {
	return onDevice;
}

function appOnDevice_real() {
	return onDevice;
}

scriptLoaded('appOnDevice.js');
