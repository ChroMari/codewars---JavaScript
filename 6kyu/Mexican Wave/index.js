function wave(str){
  let result = [];
  let a;
  
  for (let i = 0; i < str.length; i++){
    a = str.split('');
    a[i] = a[i].toUpperCase();
    
    if (a[i] != ' ') result.push(a.join(''));
  }
  return result;
}
