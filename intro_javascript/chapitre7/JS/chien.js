// TODO : ajoutez ici la définition de l'objet chien
var chien = {
	name : "Crockdur",
	race : "mâlin de Naples",
	size : 75,

	aboyer : function() {
		var aboiement = "Grrr ! Grrr!";

		   return aboiement;
	}
}

console.log(chien.name + " est un " + chien.race + " mesurant " + chien.size + " cm");
console.log("Tiens, un chat ! " + chien.name + " aboie : " + chien.aboyer());