/*
 * Geste qui détecte le scroll d'une histoire
 *
 * @param {Object} paramètres pour dessiner le rectangle : taille du rectangle, placement du rectangle
 * @param {Text} type de coupure : "t_d" pour top to down, "d_t" pour le contraire, toutes les autres valeurs pour les deux sens
 * déclenche la fonction handler dès que la fonction repère un mouvement de coupure
 * faire attention à définir la fonction après les autres variables pour que le rectangle soit au premier plan
 */
Separation.scroll = function(params, type){
  var detect = new Separation.vertical_move(params);

  this.on = function(handler) {
    detect.on(function(){
      if (type != "t_d") {detect.topToDown(handler);}
      if (type != "d_t") {detect.downToTop(handler);}
    });
  }
};


scriptLoaded('scripts/libs/separation_toolkit/gesture/story_scroll.js');