function presses(phrase) {
  let a1 = '1adgjmptw* #';
  let a2 = 'behknqux0';
  let a3 = 'cfilorvy';
  let a4 = '23456s8z';
  let a5 = '79';
  
  phrase = phrase.toLowerCase();
  
  let sum = 0;
  
  for (let i = 0; i < phrase.length; i++){
    if (a1.indexOf(phrase[i]) != -1) sum = sum + 1;
    
    else if (a2.indexOf(phrase[i]) != -1) sum = sum + 2;
    
    else if (a3.indexOf(phrase[i]) != -1) sum = sum + 3;
    
    else if (a4.indexOf(phrase[i]) != -1) sum = sum + 4;
    
    else sum = sum + 5;
  }
  return sum;
}
