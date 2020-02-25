function inArray(array1,array2){
  let result = [];
  
  for (let i = 0; i < array1.length; i++){
    if (array2.join().indexOf(array1[i]) != -1){
      result.push(array1[i]);
    }
  }
  return result.sort();
}
