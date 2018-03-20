var nombre = Number(prompt("Entrez un nombre :")); 
while( nombre <= 10)
 {
    if (nombre % 2 === 0) {
        console.log(nombre + " est pair");
        nombre++;
    }
    if (nombre % 2 !== 0) {
    	console.log(nombre +" est impaire");
    	nombre++;
    }
}
/*

COMMENT AFFICHER 10 NOMBRES PRECISEMENT PEUT IMPORTE LE NOMBRE INITIALE ????

console.log(10 % 2); // Affiche 0 car 10 = 5 * 2 + 0
console.log(11 % 2); // Affiche 1 car 11 = 5 * 2 + 1

console.log(18 % 3); // Affiche 0 car 18 = 3 * 6 + 0
console.log(19 % 3); // Affiche 1 car 19 = 3 * 6 + 1
console.log(20 % 3); // Affiche 2 car 20 = 3 * 6 + 2
*/