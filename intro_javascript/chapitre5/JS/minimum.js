//compare 2 nombres et renvoie le plus petit
//entrées : a et b 2 nombres
//renvoie le plus petit des 2 nombres
function min(a, b) {
   
    if ((typeof a === 'number') && (typeof b === 'number')) {
    	
        return Math.min(a, b);
	} else {
		return "Ceci n'est pas un nombre"}
} // TODO : écrire la fonction min()

console.log(Math.min(4.5, 5)); // Doit afficher 4.5
console.log(min("abcd", 5));
console.log(Math.min(19, 9)); // Doit afficher 9
console.log(Math.min(1, 1)); // Doit afficher 1

/*

function min(a,b) {
	if (a < b) {
	   return a;
	} else {
	    return b;
	}
}
console.log(min("0.5", 1)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 9
console.log(min(1, 1)); // Doit afficher 1
*/

