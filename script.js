console.log(fibs(8))

function fibs(num) {
    if (num <= 0)
      return [];
    if (num == 1) {
      return [0]
    }
    if (num == 2) {
      return [0, 1];
    }
  
    let arr = [0, 1];
  
    
    for(let i = 2 ; i < num; i++){
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  
    return arr;
  }

 //Recursion Fibonacci

 console.log(fibsRec(8));
 function fibsRec(num, arr = []) {
    if (num <= 0)
      return [];
    if (num == 1) {
      return [0]
    }
    if (num == 2) {
      return [0, 1];
    }
  
    if (arr.length == num) {
      return arr;
    }
  
    if (arr.length == 0) {
      arr.push(0);
      arr.push(1);
    }
  
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  
    let returnArr = fibsRec(num, arr);
    if(returnArr.length === num){
      return arr
    }
  
  }


//merge sort 

let arr = [3,2,1];

console.log(mergeSort(arr))

function mergeSort(arr) {
  if(arr.length == 1){
    return arr;
  }
  let left = [];
  let right = [];
  let mid = arr.length/2;
  left = arr.slice(0, mid);
  right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sortedArr = [];
  while(left.length > 0 && right.length > 0){
     if(left[0] <= right [0]){
        sortedArr.push(left.shift())
     }
     else{
      sortedArr.push(right.shift())
     }
  }

  return [...sortedArr, ...left, ...right]
}
  
  
  