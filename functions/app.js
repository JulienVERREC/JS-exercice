function verify(){
	return true;
}		
console.log( verify() );
//exercice 2
function returnthis(bar){
	return bar;
}
console.log(returnthis("affiche moi ça!"));
//exercice 3
function returnthis(bar,foo){
	return bar+foo;
}
console.log(returnthis("affiche moi ça!","et dépêche toi!"));