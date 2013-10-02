function getTutorielMenu() {
  clearStage();
  setHomeBtn();
  
  inTuto = true;
  
  var lang = ((activeLang == fr) ? tuto_fr : tuto_en);
  
  var middleVertical = stage.getHeight() / 2;
  var middleHorizontal = stage.getWidth() / 2;

  var instructions = new Kinetic.Text( {
	x : 0,
	y : 0,
	fill : "#FFF",
	text : lang['instruction'],
	fontFamily : "DemiHaut",
	fontSize : entireSize
  } );
  
  var cut_word = new ActiveWord( lang['upStart'] , lang['upEnd'] , Transition["up"] );
  var shadow_word = new ActiveWord( lang['shadowStart'] , lang['shadowEnd'] , Transition["shadow"] );
  var central_word = new ActiveWord( lang['centralStart'] , lang['centralEnd'] , Transition["central"] );
  
  cW = cut_word.value.group;
  cW.setPosition( { x : middleHorizontal-(cW.getWidth()/2) , y : middleVertical-(cW.getHeight()/2) } );
  
  hand_tuto.setPosition( { x : middleHorizontal, y : middleVertical } );
  
  mainLayer.add(cW);
  //mainLayer.add(hand_tuto);
  mainLayer.draw();
}

  // cut
  /*if(lock == 0 || lock == 1){
    var anim;
	var rub_group_opacity = rub_word.group.getOpacity();

    var cut_activation = function(){
      node_dark(normal_words);
      node_zoom(cut_word.group, 2);
      node_set_opacity(rub_word.group, 0.25 * rub_word.group.getOpacity());
      node_dark(tear_word.group); 

      setTimeout(function(){ // attente pour récupérer les bons zooms
        anim = new Separation.cut_animation(cut_word);
        anim.start(); 
      }, 2000);
    }

    cut_word.group.on(events['tap'], function(){
      if(lock == 0){
        lock = 1;
        cut_activation();
        setTimeout(function(){ // attente pour récupérer les bons zooms
          anim.play();          

          var cut_unZoom = new Separation.onCorner();
          cut_unZoom.on(function(){
            cut_desactivation();
            lock = 0;
          });
        }, 2000);
      }
    });
  }

  // rub
  if(lock == 0 || lock == 2){
    var anim;

    var rub_activation = function(){
      node_dark(normal_words);
      node_dark(cut_word.group);
      node_zoom(rub_word.group, 2);
      node_dark(tear_word.group);

      setTimeout(function(){ // attente pour récupérer les bons zooms
        anim = new Separation.rub_animation(rub_word);
        anim.start();       
      }, 2000);
    }

    rub_word.group.on(events['tap'], function(){
      if(lock == 0){
        lock = 2;
        rub_activation();
        setTimeout(function(){
          anim.play();

          var rub_unZoom = new Separation.onCorner();
          rub_unZoom.on(function(){
            rub_desactivation();
            lock = 0;
          });
        }, 2000); 
      }
    });
  }

  // tear
  if(lock == 0 || lock == 3){
    var anim;
	var rub_group_opacity = rub_word.group.getOpacity();
    
    var tear_activation = function(){
      node_dark(normal_words);
      node_dark(cut_word.group);
      node_set_opacity(rub_word.group, 0.25 * rub_word.group.getOpacity());
      node_zoom(tear_word.group, 2);

      setTimeout(function(){
        anim = new Separation.tear_animation(tear_word);
        anim.start();
      }, 2000)
    }

    tear_word.group.on(events['tap'], function(){
      if(lock == 0){
        lock = 3;
        tear_activation();

        setTimeout(function(){ // attente pour récupérer les bons zooms
          anim.play();       

          var tear_unZoom = new Separation.onCorner();
          tear_unZoom.on(function(){
            tear_desactivation();
            lock = 0;
          });
        }, 2000);
      }
    });
  }*/