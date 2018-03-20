var cercle = {

// TODO : ajoutez ici la définition de l'objet cercle
    perimetre:function() {
     	return 2 * rayon * Math.PI;
    }


};

var cercle2 = {

	aire:function() {
        return Math.pow(rayon, 2) * Math.PI;
    }
}
var rayon = Number(prompt("Entrez le rayon d'un cercle :"));

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle2.aire());