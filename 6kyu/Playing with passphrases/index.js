function playPass(s, n) {
  s = s.toLowerCase();
  s = s.split('');
  let num = '0123456789';
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  
  for (let i = 0; i < s.length; i++){
  
    if (abc.indexOf(s[i]) != -1){
    
      if (abc.length > (abc.indexOf(s[i]) + n)){
        s[i] = abc[abc.indexOf(s[i]) + n];
      }
      
      else s[i] = abc[(abc.indexOf(s[i]) + n) - abc.length];
    }
    
    else if (num.indexOf(s[i]) != -1){
      s[i] = 9 - Number(s[i]) + '';
      }
  }
  
  for (let i = 0; i < s.length; i++){
    if (i % 2 == 0) s[i] = s[i].toUpperCase();
  }
  
  return s.reverse().join('');
}
