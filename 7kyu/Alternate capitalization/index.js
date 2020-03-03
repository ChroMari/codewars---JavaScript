function capitalize(s){
  let s1 = '';
  let s2 = '';
  
  for (let i = 0; i < s.length; i++){
  
    if (i % 2 == 0){
      s1 = s1 + s[i].toUpperCase();
      s2 = s2 + s[i];
    }
    
    else{
      s1 = s1 + s[i];
      s2 = s2 + s[i].toUpperCase();
    }
  }
  return [s1, s2];
};
