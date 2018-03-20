var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");
} else if (nombre < 0) {
    console.log(nombre + " est négatif");
} else {
    console.log(nombre + " est nul");
}
if ((nombre >= 0) && (nombre <= 100)) {
    console.log(nombre + " est compris entre 0 et 100");
}   
if ((nombre < 0) || (nombre > 100)) {
    console.log(nombre + " n'est pas compris entre 0 et 100");
}


/* if (condition) {
    // instructions exécutées quand la condition est vraie
}
*/

/*if (true) {
    // la condition du if est toujours vraie :
    // les instructions de ce bloc seront toujours exécutées
}
if (false) {
    // la condition du if est toujours fausse :
    // les instructions de ce bloc ne seront jamais exécutées
}
++++++++++++++++++
if (condition) {
    // instructions exécutées quand la condition est vraie
}
else {
    // instructions exécutées quand la condition est fausse
}
*/
/*
console.log((true) && true); // Affiche true
console.log(true && false); // Affiche false
console.log(false && true); // Affiche false
console.log(false && false); // Affiche false
*/
/*
if ((nombre < 0) || (nombre > 100)) {
    console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}
console.log(true || true); // Affiche true
console.log(true || false); // Affiche true
console.log(false || true); // Affiche true
console.log(false || false); // Affiche false
*/

/*

===

Egal à

!==

Différent de

<

Inférieur à

<=

Inférieur ou égal à

>

Supérieur à

>=

Supérieur ou égal à
*/
