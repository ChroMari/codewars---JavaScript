function stockList(listOfArt, listOfCat){
  if (listOfArt == '') return '';
  let arr = [];
  let sum = 0;
  
  for (let i = 0; i < listOfCat.length; i++){
    sum = 0;
    
    for (let j = 0; j < listOfArt.length; j++){
    
      if (listOfArt[j][0] == listOfCat[i]){
        let num = listOfArt[j].split(' ');
        sum = sum + Number(num[1]);
      }
    }
    arr.push('(' + listOfCat[i] + ' : ' + sum + ')');
  }
  return arr.join(' - ');
}
