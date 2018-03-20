// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {
	init: function(nom, race, taille) {
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	},

	aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }
}
var nom = Object.create(Chien);

nom.intnom = function(nom, race, taille) {
	this.intChien(nom, race, taille);
	

};
nom.decrire = function() {
	var description = this.nom + " est un " + this.race + ", sa taille est de " + this.taille + " cm.";
	return description;

}
    
var crokdur = Object.create(nom);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(nom);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());