/**
	Namespace Labo
**/
var Labo = {};

var Labo_max_possibilities = 100;
var word_searched = "";
var page = null;
var cloud = null;
var polices = new Array();

Labo.start = function() {	
	Destroy.all();
	word_searched = prompt("Choisissez un mot :");
	if (word_searched!="" && word_searched!=null) {
		Labo.menu();
	}
}

Labo.menu = function() {
	Destroy.all();
	Gui.homeBtn();
	page=1;

	polices.push(new Array(new Word ("coupable haut minuscule",null,0) , "coupable_min_haut", 1));
	polices.push(new Array(new Word ("COUPABLE HAUT MAJUSCULE",null,0) , "coupable_maj_haut", 0));
	polices.push(new Array(new Word ("coupable bas minuscule",null,1) , "coupable_min_bas", 1));
	polices.push(new Array(new Word ("COUPABLE BAS MAJUSUCLE",null,1) , "coupable_maj_bas", 0));
	
	for (var i=0; i<polices.length; i++) {
		polices[i][0].setCenterX(screenWidth/2);
		polices[i][0].setCenterY((screenHeight/(polices.length+1))*(i+0.5));
		polices[i][0].display(mainLayer);
		
		polices[i][0].onTap(function(p, c){
		return function() { setTimeout(function(){
				for (var j=0; j < polices.length; j++) {
					Destroy.objet(polices[j][0]);
					polices = new Array();
				}
				Labo.generateCloud(p, c);
			}, 100)
		}
		}(polices[i][1], polices[i][2]));
	}

	mainLayer.draw();
	actionLayer.draw();
};

Labo.generateCloud = function(police, casse) {
	Destroy.all();
	loadingImg();
	
	cloud = new Cloud();
	cloud.addCentralWord(new Word(word_searched, null, Word_getNormalizedPolice(police)));

	setTimeout(function(){
		//cloud.setPossibilities(Xml.importLabRequest("XML/lab_request.xml", cloud.getCentralWord()));
		// http://192.185.52.237/~lasepa/beta/words.php?procedes=coupable_min_bas&word=utc&casse=1
		cloud.setPossibilities(Xml.importLabRequest('http://192.185.52.237/~lasepa/beta/words.php?procedes=' + police + '&word=' + word_searched + '&casse=' + casse, cloud.getCentralWord()));
		Labo.displayCloud();
	}, 1);
}

Labo.displayCloud = function() {
	Destroy.all();
	Gui.laboDisplayAll();

	cloud.generate(page);
	cloud.display(mainLayer);
	mainLayer.draw();
	actionLayer.draw();
}

Labo.destroy = function() {
	Destroy.objet(cloud);
	Destroy.tab(polices);
}

function loadingImg() {
	Gui.homeBtn();
	var loading = new Word("Loading");
	loading.setCenterX(screenWidth/2)
	loading.setCenterY(screenHeight/2)
	loading.display(mainLayer);
	mainLayer.draw();
}

scriptLoaded('scripts/labo/laboratory.js');
