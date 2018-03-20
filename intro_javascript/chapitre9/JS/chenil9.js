var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }


};
var nom = Object.create(Chien);

nom.intnom = function(nom, race, taille) {
    this.intChien(nom, race, taille);
    
}

nom.decrire = function() {
    var description = this.nom + " est un " + this.race + " mesurant " + this.taille +
                          " cm. Il aboie : " + aboiement;
    return description;
}

var crokdur = Object.create(nom);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm. Il aboie : " + crokdur.aboyer());

var pupuce = Object.create(nom);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm. Il aboie : " + pupuce.aboyer());


var médor = Object.create(nom);
médor.init("Médor", "labrador", 58);
console.log(médor.nom + " est un " + médor.race + " mesurant " + médor.taille + " cm. Il aboie : " + médor.aboyer());

