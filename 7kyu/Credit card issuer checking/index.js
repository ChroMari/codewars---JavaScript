function getIssuer(number) {
  number = number + '';
  
  if (number.length == 13 || number.length == 16){
  
    if (Number(number[0]) == 4){
      return 'VISA';
    }
  }
  
  if (number.length == 16){
    let num = number[0] + number[1];
    
    if (Number(num) >= 51 && Number(num) <= 55){
      return 'Mastercard';
    }
    num = number[0] + number[1] + number[2] + number[3];
    
    if (Number(num) == 6011){
      return 'Discover';
    }
  }
  
  if (number.length == 15){
    let num = number[0] + number[1];
    
    if (Number(num) == 34 || Number(num) == 37){
      return 'AMEX';
    }
  }
  return 'Unknown';
}
