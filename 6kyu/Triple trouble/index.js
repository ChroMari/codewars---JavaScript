function tripledouble(num1, num2) {

  let num = '0123456789';
  num1 = num1 + '';
  num2 = num2 + '';
  
  for (let i = 0; i < num.length; i++){
    if (num1.indexOf(num[i].repeat(3)) != -1 && num2.indexOf(num[i].repeat(2)) != -1){
      return 1;
    }
  }
  return 0;
}
