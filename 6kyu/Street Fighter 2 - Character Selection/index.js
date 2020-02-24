function streetFighterSelection(fighters, position, moves) {
  let result = [];
  let verticalPos = position[0];
  let horizontalPos = position[1];

  moves.forEach(mov => {
  
    switch(mov) {
      case 'up':
        verticalPos--;
        if (verticalPos < 0) {
          verticalPos = 0;
        }
        break;
        
      case 'down':
        verticalPos++;
        if (verticalPos > fighters.length - 1) {
          verticalPos = fighters.length - 1;
        }
        break;
        
      case 'left':
        horizontalPos--;
        if (horizontalPos < 0) {
          horizontalPos = fighters[verticalPos].length - 1;
        }
        break;
        
      case 'right':
        horizontalPos++;
        if (horizontalPos > fighters[verticalPos].length - 1) {
          horizontalPos = 0;
        }
        break;
    }
    result.push(fighters[verticalPos][horizontalPos]);
  });

  return result;
}
