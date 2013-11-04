/**
        Namespace recit
*/
var Recit = {};
var DEBUG = false;
var story_page = null;

//////////////////////////////////////
var xmlList = ["separation","codes-min-bas","codes-maj-bas","codes-min-haut","codes-maj-haut","test1","test2","test3","test4","test5","test6","test7","test8","test9","test10"];
//////////////////////////////////////

/*
        Point d'entrée du récit
*/
Recit.start = function() {
	story_page = 1;

	clearStage();
	Gui.storiesDisplayAll();
	Recit.displayStoriesMenu()
}


Recit.displayStoriesMenu = function() {
	nb_recit_max = Math.floor(screenHeight /90);

	var titles = new Array();
	var path="";
	
	for (var i=nb_recit_max*(story_page-1); i<xmlList.length && i<=(nb_recit_max*story_page); i++) {
		path="stories/"+xmlList[i]+".xml";
		var xml_file = Xml.load(path);

		titles.push(new Word(xml_file.getElementsByTagName("title")[0].textContent, null, 0));
	    titles[i-nb_recit_max*(story_page-1)].setCenterX(screenWidth/2);
	    titles[i-nb_recit_max*(story_page-1)].setCenterY((((screenHeight)/(nb_recit_max+1))*(i-nb_recit_max*(story_page-1)+0.5)));
	    titles[i-nb_recit_max*(story_page-1)].display(mainLayer);
	    titles[i-nb_recit_max*(story_page-1)].onTap(function(path){
	        return function(){Recit.openStory(path);}
		}(path));
	}

	mainLayer.draw();
	actionLayer.draw();

}

Recit.openStory = function(file) {
        clearStage();
        Gui.storyDisplayAll();

        this.computeSizes();
        if(DEBUG) this.addLines();

        var story = Xml.importStory(file);
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
