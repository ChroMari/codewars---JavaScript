var findMissing = function (list) {
  for (let i = 0; i < list.length - 1; i++){
  
    if(list[i+1] - list[i] !== (list[list.length - 1] - list[0])/list.length){
      return list[i] + (list[list.length - 1] - list[0])/list.length;
    }
    
  }
}
