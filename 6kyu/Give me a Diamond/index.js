function diamond(n){
  if (n <= 0 || n % 2 == 0) return null;
  
  if (n == 1) return '*\n';
  
  let i = 1;
  let result = '';
  let arr = [];
  
  while (i <= n){
    result = '';
    
    for (let i0 = 0; i0 < ((n - i)/2); i0++){
      result = result + ' ';
    }
    
    for (let i1 = 0; i1 < i; i1++){
      result = result + '*';
    }
    
    result = result + '\n';
    i = i + 2;
    arr.push(result);
  }
  let arr1 = arr.slice(0, arr.length - 1);
  return arr.concat(arr1.reverse()).join('');
}
