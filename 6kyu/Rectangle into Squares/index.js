function sqInRect(lng, wdth){

  if (lng == wdth) return null;
  
  let result = [];
  
  while (lng != 0 && wdth != 0){
  
    if (lng - wdth > 0){
      result.push(wdth);
      lng = lng - wdth;
    }
    
    else{
      result.push(lng);
      wdth = wdth - lng;
    }
  }
  return result;
}
