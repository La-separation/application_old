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
	Labo.menu();
}

Labo.menu = function() {
	clearStage();
	setHomeBtn();
	page=1;
	
	var coupable_min_haut = new Word ("coupable haut minuscule",null,0);
	var coupable_maj_haut = new Word ("COUPABLE HAUT MAJUSCULE",null,0);
	var coupable_min_bas = new Word ("coupable bas minuscule",null,1);
	var coupable_maj_bas = new Word ("COUPABLE BAS MAJUSUCLE",null,1);
	
	coupable_min_haut.setCenterX(screenWidth/2);
	coupable_min_haut.setCenterY(0.20*screenHeight);

	coupable_maj_haut.setCenterX(screenWidth/2);
	coupable_maj_haut.setCenterY(0.40*screenHeight);
	
	coupable_min_bas.setCenterX(screenWidth/2);
	coupable_min_bas.setCenterY(0.60*screenHeight);
	
	coupable_maj_bas.setCenterX(screenWidth/2);
	coupable_maj_bas.setCenterY(0.80*screenHeight);
	
	coupable_min_haut.display(mainLayer);
	coupable_maj_haut.display(mainLayer);
	coupable_min_bas.display(mainLayer);
	coupable_maj_bas.display(mainLayer);
	
	coupable_min_haut.onTap(function(){Labo.generateCloud('coupable_min_haut')});
	coupable_maj_haut.onTap(function(){Labo.generateCloud('coupable_maj_haut')});
	coupable_min_bas.onTap(function(){Labo.generateCloud('coupable_min_bas')});
	coupable_maj_bas.onTap(function(){Labo.generateCloud('coupable_maj_bas')});

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
	setHomeBtn();
	Labo.displayGui();

	cloud.generate(page);
	cloud.display(mainLayer);
	mainLayer.draw();
	actionLayer.draw();
}

Labo.displayGui = function() {
	var zoom = 8;
	
	var policeBtn = new Word("P",null,4); 	policeBtn.setZoom(zoom);
	var nextBtn = new Word(" > ",null,4); 	nextBtn.setZoom(zoom);
	var lastBtn = new Word(" < ",null,4);	lastBtn.setZoom(zoom);

	policeBtn.setX(screenWidth - policeBtn.getWidth());
	policeBtn.setY(screenHeight - policeBtn.getHeight() / 4);
	
	nextBtn.setX(screenWidth - nextBtn.getWidth());
	nextBtn.setY(0);
	
	lastBtn.setX(0);
	lastBtn.setY(0);
	
	policeBtn.display(mainLayer);
	nextBtn.display(mainLayer);
	lastBtn.display(mainLayer);
	
	policeBtn.onTap(function(){Labo.menu()});
	nextBtn.onTap(function(){if(page < Math.ceil(cloud.possibilities.length/cloud.nb_max)){page++;Labo.displayCloud();}});
	lastBtn.onTap(function(){if(page > 1){page--;Labo.displayCloud();}});

	mainLayer.draw();
	actionLayer.draw();
}

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
	setHomeBtn();
	var loading = new Word("Loading");
	loading.setCenterX(screenWidth/2)
	loading.setCenterY(screenHeight/2)
	loading.display(mainLayer);
	mainLayer.draw();
}

scriptLoaded('scripts/labo/laboratory.js');
