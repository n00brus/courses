const testArray = [1, 2, 3,4];
let characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 },
    { 'name': 'vova', 'age': 18 },
    { 'name': 'kolya', 'age': 24 }
  ];
const map = function(arr, fne) {
    let newArray=[];
for (let i = 0; i < arr.length; i++) {

    
    
    newArray[i] = arr[i][fne];
    
   
}
return newArray;
}

console.log(map(characters,'name'));
console.log(characters);
// [1, 4, 9]