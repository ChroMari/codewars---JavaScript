function race(v1, v2, g) {
  if (v1 >= v2) return null;
  
  let t = g * 3600 / (v2 - v1);
  
  return [Math.floor(t/3600), Math.floor((t % 3600) / 60), Math.floor(t % 60)];
}
