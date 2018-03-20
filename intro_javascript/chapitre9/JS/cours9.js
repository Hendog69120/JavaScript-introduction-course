var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films.length); // Affiche 3

++++++++++
var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}
Pour parcourir le tableau

ou

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.forEach(function (film) {
    console.log(film);
});

 /*Attention à bien écrireforEach() avec un E majuscule, et à distinguer le tableau (icifilms) de l'élément passé à la fonction (icifilm). 
On voit ici l'intérêt de nommer les variables tableaux au pluriel.*/

Ajouter un élément

var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.push("Les Bronzés");

console.log(films[3]); // Affiche "Les Bronzés"

ajouter des infos sur chaques films

var films = ["Le loup de Wall Street", 2013, "Vice-Versa", 2015, "Babysitting", 2013];

var Film = {
    // Initialise le film
    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);
// ...

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {
    console.log(film.decrire());
});
