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
	},
	opacity: {
		light: 1,
		dark: 0.3,
	}
}

var Word_polices = {
	0 : "coupable_haut",
	1 : "coupable_bas",
	2 : "centrale",
	3 : "ombre",
}

// Selon le choix (exemple : '24px'), deviendra la variable rct (RecitConsTantes)
var fontConst = {
	'24px': {
		car: {						// Caractère (lettre)
			size: 24,					// Taille de la police
			color: "white",				// Couleur
			height: 40,					// Hauteur réelle du caractère
		},
		police: {
			name: 0,	// Police (par défaut coupable_haut)
			0 : {			// Police coupable_haut en deux parties
				offset: {				// Décalage y
					up: -2,					// Distance en y pour la partie haute
					down: 19,				// Distance en y pour la partie basse
				},
				name: {					// Nom des deux parties
					up: "DemiHautH",
					down: "DemiHautB",
				},
			},
			1 : {			// Police coupable_haut en deux parties
				offset: {				// Décalage y
					up: -2,					// Distance en y pour la partie haute
					down: 21,				// Distance en y pour la partie basse
				},
				name: {					// Nom des deux parties
					up: "DemiBasH",
					down: "DemiBasB",
				},
			},
		},
	},
	
};

scriptLoaded('scripts/libs/separation_toolkit/word/constantes.js');
