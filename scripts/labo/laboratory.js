/**
	Namespace Labo
**/
var Labo = {};

var Labo_max_possibilities = 100;
var word_searched = "";
var page = null;
var cloud = null;

Labo.start = function() {	
	word_searched = prompt("Choisissez un mot :");
	if (word_searched!="" && word_searched!=null) {
		Labo.menu();
	}
}

Labo.menu = function() {
	clearStage();
	Gui.homeBtn();
	page=1;
	
	var polices = new Array();
	polices.push(new Array(new Word ("coupable haut minuscule",null,0) , "coupable_min_haut"));
	polices.push(new Array(new Word ("COUPABLE HAUT MAJUSCULE",null,0) , "coupable_maj_haut"));
	polices.push(new Array(new Word ("coupable bas minuscule",null,1) , "coupable_min_bas"));
	polices.push(new Array(new Word ("COUPABLE BAS MAJUSUCLE",null,1) , "coupable_maj_bas"));
	
	for (var i=0; i<polices.length; i++) {
		polices[i][0].setCenterX(screenWidth/2);
		polices[i][0].setCenterY((screenHeight/(polices.length+1))*(i+0.5));
		polices[i][0].display(mainLayer);
		p=polices[i][1];
		polices[i][0].onTap(function(p){
			return function(){Labo.generateCloud(p);}
		}(p));
	}

	mainLayer.draw();
	actionLayer.draw();
};

Labo.generateCloud = function(police) {
	clearStage();
	
	loadingImg();
	
	cloud = new Cloud();
	cloud.addCentralWord(new Word(word_searched, null, Word_getNormalizedPolice(police)));

	setTimeout(function(){
		//cloud.setPossibilities(Xml.importLabRequest("XML/lab_request.xml", cloud.getCentralWord()));
		// http://www.sgoo.fr/proxy.php?url=http%3A%2F%2F192.185.52.237%2F%7Elasepa%2Fbeta%2Fwords.php%3Fprocedes%3Dcoupable_min_bas%26word%3Dutc%26casse%3D1
		cloud.setPossibilities(Xml.importLabRequest('http://www.sgoo.fr/proxy.php?url=http%3A%2F%2F192.185.52.237%2F%7Elasepa%2Fbeta%2Fwords.php%3Fprocedes%3D' + police + '%26word%3D' + word_searched + '%26casse%3D1', cloud.getCentralWord()));
		Labo.displayCloud();
	}, 1);
}

Labo.displayCloud = function() {
	clearStage();
	//~ Gui.homeBtn();
	//~ Labo.displayGui();
	Gui.laboDisplayAll();

	cloud.generate(page);
	cloud.display(mainLayer);
	mainLayer.draw();
	actionLayer.draw();
}

//~ Labo.displayGui = function() {
	//~ var zoom = 8; // Attention, pour l'instant ce n'est pas très au point, le "P" sera décalé et s'affichera mal
	//~ 
	//~ var policeBtn = new Word(" P ",null,4); policeBtn.setZoom(zoom);
	//~ var nextBtn = new Word(" > ",null,4); 	nextBtn.setZoom(zoom);
	//~ var lastBtn = new Word(" < ",null,4);	lastBtn.setZoom(zoom);
//~ 
	//~ policeBtn.setX(screenWidth - policeBtn.getWidth());
	//~ policeBtn.setY(screenHeight - policeBtn.getHeight() / 4);
	//~ 
	//~ nextBtn.setX(screenWidth - nextBtn.getWidth());
	//~ nextBtn.setY(0);
	//~ 
	//~ lastBtn.setX(0);
	//~ lastBtn.setY(0);
	//~ 
	//~ policeBtn.display(mainLayer);
	//~ nextBtn.display(mainLayer);
	//~ lastBtn.display(mainLayer);
	//~ 
	//~ policeBtn.onTap(function(){Labo.menu()});
	//~ nextBtn.onTap(function(){if(page < Math.ceil(cloud.possibilities.length/cloud.nb_max)){page++;Labo.displayCloud();}});
	//~ lastBtn.onTap(function(){if(page > 1){page--;Labo.displayCloud();}});
//~ 
	//~ mainLayer.draw();
	//~ actionLayer.draw();
//~ }

function loadingImg() {
	//~ var loading = new Image();
	//~ loading.src='imgs/loading.gif';
	//~ loading.onload = function(){
		//~ mainLayer.add(new Kinetic.Image({
			//~ x: screenWidth/2 - 100,
			//~ y: screenHeight/2 - 100,
			//~ image: loading,
			//~ width: 200,
			//~ height: 200
		//~ }));
		//~ mainLayer.draw();
	//~ }
	Gui.homeBtn();
	var loading = new Word("Loading");
	loading.setCenterX(screenWidth/2)
	loading.setCenterY(screenHeight/2)
	loading.display(mainLayer);
	mainLayer.draw();
}

scriptLoaded('scripts/labo/laboratory.js');
