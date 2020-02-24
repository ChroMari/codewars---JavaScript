function groupCheck(s){
   while ( s.indexOf('()') !== -1 || s.indexOf('{}') !== -1 || s.indexOf('[]') !== -1 ) { 
   
     if ( s.indexOf('()') !== -1 ) { 
       s = s.slice(0, s.indexOf('()')) + s.slice(s.indexOf('()')+2, s.length); 
     } 
     
     else if ( s.indexOf('{}') !== -1 ) {
       s = s.slice(0, s.indexOf('{}')) + s.slice(s.indexOf('{}')+2, s.length); 
     } 
     
     else if ( s.indexOf('[]') !== -1 ) { 
       s = s.slice(0, s.indexOf('[]')) + s.slice(s.indexOf('[]')+2, s.length); 
     } 
     
    } 
    return (s === '') 
 }
