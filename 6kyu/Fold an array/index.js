function foldArray(array, runs){
  var final = [];
  var newArray = array.slice();

  while(newArray.length > 1){
    final.push(newArray[0] + newArray[newArray.length -1]);
    newArray = newArray.slice(1, newArray.length-1);
  }
  
  if(newArray.length > 0){
    final.push(newArray[0]); 
  }
  
  if(runs > 1){
    return foldArray(final, runs-1)
  }
  return final;
}
