function isValidIP(str) {
  str = str.split('.');
  
  if (str.length < 4 || str.length > 4) return false;
  
  else{
    for (let i = 0; i < str.length; i++){
    
      if (isNaN(str[i]) == true){
        return false;
      }
      
      else {
        if (str[i][0] == '0' && str[i].length > 1 || str[i].indexOf(' ') != -1 || str[i].indexOf('\n') != -1 || str[i].indexOf('e') != -1 || str[i] == '' || Number(str) == -0) return false;
        
        if (Number(str[i]) < 0 || Number(str[i]) > 255){
          return false;
        }
      }
    }
  }
  return true;
}
