function titleCase(title, minorWords) {

  if (title == '') return '';
  
  title = title.toLowerCase().split(' ');
  let a;
  
  if (minorWords != undefined) minorWords = minorWords.toLowerCase().split(' ');
  
  else minorWords = '';
  
  for (let i = 0; i < title.length; i++){
  
    if (i == 0 || minorWords.indexOf(title[i]) == -1){
      a = title[i].split('');
      a[0] = a[0].toUpperCase();
      title[i] = a.join('');
    }
  }
  return title.join(' ');
}
