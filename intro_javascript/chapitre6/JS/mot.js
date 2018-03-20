function compterNbVoyelles(mot) {
    var nbVoyelles = 0; 
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase(); //correction
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') || (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }

    return nbVoyelles;
}
function compterNbConsonnes(mot) {
    var nbConsonnes = 0; 
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase(); //correction
        if ((lettre !== 'a') && (lettre !== 'e') && (lettre !== 'i') && (lettre !== 'o') && (lettre !== 'u') && (lettre !== 'y')) {
            nbConsonnes++;
        }
    }

    return nbConsonnes;
}
function inverser(mot) {
    var motInverse = "";
    for (var i = mot.length - 1; i >= 0; i--) {
        motInverse = motInverse + mot[i];
    
    }
    return motInverse; 
}
// correction+++++++++++++++++
function convertirEnLeetSpeek(mot) {
    var motLeet = "";
    for (var i = 0; i < mot.length; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}
function trouverLettreLeet(lettre) {
    
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeet = "4";
        break;
    case "b":
        lettreLeet = "8";
        break;
    case "e":
        lettreLeet = "3";
        break;
    case "l":
        lettreLeet = "1";
        break;
    case "o":
        lettreLeet = "0";
        break;
    case "s":
        lettreLeet = "5";
        break;
    case "t":
        lettreLeet = "7";
        break;
        
    }
    return lettreLeet;
}
//++++++++++++++

var mot = prompt("Entrer un mot") ;
var longueurMot = mot.length;
var motInitial = mot;
var motEnMinuscules = motInitial.toLowerCase();
var motEnMajuscules = motInitial.toUpperCase();
    
console.log("Le "+mot+" contient "+longueurMot+" caractères");
console.log("Il s'écrit en minuscule "+motEnMinuscules);
console.log("Il s'écrit en majuscule "+motEnMajuscules);
console.log("Ce mot contient "+compterNbVoyelles(mot)+" voyelle(s) et "+compterNbConsonnes(mot)+" consonne(s)");
console.log("Il s'écrit à l'envers " + inverser(mot));

if (inverser(mot) === motInitial) {
    	console.log( "Ce mot n'est pas un palindrome");
    }
    else if (inverser(mot) !== motInitial) {
    	console.log("Ce mot n'est pas un palindrome");
    }
//corrction +++++
var motLeetSpeak = convertirEnLeetSpeek(motInitial);
console.log("Il s'écrit en leet speak " + motLeetSpeak);

	










