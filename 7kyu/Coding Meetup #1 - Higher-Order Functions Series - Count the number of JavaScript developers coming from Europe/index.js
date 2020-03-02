function countDevelopers(list) {
  let sum = 0;
  
  for (let i = 0; i < list.length; i++){
  
    if (list[i]['continent'] == 'Europe' && list[i]['language'] == 'JavaScript'){
      sum = sum + 1;
    }
  }
  return sum;
}
