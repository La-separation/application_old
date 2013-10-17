var Xml = {};

Xml.load = function(xml_path) {
	var loadedFile;

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", xml_path, false);
	xmlhttp.setRequestHeader('Content-Type', 'text/xml');
	xmlhttp.send();
	loadedFile = xmlhttp.responseXML;

	return loadedFile;
}

Xml.importStory = function(xml_path) {
	var xml_file = Xml.load(xml_path);
	var xstory = xml_file.getElementsByTagName("story")[0];
	var xsentences = xstory.getElementsByTagName("sentence");

	var story = new Story();

	for(i=0; i < xsentences.length ; i++) {

		var sentence = new Sentence();

		var xsentence = xsentences[i];
		var xwords = xsentence.getElementsByTagName("word");

		for (j=0; j < xwords.length; j++) {
			var xword = xwords[j];
			var value = xword.textContent;
			var next_value = xword.getAttribute("next_value");
			var police = xword.getAttribute("police");

			var word = new Word(value , next_value , police );
			sentence.add(word);

		}

		story.add(sentence);

	}

	return story;

}


scriptLoaded('scripts/xml/xml.js');