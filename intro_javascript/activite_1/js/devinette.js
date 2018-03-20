/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombre = 0;

while(nombre !== solution) {
	if ((nombre < 1) || (nombre > 100)) {
         nombre = Number(prompt("Entrez un nombre entre 1 et 100 : "));
    } 
    else {
	    if (nombre < solution) {
	     	nombre = Number(prompt(nombre + " est trop petit, entrer un nouveau nombre entre 1 et 100"));
	     	
	    }
	    else if (nombre > solution) {
	     	nombre = Number(prompt(nombre + " est trop grand, entrer un nouveau nombre entre 1 et 100"));
	     	
	    }
	}	     
	
}
alert("vous avez trouvez !");


