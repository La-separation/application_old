/*********************************
 *        Global variables       *
 *********************************/
 
var code=[];
code["coupable_bas_min"] = [["o"],["a"],["a"],["a","o"],["a"],["i"],["g"],["ii"],["i","a"],["j"],["ii"],["i"],["iii"],["ii"],["a"],["p"],["q"],["i"],["a"],["i","a"],["a","o"],["b"],["e"],["ii"],["i","g","q"],["z"]];
code["coupable_bas_maj"] = [["II"],["O"],["O","L"],["O"],["L"],["I"],["O"],["II"],["I"],["O"],["II"],["L"],["III"],["II"],["O"],["I"],["Q"],["II"],["O"],["I"],["O"],["V"],["W"],["II"],["I"],["Z"]];
code["coupable_haut_min"] = [["o"],["h"],["o"],["d"],["o"],["f"],["o"],["h"],["i"],["i"],["ii","h"],["l"],["m"],["o"],["o"],["o"],["o"],["o"],["o"],["t"],["ii"],["ii"],["iii"],["ii"],["ii"],["z"]];
code["coupable_haut_maj"] = [["A"],["A"],["A","C"],["A"],["A","C"],["C"],["A","C"],["II"],["I"],["I","T"],["II"],["I"],["M"],["A","II"],["A"],["A"],["A"],["A"],["A","C"],["T"],["II"],["II"],["III"],["II"],["II"],["Z"]];
code["centrale"] = [["A"],["B"],["B"],["B"],["B"],["F"],["B"],["H"],["I"],["J"],["H"],["L"],["M"],["A"],["B"],["P"],["Q"],["A"],["B"],["T"],["U"],["V"],["W"],["H"],["Y"],["Z"]];
 
var video = -1;
 
var domaineSeparation = "http://i-trace.fr/2013/laseparation/P2MM";
var procedesDispo = new Array();

var currentGesture;
 
var screenWidth;
var screenHeight;

var inTuto = false;
var inLab = false;
var currentStoryType;

var btnFunctions = new Array();

var homeBtn;
var shuffleBtn;
var returnBtn;

var arrowUp;
var arrowDown;

var sounds = new Array();
var stage;
var mainLayer = new Kinetic.Layer();
var actionLayer = new Kinetic.Layer();

/*Main font sizes*/
var titleSize;
var demiSize;
var entireSize;
var centraleSize;

var timeStart;
var timeEnd;

var maxVisibleLines = 5;

var en = {
			"tuto" : "help",
			"story" : "story",
			"labo" : "lab",
			"concept" : "about",
			"lang" : "fr", 
			"labPromptInstruction" : "Type a word"
			};
var fr = {
			"tuto" : "aide",
			"story" : "recit",
			"labo" : "labo",
			"concept" : "a propos",
			"lang" : "en",
			"labPromptInstruction" : "Entrez un mot"
			};

var tuto_en = {
				"instruction" : "Tap the word",
				"upStart" : "application", 
				"upEnd" : "realisation",
				"shadowStart" : "lab", 
				"shadowEnd" : "about",
				"centralStart" : "fr",
				"centralEnd" : ""
				};
var tuto_fr = {
				"instruction" : "Touchez le mot",
				"upStart" : "HAINE",
				"upEnd" : "HELAS",
				"shadowStart" : "CACHE", 
				"shadowEnd" : "ORDRE",
				"centralStart" : "COUTEAU",
				"centralEnd" : "SOUTENU" 
				};	
				
var activeLang = fr;

var wordLabo;

var answers = new Array();

scriptLoaded('scripts/variables.js');
