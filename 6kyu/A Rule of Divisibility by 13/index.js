function thirt(n) {
  let num = [1, 10, 9, 12, 3, 4];
  n = n + '';
  n = n.split('').reverse().join('');
  let sum = 0;
  
  while (Number(n) != sum){
    sum = 0;
    let j = 0;
    
    for (let i = 0; i < n.length; i++){
    
      if (j < num.length){
        sum = sum + Number(n[i])*num[j];
        j = j + 1;
      }
      
      else{
        j = 0;
        sum = sum + Number(n[i])*num[j];
        j = j + 1;
      }
    }
    
    if (Number(n.split('').reverse().join('')) == sum){ 
      return sum;
    }
    
    n = sum + '';
    n = n.split('').reverse().join('');
    sum = 0;
  }
}
