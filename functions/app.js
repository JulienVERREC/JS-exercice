function verify(){
	return true;
}		
console.log( verify() );
//exercice 2
function returnthat(bar){
	return bar;
}
console.log(returnthat("affiche moi ça!"));
//exercice 3
function returnthis(bar,foo){
	return bar+foo;
}
console.log(returnthis("affiche moi ça!","et dépêche toi!"));
//exercice 4
function compar(chiffre1,chiffre2){
 if(chiffre1>chiffre2){
 	return "le premier nombre est plus grand";
 }
 else if(chiffre1<chiffre2){
    return "le premier nombre est plus petit";
 }
 else {
 	return "les deux nombres sont identiques";
 }

}
console.log(compar(4,4));