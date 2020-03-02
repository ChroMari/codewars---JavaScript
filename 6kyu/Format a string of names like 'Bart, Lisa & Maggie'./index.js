function list(names){
  let res = [];
  let result = '';
  
  for (let i = 0; i < names.length; i++){
    res.push(names[i]['name']);
  }
  
  for (let i = 0; i < res.length; i++){
  
    if ( i == 0){
      result = result + res[i];
    }
    
    else{
    
      if (i == res.length - 1){
        result = result + ' & ' + res[i];
      }
      
      else{
        result = result + ', ' + res[i];
      }
    }
  }
  return result;
}
