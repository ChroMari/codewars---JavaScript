function bump(x){
  x = x.split('');
  let sum = 0;
  
  for (let i = 0; i < x.length; i++){
  
    if (x[i] == 'n'){
      sum = sum + 1;
    }
  }
  return (sum <= 15) ? 'Woohoo!' : 'Car Dead';
}
