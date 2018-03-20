var note = prompt("Veuillez saisir votre moyenne générale au Baccalauréat")
if (note <= 10) {
	console.log("Vous êtes recalé");
	alert("vous êtes recalé");
}
if ((note >= 10) && (note <= 12)){
	console.log("Vous êtes admis");
	alert("vous êtes admis");
}
if ((note >= 12) && (note <= 14)){
	console.log("Vous êtes admis, mention assez bien");
	alert("vous êtes admis, mention assez bien");
}
if ((note >= 14) && (note <= 16)){
	console.log("Vous êtes admis, mention bien");
	alert("vous êtes admis, mention bien");
}
if ((note >= 16) && (note <= 20)){
	console.log("Vous êtes admis, mention très bien");
	alert("vous êtes admis, mention très bien");
}