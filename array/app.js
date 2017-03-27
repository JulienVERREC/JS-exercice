var mois = ['janvier','février','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','décembre'];
//exercice 1
console.log(mois);
//exercice 2
console.log(mois[2]);
//exercice 3
console.log([4]);
//exercice 4
console.log(mois[10]);
//exercice 5
mois.splice(8,0,"août");
console.log(mois);
mois.splice(7,1);
console.log(mois);
//exercice 6
var i = mois
for(var i=0;i<mois.length;i++){
	console.log(mois[i]);
}
//exercice 7
var array = ['Pomme','Cerise','Tomate','Citron', ['Orange','Poivron']];
//exercice 8
array.splice(5,0,"courgette");
console.log(array);