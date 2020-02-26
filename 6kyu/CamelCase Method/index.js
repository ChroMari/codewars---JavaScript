String.prototype.camelCase=function(){
  let string = this + '';
  string = string.split(' ');
  
  for (let i = 0; i < string.length; i++){
    let str = string[i].split('');
    
    if (str[0] !== undefined) str[0] = str[0].toUpperCase();
    string[i] = str.join('');
  }
  
  return string.join('');
}
