const testArray = [1, 2, 3,4];
const testFn = function(x) {
  return x * x;
}
const map = function(arr, fn) {
    let newArray=[];
for (let i = 0; i < arr.length; i++) {
    newArray[i] = fn(arr[i]);
    
}
return newArray;
}
console.log(`new Array = ${map(testArray,testFn)}`);
console.log(`old array = ${testArray}`);

// [1, 4, 9]