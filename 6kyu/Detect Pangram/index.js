function isPangram(string){
  string = string.toLowerCase();
  let abc = 'qwertyuiopasdfghjklzxcvbnm';
  
  for (let i = 0; i < string.length; i++){
  
    if (abc.indexOf(string[i]) != -1){
      abc = abc.replace(string[i], '');
    }
  }
  return (abc.length == 0);
}
