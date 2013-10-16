//Creating the main menu interface
function initMainMenu() {
	//sounds['ambiant'].stop();

	mainLayer.draw();
	actionLayer.draw();
	mainLayer.removeChildren();
	actionLayer.removeChildren();
	mainLayer.draw();
	actionLayer.draw();
	mainLayer.clear();
	actionLayer.clear();

	opacite = 0.5;

	tutorielH = new Kinetic.Text( {
		text : activeLang["tuto"],
		fontFamily : "DemiHautH",
		fontSize : demiSize/2,
		fill : "#FFF",
		align : "center",
		x : stage.getWidth()/2,
		y : stage.getHeight()*0.75,
		opacity: opacite
	} );
	tutorielH.setOffset( tutorielH.getWidth()/2, tutorielH.getHeight()/2 );

	tutorielB = new Kinetic.Text( {
		text : activeLang["tuto"],
		fontFamily : "DemiHautB",
		fontSize : demiSize/2,
		fill : "#FFF",
		align : "center",
		offset : { x :tutorielH.getWidth()/2,
			y : tutorielH.getHeight()/2 },
			x : stage.getWidth()/2,
			y : tutorielH.getY()+stage.getHeight()*0.025,
			opacity: opacite
		} );

	tutoriel = new Kinetic.Rect( {
		listening : true,
		width : tutorielH.getWidth()*1.5,
		height : tutorielH.getHeight() + tutorielB.getHeight(),
		x : tutorielH.getX()-(tutorielH.getWidth()*0.5)+(tutorielH.getWidth()*0.25),
		y : tutorielH.getY(),
		offset : tutorielH.getOffset(),
		opacity : 0
	} );

	recitH = new Kinetic.Text( {
		text : activeLang["story"],
		fontFamily : "DemiHautH",
		fontSize : 4 * (demiSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth()/5,
		y : stage.getHeight()/2
	} );
	recitH.setOffset( recitH.getWidth()/2, recitH.getHeight()/2 );

	recitB = new Kinetic.Text( {
		text : activeLang["story"],
		fontFamily : "DemiHautB",
		fontSize : 4 * (demiSize/2),
		fill : "#FFF",
		align : "center",
		offset : { x :recitH.getWidth()/2,
			y : recitH.getHeight()/2 },
			x : stage.getWidth()/5,
			y : recitH.getY()+stage.getHeight()*0.110
		} );

	recit = new Kinetic.Rect( {
		listening : true,
		width : recitH.getWidth()*1.5,
		height : recitH.getHeight() + recitB.getHeight(),
		x : recitH.getX()-(recitH.getWidth()*0.5)+(recitH.getWidth()*0.25),
		y : recitH.getY(),
		offset : recitH.getOffset(),
		opacity : 0
	} );

	laboratoireH = new Kinetic.Text( {
		text : activeLang["labo"],
		fontFamily : "DemiHautH",
		fontSize : 4 * (demiSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth() / 5 * 4,
		y : stage.getHeight()/2
	} );
	laboratoireH.setOffset( laboratoireH.getWidth()/2, laboratoireH.getHeight()/2 );
	laboratoireB = new Kinetic.Text( {
		text : activeLang["labo"],
		fontFamily : "DemiHautB",
		fontSize : 4 * (demiSize/2),
		fill : "#FFF",
		align : "center",
		offset : { x :laboratoireH.getWidth()/2,
			y : laboratoireH.getHeight()/2 },
			x : stage.getWidth()/5 * 4,
			y : laboratoireH.getY() + stage.getHeight()*0.110
		} );

	laboratoire = new Kinetic.Rect( {
		listening : true,
		width : laboratoireH.getWidth()*1.5,
		height : laboratoireH.getHeight() + laboratoireB.getHeight(),
		x : laboratoireH.getX()-(laboratoireH.getWidth()*0.5)+(laboratoireH.getWidth()*0.25),
		y : laboratoireH.getY(),
		offset : laboratoireH.getOffset(),
		opacity : 0
	} );

	conceptH = new Kinetic.Text( {
		text : activeLang["concept"],
		fontFamily : "DemiHautH",
		fontSize : demiSize/2,
		fill : "#FFF",
		align : "center",
		x : stage.getWidth()/2,
		y : stage.getHeight()*0.85,
		opacity: opacite
	} );
	conceptH.setOffset( conceptH.getWidth()/2, conceptH.getHeight()/2 );
	conceptB = new Kinetic.Text( {
		text : activeLang["concept"],
		fontFamily : "DemiHautB",
		fontSize : demiSize/2,
		fill : "#FFF",
		align : "center",
		offset : { x :conceptH.getWidth()/2,
			y : conceptH.getHeight()/2 },
			x : stage.getWidth()/2,
			y : conceptH.getY()+ stage.getHeight()*0.025,
			opacity: opacite
		} );

	concept = new Kinetic.Rect( {
		listening : true,
		width : conceptH.getWidth()*1.5,
		height : conceptH.getHeight() + conceptB.getHeight(),
		x : conceptH.getX()-(conceptH.getWidth()*0.5)+(conceptH.getWidth()*0.25),
		y : conceptH.getY(),
		offset : conceptH.getOffset(),
		opacity : 0
	} );

	fr_w = new Kinetic.Text( {
		text : 'fr',
		fontFamily : "DemiHaut",
		fontSize : 1.2 * (entireSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth() / 2,
		y : stage.getHeight() * 0.2,
		listening : true,
		opacity: opacite / 3
	} );

	en_w = new Kinetic.Text( {
		text : 'en',
		fontFamily : "DemiHaut",
		fontSize : 1.2 * (entireSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth() / 2,
		y : stage.getHeight() * 0.2,
		listening : true,
		opacity: opacite
	} );

	trait = new Kinetic.Text( {
		text : '|',
		fontFamily : "DemiHaut",
		fontSize : 1.2 * (entireSize/2),
		fill : "#FFF",
		align : "center",
		x : stage.getWidth() / 2,
		y : stage.getHeight() * 0.2,
		opacity: opacite
	} );

	lang_size = fr_w.getWidth() + en_w.getWidth() + trait.getWidth();
	fr_w.setOffset(lang_size / 2, 0);
	trait.setOffset(lang_size / 2 - fr_w.getWidth(), 0);
	en_w.setOffset(lang_size / 2 - fr_w.getWidth() - trait.getWidth(), 0);


	tutoriel.on(events['tap'], function() {
		var langue = "fr";
		if(activeLang == en) {
			langue = "en";
		}
		getTutorielMenu(langue);
	} );
	recit.on(events['tap'], function() {
		var langue = "fr";
		if(activeLang == en) {
			langue = "en";
		}
		Recit.start();
	});
	laboratoire.on(events['tap'], function() {
		//if(navigator.connection.type == Connection.NONE)
		//{
			//var errorMsg = "";
			//if(activeLang == fr) {
				//errorMsg = "Impossible d'utiliser le labo des mots : aucune connection détectée.";
			//}
			//else {
				//errorMsg = "Can not use the word lab : no connection detected.";
			//}
			//alert(errorMsg);
		//}
		//else {
			Labo.start();
//		}
	} );
	concept.on(events['tap'], function() {
		getConceptMenu();
	} );
	fr_w.on(events['tap'], function() {
		fr_w.setOpacity(opacite/3);
		en_w.setOpacity(opacite);
		changeLanguage(fr);
	});
	en_w.on(events['tap'], function(){
		en_w.setOpacity(opacite/3);
		fr_w.setOpacity(opacite);
		changeLanguage(en);
	});

	// setTimeout important, résolution d'un bug
	setTimeout(getMainMenu, 1);
}


/*Displaying the main menu interface*/
function getMainMenu() {
	inTuto = false;
	inLab = false;

	mainLayer.add(tutorielH);
	mainLayer.add(tutorielB);
	mainLayer.add(recitH);
	mainLayer.add(recitB);
	mainLayer.add(laboratoireH);
	mainLayer.add(laboratoireB);
	mainLayer.add(conceptH);
	mainLayer.add(conceptB);
	mainLayer.add(fr_w);
	mainLayer.add(en_w);
	mainLayer.add(trait);

	actionLayer.add(tutoriel);
	actionLayer.add(recit);
	actionLayer.add(laboratoire);
	actionLayer.add(concept);

	mainLayer.draw();
	actionLayer.draw();
}
