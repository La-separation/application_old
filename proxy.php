<?php
	if (!isset($_GET['url'])) die();
	$url = urldecode($_GET['url']);
	$url = 'http://' . str_replace('http://', '', $url); // Avoid accessing the file system
	header ('Content-Type:text/xml');
	header("Access-Control-Allow-Origin: *");
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
	echo file_get_contents($url);