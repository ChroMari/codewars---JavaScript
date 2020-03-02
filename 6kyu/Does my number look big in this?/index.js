function narcissistic(value) {
  value = value + '';
  let sum = 0;
  
  for (let i = 0; i < value.length; i++){
    sum = sum + Number(value[i])**value.length;
  }
  return Number(value) == sum;
}
