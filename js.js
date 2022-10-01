function maloasc(tab) {
  
  var len = tab.length;       
	var tmp, i, j;                  
	
  for(i = 1; i < len; i++) {
	  tmp = tab[i]
	    j = i - 1
	  while (j >= 0 && tab[j] > tmp) {
		// j = 1 et i = 2
		  tab[j + 1] = tab[j]
		//   tab[2]=tab[1]
		//   tab[2]= 11
		  console.log(tab[0])
		  j--
		//   j = 1
    }
    
	  tab[j + 1] = tmp
	//   tab[2]=2
  }
  return tab
}
var tab = [5, 2, 11, 6, 4, 9, 3];
maloasc(tab);
console.log(tab);

//  maintenant descandant

// function malodesc(arrayDesc) {
// 	var Key, i, j
// 	var Lenght = arrayDesc.length;
// 	for (i = 1; i < Lenght; i++){
// 		Key = arrayDesc[i]
// 		if (Key === 5) {
// 			console.log(11)
// 		}
		
// 	}
// 	return arrayDesc
// }
// var tab = [5, 2, 11, 6, 4, 9, 3];
// malodesc(tab);
// console.log(tab);
