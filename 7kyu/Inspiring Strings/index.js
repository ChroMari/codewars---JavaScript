function longestWord(stringOfWords){
  stringOfWords = stringOfWords.split(' ');
  let max = '';
  
  for (let i = 0; i < stringOfWords.length; i++){
  
    if (max.length <= stringOfWords[i].length){
      max = stringOfWords[i];
    }
  }
  return max;
}
