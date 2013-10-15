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

// Selon le choix (exemple : '24px'), deviendra la variable rct (RecitConsTantes)
var fontConst = {
	'24px': {
		car: {						// Caractère (lettre)
			size: 24,					// Taille de la police
			color: "white",				// Couleur
			height: 40,					// Hauteur réelle du caractère
		},
		police: {
			name: 'coupable_haut',	// Police (par défaut coupable_haut)
			coupable_haut: {			// Police coupable_haut en deux parties
				offset: {				// Décalage y
					up: -2,					// Distance en y pour la partie haute
					down: 19,				// Distance en y pour la partie basse
				},
				name: {					// Nom des deux parties
					up: "DemiHautH",
					down: "DemiHautB",
				},
			},
			coupable_bas: {			// Police coupable_haut en deux parties
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