function listToArray(list) {
  let arr = [];
  
  for (let i = list; i; i = i.next){
    arr.push(i.value);
  }
  return arr;
}
