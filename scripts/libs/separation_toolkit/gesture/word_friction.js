/*
 * Geste qui détecte le frottement d'un mot
 *
 * @param {Object} paramètres pour dessiner le rectangle : taille du rectangle, placement du rectangle
 * déclenche la fonction handler dès que la fonction repère un mouvement de frottement
 * penser à coder une fonction qui procède par paliers
 * faire attention à définir la fonction après les autres variables pour que le rectangle soit au premier plan
 */
Separation.rub = function(params){
  var detect = new Separation.horizontal_move(params, actionLayer, stage);

  this.on = function(handler) {
    var state = true;

    detect.on(function(){
      if(state) {
        detect.rightToLeft(function(){
          handler()
          state = false;
        });
      } else {
        detect.leftToRight(function(){
          handler()
          state = true;
        });
      }
    });
  }
};


scriptLoaded('scripts/libs/separation_toolkit/gesture/word_friction.js');