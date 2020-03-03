function evenNumbers(array, number) {
  let arr = [];
  
  for (let i = 0; i < array.length; i++){
  
    if (array[i] % 2 == 0){
      arr.push(array[i]);
    }
  }
  arr = arr.reverse().slice(0, number).reverse();
  return arr;
}
