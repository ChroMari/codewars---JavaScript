function getCount(str) {
  let vowelsCount = 0;
  let abc = ['a', 'e', 'i', 'o', 'u'];
  let abc1 = str.split('');
  
  for (let i = 0; i < abc1.length; i++){
  
    for (let j = 0; j < abc.length; j++){
    
      if (abc1[i] == abc[j]){
        vowelsCount = vowelsCount + 1;
      }
      
    }
    
  }
  return vowelsCount;
}
