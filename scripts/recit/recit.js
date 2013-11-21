/**
        Namespace recit
*/
var Recit = {};
var DEBUG = false;
var story = null;
var story_page = null;
var titles = new Array();

//////////////////////////////////////
var xmlList = ["separation", "email"];
//////////////////////////////////////

/*
        Point d'entrée du récit
*/
Recit.start = function() {
	story_page = 1;
	Recit.computeSizes();

	Recit.displayStoriesMenu();
}

Recit.destroy = function() {
	clearStage();

	Destroy.arrayObjet(titles);
	Destroy.objet(story);
	
	word_active = false;
}

Recit.displayStoriesMenu = function() {
	Destroy.all();
	Gui.Recit.menuDisplayAll();
	
	//~ nb_recit_max = Recit.cst.line.nb;
//~ 
	//~ var path= "";
	//~ 
	//~ for (var i=nb_recit_max*(story_page-1); i<xmlList.length && i<=(nb_recit_max*story_page); i++) {
		//~ path="stories/"+xmlList[i]+".xml";
		//~ var xml_file = Xml.load(path);
//~ 
		//~ titles[i] = new Word(xml_file.getElementsByTagName("title")[0].textContent, null, 0);
	    //~ titles[i].setCenterX(screenWidth/2);
	    //~ titles[i].setCenterY((((screenHeight)/(nb_recit_max+1))*(i-nb_recit_max*(story_page-1)+0.5)));
	    //~ titles[i].display(mainLayer);
	    //~ titles[i].onTap(function(path){
	        //~ return function(){Recit.openStory(path);}
		//~ }(path));
	//~ }

	var w = screenWidth;
	var h = screenHeight;

	var mots=[];
	mots[0]=[new Word("Separation"),2,w*0.5,h*0.4]; 
	mots[1]=[new Word("Paysage"),1.3,w*0.6,h*0.15]; 
	mots[2]=[new Word("Antarfrique"),1.2,w*0.7,h*0.65];
	mots[3]=[new Word("Amant"),1.4,w*0.8,h*0.8]; 
	mots[4]=[new Word("Decision"),1.2,w*0.3,h*0.2];
	mots[5]=[new Word("Horloge"),1.5,w*0.1,h*0.5];
	mots[6]=[new Word("Derisoire"),1.9,w*0.3,h*0.85]; 
	mots[7]=[new Word("Epluchage"),1.4,w*0.9,h*0.25]; 
	mots[8]=[new Word("Infini"),1.6,w*0.3,h*0.6];
	
	for (var i in mots) {
		mots[i][0].setCenterXY(mots[i][2],mots[i][3]);
		mots[i][0].setZoom(mots[i][1]-0.5);
		mots[i][0].display(mainLayer)
	}
	mots[0][0].onTap(function(){Recit.openStory("stories/separation.xml")});
	mainLayer.draw();
	actionLayer.draw();
}

Recit.openStory = function(file) {
	Destroy.all();
	Gui.Recit.displayAll();

	this.computeSizes();
	if(DEBUG) this.addLines();

	story = Xml.importStory(file);
	story.generate(Recit.cst.margin.up);
	story.display(mainLayer);

	mainLayer.draw();
	actionLayer.draw();
}

/*
        Détermination de la taille de la police en fonction de la hauteur du canvas
*/
Recit.computeSizes = function() {
	Recit.cst = fontConst[fontSize].recit;
	Recit.cst.line.nb = Math.floor(screenHeight / Recit.cst.line.height);
}


/** DEBUG **/

/*
        Ajoute des marges inter-lignes en rouge pour visualiser les lignes
*/
Recit.addLines = function() {
	for(var i = 0; i < Recit.cst.line.nb+1; i++)
	{
			var rect = new Kinetic.Rect({
					x: 0,
					y: Recit.cst.line.height * i - Recit.cst.margin.down,
					width: screenWidth,
					height: Recit.cst.margin.down + Recit.cst.margin.up,
					fill: "red",
					opacity: 0.3,
			});
			mainLayer.add(rect);
	}
}

scriptLoaded('scripts/recit/recit.js');
