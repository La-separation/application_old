/*********************************
 *            Classes            *
 *********************************/
 
 //Array of functions
var animations = new Array();

/**/
var Direction = { "top" : 0,
					"down" : 1,
					"left" : 2,
					"right" : 3,
					"none" : -1 };
/**/
var GestureType = { "none" : 0,
					"cut" : 10+Direction["none"],
					"central" : 20+Direction["none"],
					"scroll" : 30+Direction["none"] };
/**/
var StoryType = { "alter" : 0,
					"continue" : 1 };
/**/
var Transition = { "up" : 0,
					"down" : 1,
					"central" : 2,
					"shadow" : 3,
					"err" : -1 };
var Video = { "ELO" : 0,
				"Prenoms" : 1 };

function Word(value)
{
	this.value = new Kinetic.Text( {
		fontFamily : "DemiBas",
		fontSize : entireSize,
		fill : "#FFF",
		text : value
	} );
}

function ActiveWord(value, next, type)
{
	this.gesture;
	this.active = true;
	this.type = type;
	this.value;
	switch(this.type) {
	
		case Transition["up"] :
			this.value = new word_demihaut({
				mot1: value,
				mot2: next,
				fontSize: demiSize*0.65,
				fill: '#FFF'
			  });
			this.value.group.on(events['tap'], onUp);
			break;
			
		case Transition["down"] : 
			this.value = new word_demibas({
				mot1: value,
				mot2: next,
				fontSize: demiSize*0.65,
				fill: '#FFF'
			  });
			this.value.group.on(events['tap'], onDown);
			break;
			
		case Transition["central"] : 
			this.value = new word_centrale({
				mot1: value,
				mot2: next,
				fontSize: centraleSize*0.35,
				fill: '#FFF'
			  });
			  
			this.value.group.on(events['tap'], onCentral);
			
			break;
			
		case Transition["shadow"]:
			var tmpImg = "imgs/stories/" + value + ".png";
			var tmpNext = "imgs/stories/" + next + ".png";
			this.value = new word_ombre({
						img1: tmpImg,
						img2: tmpNext
			});
			
			this.value.group.on(events['tap'], onShadow);	
			
			break;
	}
}

var onUp = function() {
	wordActivation(this);
	this.gesture = new Gesture();
	this.on("cutLeft", function() {
		alert("cutUp-Left");
	});
	this.on("cutRight", function() {
		alert("cutUp-Right");
	});
};

var onDown = function() {
	wordActivation(this);
	this.gesture = new Gesture();
	this.on("cutLeft", function() {
		alert("cutDown-Left");
	});
	this.on("cutRight", function() {
		alert("cutDown-Right");
	});
};

var onShadow = function() {
	wordActivation(this);
	this.gesture = new Gesture();
	this.on("shadow", function() {
		alert("shadow");
	});
};

var onCentral = function() {
	wordActivation(this);
	this.gesture = new Gesture();
	this.on("centralLeft", function() {
		alert("central-Left");
	});
	this.on("centralRight", function() {
		alert("central-Right");
	});
};

var wordActivation = function (wordGroup) {
	var allWords = wordGroup.getParent().getChildren();
	for(var i = 0; i < allWords.length ; i++)
	{
		if(allWords[i] != wordGroup) { 
			node_dark(allWords[i]); 
		}
		allWords[i].setListening(false);
	}
	
	previousPos = { x : wordGroup.getX(), y : wordGroup.getY() };
	
	(inTuto == true) ? node_zoom(wordGroup, 4) : node_zoom(wordGroup, 2);
	
	stage.on("dbltap", function() {
		wordDesactivation(wordGroup);
	});	
};

var wordDesactivation = function (wordGroup) {
	var allWords = wordGroup.getParent().getChildren();
	stage.off("dbltap");
	for(var i = 0; i < allWords.length ; i++)
	{
		allWords[i].setListening(true);
		if(allWords[i] != wordGroup) { 
			node_light(allWords[i]); 
		}
	}
	if(inTuto == true || currentStoryType == StoryType['alter']) {
		node_unzoom(wordGroup, previousPos.x, previousPos.y);
	}
	else {
		alert("story type continue");
	}
};

animations['cutUp'] = function (wordGroup) {
	alert("cut up animation");
};

animations['cutDown'] = function (wordGroup) {
	alert("cut down animation");
};

animations['shadow'] = function (wordGroup) {
	alert("cut shadow animation");
};

animations['central'] = function (wordGroup) {
	alert("cut central animation");
};

function Gesture(object) {
	this.currentGesture = GestureType["none"];
	this.previousPos = { x : 0 , y : 0 };
	this.currentPos = { x : 0 , y : 0 };
	object.on("touchmove",function(evt) {
		//
	} );
	object.on("touchend", function(evt) {
		//if currentGesture == GestureType["cut"]
	} );
}

Gesture.prototype.deleteGesture = function(object) {
	object.off("touchstart");
	object.off("touchmove");
	object.off("touchend");
	this.currentGesture = GestureType["none"];
}