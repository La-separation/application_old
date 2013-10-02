function introductionStage() {
	//sounds['ambiant'].play();
	mainLayer.removeChildren();
	actionLayer.removeChildren();

	logo = new Logo();
	zoom_logo = 1/3 * stage.getHeight() / logo.getHeight();
	logo.overall.setAttrs({
		scaleX: zoom_logo,
		scaleY: zoom_logo,
		x: stage.getWidth() / 2,
		y: stage.getHeight() / 2
	});
	rect_logo = new Kinetic.Rect({
		x: (stage.getWidth() - logo.getWidth()*zoom_logo) / 2,
		y: (stage.getHeight() - logo.getHeight()*zoom_logo) / 2,
		width: logo.getWidth()*zoom_logo,
		height: logo.getHeight()*zoom_logo
	})

separation_size_font = stage.getHeight() / 16;
	separ_haut = new Kinetic.Text({
		x: stage.getWidth() / 2,
		y: stage.getHeight() / 2,
		text: 'la separation',
		fontSize: separation_size_font,
		fontFamily: 'DemiHautH',
		fill: '#FFF',
		opacity: 0
	});
	separ_haut.setOffset({
		x: separ_haut.getWidth() / 2,
		y: separ_haut.getHeight()
	});

	separ_bas = new Kinetic.Text({
		x: stage.getWidth() / 2,
		y: stage.getHeight() / 2,
		text: 'la separation',
		fontSize: separation_size_font,
		fontFamily: 'DemiHautB',
		fill: '#FFF',
		opacity: 0
	});
	separ_bas.setOffset({
		x: separ_bas.getWidth() / 2,
		y: - separ_bas.getHeight() + separation_size_font
	});

	var tween1, tween2, tween3, tween4, tween5, tween6, tween7, tween8;

	mainLayer.add(logo.overall);
	mainLayer.add(separ_haut);
	mainLayer.add(separ_bas);
	mainLayer.add(rect_logo);
	
	function logo_anim(){
		tween1 = new Kinetic.Tween({
			node: logo.overall,
			duration: 2,
			easing: Kinetic.Easings.StrongEaseInOut,
			rotation: Math.PI / 2,
			x: stage.getWidth() / 2
		})
		tween1.play();	

		setTimeout(function(){
			tween1.finish();

			tween2 = new Kinetic.Tween({
				node: logo.arc_haut,
				duration: 6,
				easing: Kinetic.Easings.StrongEaseInOut,
				y: - stage.getWidth() * 2
			})
			tween2.play();

			tween3 = new Kinetic.Tween({
				node: logo.arc_bas,
				duration: 6,
				easing: Kinetic.Easings.StrongEaseInOut,
				y: stage.getWidth() * 2
			})
			tween3.play();

			tween4 = new Kinetic.Tween({
				node: logo.line,
				duration: 2,
				easing: Kinetic.Easings.StrongEaseInOut,
				opacity: 0
			})
			tween4.play();	
		}, 2000);
	}

	function separ_anim(){
		tween4.finish();

		tween5 = new Kinetic.Tween({
			node: separ_haut,
			duration: 2,
			easing: Kinetic.Easings.StrongEaseInOut,
			opacity: 1
		})
		tween5.play();

		tween6 = new Kinetic.Tween({
			node: separ_bas,
			duration: 2,
			easing: Kinetic.Easings.StrongEaseInOut,
			opacity: 1
		})
		tween6.play();
	}

	declenched = false;

	function cut_anim(){
		tween7 = new Kinetic.Tween({
			node: separ_bas,
			duration: 4,
			easing: Kinetic.Easings.StrongEaseInOut,
			y: - separ_bas.getHeight(),
			opacity: 0
		})
		tween7.play();

		tween8 = new Kinetic.Tween({
			node: separ_haut,
			duration: 4,
			easing: Kinetic.Easings.StrongEaseInOut,
			y: stage.getHeight() + separ_haut.getHeight(),
			opacity: 0
		})
		tween8.play();	

		setTimeout(function(){
			tween1.destroy();
			tween2.destroy();
			tween3.destroy();
			tween4.destroy();
			tween5.destroy();
			tween6.destroy();
			tween7.destroy();
			tween8.destroy();
			logo.overall.destroy();
			separ_haut.destroy();
			separ_bas.destroy();
			rect_logo.destroy();
			mainLayer.clear();
			actionLayer.clear();
			initMainMenu();
		}, 4000);
	}

	function separ_cut(){
		cut = new Separation.cut({
			x: separ_haut.getX() - separ_haut.getOffsetX(),
			y:	separ_haut.getY() - separ_haut.getOffsetY(),
			width: separ_haut.getWidth(),
			height: separ_haut.getHeight() * 2
		})

		cut.on(function(){
			declenched = true;

			cut_anim();
		});
	}

	rect_logo.on(events['tap'], function(){
		logo_anim();

		setTimeout(function(){
			separ_anim();
		}, 4000)

		setTimeout(function(){
			separ_cut();
		}, 6000);

		setTimeout(function(){
			if(declenched == false){
				cut_anim();
				declenched = true;
			}
		}, 12000);
	})	

	mainLayer.draw();
	actionLayer.draw();
}