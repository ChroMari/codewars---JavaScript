function solve(arr){  
  let arr1;
  let result = [];
  let sum;
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  
  for (let i = 0; i < arr.length; i++){
    arr1 = arr[i];
    arr1 = arr1.toLowerCase();
    sum = 0;
    
    for (let j = 0; j < arr1.length; j++){
    
      if (j == abc.indexOf(arr1[j])){
        sum = sum + 1;
      }
    }
    result.push(sum);
  }
  return result;
};
