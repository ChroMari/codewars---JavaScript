function toWeirdCase(string){
  string = string.split(' ');
  
  for (let i = 0; i < string.length; i++){
    let str = string[i].split('');
    
    for (let j = 0; j < str.length; j++){
      if (j % 2 == 0){
        str[j] = str[j].toUpperCase();
      }
    }
    
    string[i] = str.join('');
  }
  return string.join(' ');
}
