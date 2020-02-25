function validate(n){
  n = n + '';
  let num;
  let sum = 0;
  
  for (let i = 0; i < n.length; i++){
  
    if (n.length % 2 == 0){
    
      if (i % 2 == 0){
        num = Number(n[i])*2;
        
        if (num > 9){
          num = num - 9;
        }
      }
      
      else{
        num = Number(n[i]);
      }
      sum = sum + num;
    }
    
    else{
      if (i % 2 != 0){
        num = Number(n[i])*2;
        
        if (num > 9){
          num = num - 9;
        }
      }
      else{
        num = Number(n[i]);
      }
      sum = sum + num;
    }
  }
  return (sum % 10 == 0);
}
