function solution(roman){
    roman = roman.split('');
    let res = [];
    
    for (let i = 0; i < roman.length; i++){
    
        if (roman[i] == 'I') res.push(1);
        
        if (roman[i] == 'V') res.push(5);
        
        if (roman[i] == 'X') res.push(10);
        
        if (roman[i] == 'L') res.push(50);
        
        if (roman[i] == 'C') res.push(100);
        
        if (roman[i] == 'D') res.push(500);
        
        if (roman[i] == 'M') res.push(1000);
    }

    let sum = 0;
    let i = 0;
    while (i < res.length){
 
        if (res[i] < res[i + 1]){
            sum = sum + (res[i + 1] - res[i]);
            i = i + 2;
        }
        
        else {
            sum = sum + res[i];
            i = i + 1;
        }
    }
    return sum; 
}
