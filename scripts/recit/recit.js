/**
        Namespace recit
*/
var Recit = {};
var DEBUG = false;
var story_page = null;

//////////////////////////////////////
var xmlList = ["separation","test","test1","test2","test3","test4","test5","test6","test7","test8","test9","test10"];
//////////////////////////////////////

/*
        Point d'entrée du récit
*/
        Recit.start = function() {
        var nb_recit_max = screenHeight /90;
        story_page = 1;

        clearStage();
        setHomeBtn();
        Recit.displayStoriesGui();
        
        var words = new Array();
        path = "";
        
        for (var i=0; i<xmlList.length ;i++){
                var path = "stories/"+xmlList[i]+".xml";
                var xml_file = Xml.load(path);
                words.push(new Word(xml_file.getElementsByTagName("title")[0].textContent, null, 0));
                
                words[i].setCenterX(screenWidth/2);
                words[i].setCenterY((((screenHeight)/(nb_recit_max+1))*(i+0.5)));
                words[i].display(mainLayer);
                words[i].onTap(function(path){
                        return function(){Recit.openStory(path);}
                }(path));
        }

        mainLayer.draw();
        actionLayer.draw();
}

Recit.openStory = function(file) {
        clearStage();
        setHomeBtn();
        Recit.displayStoryGui();

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

Recit.displayStoryGui = function() {
	var zoom = 8; // Attention, pour l'instant ce n'est pas très au point, le "R" sera décalé et s'affichera mal
	
	var storiesBtn = new Word(" R", null, 4);	storiesBtn.setZoom(zoom);
	var nextBtn = new Word(" > ", null, 4);		nextBtn.setZoom(zoom);
	var lastBtn = new Word(" < ", null, 4);		lastBtn.setZoom(zoom);
	
	storiesBtn.setX(screenWidth - storiesBtn.getWidth());
	storiesBtn.setY(screenHeight - storiesBtn.getHeight() / 4);

	nextBtn.setX(screenWidth - nextBtn.getWidth());
	nextBtn.setY(0);
	
	lastBtn.setX(0);
	lastBtn.setY(0);

	storiesBtn.display(mainLayer);
	nextBtn.display(mainLayer);
	lastBtn.display(mainLayer);

	storiesBtn.onTap(function(){Recit.start()});
	nextBtn.onTap(function(){});
	lastBtn.onTap(function(){});
	
	mainLayer.draw();
	actionLayer.draw();
}

Recit.displayStoriesGui = function() {
        var nextBtn = new Word(" > ", null, 4)
        var lastBtn = new Word(" < ", null, 4)
        
        nextBtn.setX(screenWidth - nextBtn.getWidth());
        nextBtn.setY(0);
        
        lastBtn.setX(0);
        lastBtn.setY(0);

        nextBtn.display(mainLayer);
        lastBtn.display(mainLayer);

        nextBtn.onTap(function(){});
        lastBtn.onTap(function(){});
        
        mainLayer.draw();
        actionLayer.draw();

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