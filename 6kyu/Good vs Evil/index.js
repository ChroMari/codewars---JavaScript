function goodVsEvil(good, evil){
  good = good.split(' ');
  evil = evil.split(' ');
  let sumGood = Number(good[0])*1 + Number(good[1])*2 + Number(good[2])*3 + Number(good[3])*3 + Number(good[4])*4 + Number(good[5])*10;
  let sumEvil = Number(evil[0])*1 + Number(evil[1])*2 + Number(evil[2])*2 + Number(evil[3])*2 + Number(evil[4])*3 + Number(evil[5])*5 + Number(evil[6])*10;
  
  if (sumGood == sumEvil) return 'Battle Result: No victor on this battle field';
  
  else{
    return (sumGood > sumEvil) ? 'Battle Result: Good triumphs over Evil' : 'Battle Result: Evil eradicates all trace of Good';
  }
}
