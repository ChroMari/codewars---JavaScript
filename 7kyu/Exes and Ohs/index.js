function XO(str) {
    let abc1  = str.split('');
    let x = 0;
    let o = 0;
    
    for (let i = 0; i < abc1.length; i++){
      if ((abc1[i] == 'x') || (abc1[i] == 'X')){
        x = x + 1;
      }
      else if ((abc1[i] == 'o') || (abc1[i] == 'O')){
        o = o + 1;
      }
    }
    
    return (x == o);
}
