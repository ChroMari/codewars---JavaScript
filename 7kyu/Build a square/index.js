function generateShape(int){
  let result = '';
  
  for (let i = 0; i < int; i++){
  
    for (let j = 0; j < int; j++){
      result = result + '+';
    }
    
    if (i != int - 1) result = result + '\n';
  }
  return result;
}
