function warnTheSheep(queue) {
  
  if (queue.indexOf('wolf') == queue.length - 1){
    return('Pls go away and stop eating my sheep');
  }
  else{
    let queue2 = queue.reverse();
    let n = queue2.indexOf('wolf');
    return res2 = 'Oi! Sheep number ' + n +'! You are about to be eaten by a wolf!';
  }
}
