/*console.log("Début du programme");
var nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    nombre++; /* IMPORTANT pour éviter une boucle infinie
}
console.log("Fin du programme");


while (condition) {
    // instructions exécutées tant que la condition est vérifiée
}
*/
/*
var compteur;
for (compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}

*/
/*
for (initialisation; condition; étape) {
    // instruction executées tant que la condition est vérifiée
}
+++++++++++++
Très souvent,  on n'a pas besoin d'utiliser la variable compteur en dehors du corps de la boucle. Dans ce cas, on peut la déclarer en même temps qu'on l'initialise dans la boucle. 
Notre programme d'exemple peut être réécrit ainsi :

for (var compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
+++++++++++++++++++
*/
/*
for (var compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
    compteur++; // La variable est modifiée dans le corps de la boucle
}
A chaque tour de boucle, la variable compteur est incrémentée deux fois : dans le corps de la boucle, puis dans l'étape exécutée à la fin de chaque tour.
résultat obtenu 1-3-5
*/
/*
++++++++++++++++++++++++++++++++++++
BERTRAND++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++
var lettre = "";
while (lettre !== "X") {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}

var lettre = "";
for (; lettre !== "X";) {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}
En conclusion, le choix entre un while et un for dépend du contexte. Toutes les boucles peuvent s'écrire avec un while. 
Si on peut prévoir à l'avance le nombre de tours de boucles à effectuer, la boucle for est le meilleur choix. Sinon, il vaut mieux utiliser le while.
*/

