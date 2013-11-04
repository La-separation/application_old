var Word_cst = {
	zoom: {
		recit: 2,
	},
	duration: {
		zoom: 1,
		zoomout: 1,
		opacity: 1,
		downCut: 2,
		upCut: 2,
		ombre: 2,
		},
	opacity: {
		light: 1,
		dark: 0.3,
	}
}

var Word_polices = {
	0 : 'coupable_haut',
	1 : 'coupable_bas',
	2 : 'centrale',
	3 : 'ombre',
	4 : 'coupable_haut_entier',
}

function Word_getNormalizedPolice(police) {
	switch (police) {
		case 'coupable_min_haut' :
		case 'coupable_maj_haut' :
		case 'coupable_haut' :
			return 0;
		case 'coupable_min_bas' :
		case 'coupable_maj_bas' :
		case 'coupable_bas' :
			return 1;
		case 'centrale' :
			return 2;
		case 'ombre' :
			return 3;
		case 'coupable_haut_entier' :
			return 4;
	}
	return 0;
}

// Selon le choix (exemple : '24px'), deviendra la variable rct (RecitConsTantes)
var fontConst = {
	'24px': {
		car: {						// Caractère (lettre)
			size: 24,					// Taille de la police
			color: 'white',				// Couleur
			height: 40,					// Hauteur réelle du caractère
		},
		police: {
			name: 0,	// Police (par défaut coupable_haut)
			0: {			// Police coupable_haut en deux parties
				offset: {				// Décalage y
					up: -2,					// Distance en y pour la partie haute
					down: 19,				// Distance en y pour la partie basse
				},
				name: {					// Nom des deux parties
					up: 'DemiHautH',
					down: 'DemiHautB',
				},
			},
			5: {			// Police coupable_haut en deux parties avec écart
				offset: {				// Décalage y
					up: -3,					// Distance en y pour la partie haute
					down: 20,				// Distance en y pour la partie basse
				},
				name: {					// Nom des deux parties
					up: 'DemiHautH',
					down: 'DemiHautB',
				},
			},
			1: {			// Police coupable_bas en deux parties
				offset: {				// Décalage y
					up: -2,					// Distance en y pour la partie haute
					down: 21,				// Distance en y pour la partie basse
				},
				name: {					// Nom des deux parties
					up: 'DemiBasH',
					down: 'DemiBasB',
				},
			},
			2: {			// Police centrale en trois parties
				offset: {				// Décalage y
					up: -8,					// Distance en y pour la partie haute
					central: 6,
					down: 16,				// Distance en y pour la partie basse
				},
				name: {					// Nom des trois parties
					up: 'CentraleH',
					central: 'CentraleC',
					down: 'CentraleB',
				},
			},
			3: {				// Police de l'ombre
				offset: -5,
			},
			4: {				// Police coupable haut entier en une partie
				offset: 0,			// Décalage y
				name: 'DemiHaut',	// Nom de la police
			},
		},
		recit: {
			margin: {				// Marge...
				up: 12,					// ... supérieure (size/2)
				down: 12,				// ... inférieure
			},
			line: {				// Ligne
				height: 64,			// Hauteur
				nb: 1,				// Nombre de lignes
			},
		},
	},
	// A ne pas utiliser car pas dispo pour la police centrale, attendre que toutes lesp olices soient faites
	/*
	'14px': {
		car: {						// Caractère (lettre)
			size: 14,					// Taille de la police
			color: 'white',				// Couleur
			height: 24,					// Hauteur réelle du caractère
		},
		police: {
			name: 0,				// Police (par défaut coupable_haut)
			0: {						// Police coupable_haut en deux parties
				offset: {					// Décalage y
					up: -1,						// Distance en y pour la partie haute
					down: 12,					// Distance en y pour la partie basse
				},
				name: {					// Nom des deux parties
					up: 'DemiHautH',
					down: 'DemiHautB',
				},
			},
			1: {					// Police coupable_bas en deux parties
				offset: {				// Décalage y
					up: -1,					// Distance en y pour la partie haute
					down: 13,				// Distance en y pour la partie basse
				},
				name: {					// Nom des deux parties
					up: 'DemiBasH',
					down: 'DemiBasB',
				},
			},
		},
		recit: {
			margin: {				// Marge...
				up: 6,					// ... supérieure (size/2)
				down: 6,				// ... inférieure
			},
			line: {				// Ligne
				height: 36,			// Hauteur
				nb: 1,				// Nombre de lignes
			},
		},
	},
	*/
};

scriptLoaded('scripts/libs/separation_toolkit/word/constantes.js');
