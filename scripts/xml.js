/*********************************
 *         XML FOR STORIES       *
 *********************************/

var stories = new Array();

var alreadyReadXML = false;

var xmlFile;
var frXmlPath = "./stories/fr_xml.xml";
var enXmlPath = "./stories/en_xml.xml";
 
function loadXMLDoc(pathXML) {
	var loadedFile;
	if(navigator.appname == 'Microsoft Internet Explorer') {
		loadedFile = new ActiveXObject("Microsoft.XMLDOM");
		loadedFile.async = false;
		while(loadedFile.readyState != 4) {};
		loadedFile.load(pathXML);
	}
	else {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", pathXML, false);
		xmlhttp.setRequestHeader('Content-Type', 'text/xml');
		xmlhttp.send();
		loadedFile = xmlhttp.responseXML;
	}
	return loadedFile;
} 

//Object Story, with its title, its type, and the array of sentences
function Story(title, type, node) {
	this.storyNode = node;
	this.title = title;
	this.type = type;
	this.sentences = new Array();
}

//Object Sentence with the array of words (inactive and active)
function Sentence() {
	this.words = new Array();
}

//Getting all stories to display titles
function storiesFromXML() {
	if(alreadyReadXML) return;
	alreadyReadXML = true;
	stories.length = 0;
	var tmpStories = xmlFile.getElementsByTagName("story");
	for(var index = 0; index < tmpStories.length ; index++) {
		var tmpType;
		if(tmpStories[index].getAttribute("type") == "alter") {
			tmpType = StoryType["alter"];
		}
		else {
			tmpType = StoryType["continue"];
		}
		var title = tmpStories[index].getElementsByTagName("title")[0].textContent;
		stories[index] = new Story(title, tmpType, tmpStories[index]);
	}
}

function getRightStory(title) {
	for(var i = 0; i < stories.length ; i++) {
		if(title === stories[i].title) {
			return stories[i];
		}		
	}
	alert("Story not found.");
	return null;
}

//Create entire sentences and words from story in memory
function getStoryFromXML(story) {
	var tmpSen = story.storyNode.getElementsByTagName("sentence");
	for(var s = 0 ; s < tmpSen.length ; s++) {
		var tmpWords = tmpSen[s].getElementsByTagName("word");
		var tmpSentence = new Sentence();
		for(var w = 0; w < tmpWords.length ; w++) {
			var tmpWord;
			if(tmpWords[w].attributes.length > 0) {
				var next = tmpWords[w].getAttribute("next");
				var type = Transition["err"];
				switch(tmpWords[w].getAttribute("font"))
				{
					case "coupable_haut": type = Transition["up"]; break;
					case "coupable_bas" : type = Transition["down"]; break;
					case "centrale" : type = Transition["central"]; break;
					case "ombre" : type = Transition["shadow"]; break;
				}
				tmpWord = new ActiveWord( tmpWords[w].textContent, next, type );
			}
			else {
				tmpWord = new Word( tmpWords[w].textContent );
			}
			tmpSentence.words[w] = tmpWord;
		}
		story.sentences[s] = tmpSentence;
	}
}

/*********************************
 *       XML FOR LABORATORY      *
 *********************************/
 
var procedesXML;
var answersXML;
 
function getProcedesServeur() {
	var XMLHttp = new XMLHttpRequest();
	var url = domaineSeparation + "/LaboDesMots/procedes.php";
	XMLHttp.open("GET", url, true);
	XMLHttp.setRequestHeader('Content-Type', 'text/xml');
	
	XMLHttp.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200) {
			var procedesXML = XMLHttp.responseXML;
			var tmpProcedes = procedesXML.getElementsByTagName("procede");
			for(var i = 0 ; i < tmpProcedes.length ; i++) {
				procedesDispo[i] = tmpProcedes[i].getAttribute("name");
			}
		}
	}
	
	XMLHttp.send();
}

function requestWords(word) {
	alert(word);
	var XMLHttp = new XMLHttpRequest();
	var url = domaineSeparation + "/LaboDesMots/words.php";
	XMLHttp.open("POST", url, true);
	XMLHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	XMLHttp.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200) {
			var answerXML = XMLHttp.responseXML;
			alert(answerXML);
			var answeredWords = answerXML.getElementsByTagName("word");
			alert(answeredWords.length);
			for(var i = 0 ; i < answeredWords.length ; i++) {
				alert(answeredWords[i].getAttribute("name"));
				/*
				plusieurs tableaux en fonction du code : haut, bas?
				//TODO: ombre, central?
				*/
			}
			alert("end");
		}
	}
	
	var allProcedes = "";
	for(var i = 0 ; i < procedesDispo.length ; i++) {
		if(i != 0) allProcedes += ";";
		allProcedes += procedesDispo[i];
	}
	alert(allProcedes);
	
	XMLHttp.send("procedes="+allProcedes+"&mot="+word);
}

function Result(val, font, freq) {
	this.frequency = freq;
	this.value = val;
	this.type;
	//if font includes min_bas -> police DemiBas lowerCase
	//min_haut -> police DemiHaut lowerCase
	//maj_bas -> police DemiBas upperCase
	//maj_haut -> police DemiHaut upperCase
}