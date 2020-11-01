

// МЕТКИ + Вложенный цикл
while(true){
let long = prompt('Введите длину массива');
console.log(long);
let skip = prompt('Введите индекс масива который надо пропустить');
console.log(skip);
let last = prompt('Введите индекс масива который будет последним');
console.log(last);
if(!long || !skip || !last){
    break;
}
let array=[];
for (let i = 0; i < long; i++) {
    if(+last ===i){
        break;

    }
    if(+skip ===i){
        continue;
        
    }
    array[i]=i;
    
}
console.log(array);
}
document.write(`<div class = "goodbye">До свидания!</div>`);






