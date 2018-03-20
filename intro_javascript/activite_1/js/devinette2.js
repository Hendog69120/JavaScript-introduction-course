var solution = Math.floor(Math.random() * 100) + 1;  // nb a deviner
var cpt = 0;    // nb de coups
var saisie;
var msg = 'Entrez un nombre entre 1 et 100 : ';

console.log("(La solution est " + solution + ")");


	

do
{
	  
	 saisie = prompt(msg);
	 cpt++;
     // message a afficher au prochain tour :
     if(saisie > solution)
          msg = "C'est moins";
     else
          msg = "C'est plus";



}



while((saisie != solution) && (cpt <= 6))

//while(saisie != solution);
	


alert("Bravo, tu as gagne en " + cpt + " coups !");
 

