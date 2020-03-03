unction balancedNum(number){
  number = number + '';
  
  if (number.length < 3) return 'Balanced';
  
  let sum1 = 0, sum2 = 0;
  
  if (number.length % 2 != 0){
  
    for (let i = 0; i < number.length; i++){
    
      if (i < Math.floor(number.length / 2)){
        sum1 = sum1 + Number(number[i]);
      }
      
      else if (i > number.length / 2){
        sum2 = sum2 + Number(number[i]);
      }
    }
    return (sum1 == sum2) ? 'Balanced' : 'Not Balanced';
  }
  
  else{
  
    for (let i = 0; i < number.length; i++){
    
      if (i < number.length / 2 - 1){
        sum1 = sum1 + Number(number[i]);
      }
      
      else if (i > number.length / 2){
        sum2 = sum2 + Number(number[i]);
      }
    }
    return (sum1 == sum2) ? 'Balanced' : 'Not Balanced';
  }
}
