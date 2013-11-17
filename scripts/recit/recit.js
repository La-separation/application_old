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
	
	nb_recit_max = Recit.cst.line.nb;

	var path= "";
	
	for (var i=nb_recit_max*(story_page-1); i<xmlList.length && i<=(nb_recit_max*story_page); i++) {
		path="stories/"+xmlList[i]+".xml";
		var xml_file = Xml.load(path);

		titles[i] = new Word(xml_file.getElementsByTagName("title")[0].textContent, null, 0);
	    titles[i].setCenterX(screenWidth/2);
	    titles[i].setCenterY((((screenHeight)/(nb_recit_max+1))*(i-nb_recit_max*(story_page-1)+0.5)));
	    titles[i].display(mainLayer);
	    titles[i].onTap(function(path){
	        return function(){Recit.openStory(path);}
		}(path));
	}

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
