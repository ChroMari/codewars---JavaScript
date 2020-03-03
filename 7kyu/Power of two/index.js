function isPowerOfTwo(n){
  let res = 1;
  let i = 1;
  
  while (res < n){
    res = 2**i;
    i = i + 1;
  }
  return res == n;
}
