function sumDigPow(a, b) {
  let result = [];
  
  for (let i = a; i < b; i++){
    let ia = i + '';
    let sum = 0;
    
    for (let j = 0; j < ia.length; j++){
      sum = sum + Number(ia[j])**(j + 1);
    }
    
    if (sum == i) result.push(i);
  }
  
  return result;
}
