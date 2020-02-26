function solution(a){
    let result = [];
    let a1 = '', d = 0;
    
    if (a.length % 2 != 0) a = a + '_';
    
    for (let i = 0; i < a.length; i++){
    
        if (d < 2){
            a1 = a1 + a[i];
            d = d + 1;
        }
        
        if (d == 2){
            result.push(a1);
            d = 0;
            a1 = '';
        }
    }
    return result;
}
