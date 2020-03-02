function removeRotten(bagOfFruits){
  if (bagOfFruits === null || bagOfFruits === undefined) return [];
  
  for (let i = 0; i < bagOfFruits.length; i++){
  
    if (bagOfFruits[i].indexOf('rotten') != -1){
      bagOfFruits[i] = bagOfFruits[i].replace(/rotten/, '').toLowerCase();
    }
  }
  return bagOfFruits;
}
