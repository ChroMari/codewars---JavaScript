function repeater(string, n){
  let result = '';
  
  while (n != 0){
    result = result + string;
    n = n - 1;
  }
  return result;
}
