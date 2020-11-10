let num = 123456;
function  squareDigits(anynumber) {
let arr = anynumber.toString().split('');
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i]*4;
    
}
return arr.join('');
}


console.log(squareDigits(num));