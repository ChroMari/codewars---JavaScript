function wordsToMarks(string){
  let res = 0;
  let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let abc1 = string.split('');
  
  for (let i = 0; i < abc1.length; i++){
    res = res + (abc.indexOf(abc1[i]) + 1);
  }      
  
  return res;
}
