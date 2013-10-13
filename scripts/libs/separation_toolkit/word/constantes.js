function setPolice(rct, police) {
	rct.police = police;
}

// Selon le choix (exemple : '24px'), deviendra la variable rct (RecitConsTantes)
var fontConst = {
	'24px': {
		car: {						// Caractère (lettre)
			size: 24,					// Taille de la police
			color: "white",				// Couleur
			height: 40,					// Hauteur réelle du caractère
			margin: {					// Marge...
				up: 12,					// ... supérieure (size/2)
				down: 12,				// ... inférieure
			},
		},
		police: {
			name: 'coupable_bas',	// Police (par défaut coupable_haut)
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

var wordOpacity = {
	word: {
		light: 1,
		dark: 0.3,
	}
};