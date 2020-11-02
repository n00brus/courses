const arr = [
    {
      memory: 64,
      price: 500
    },
    {
        memory: 128,
        price: 700
      },
      {
        memory: 256,
        price: 900
      }

]
 let PhoneMemory=0;
 let PhonePrice=0;
 while(PhonePrice===0){
 PhoneMemory = prompt('Введите объём памяти мобильного телефона');

    for(let i = 0;i<arr.length;i++){
            if(+PhoneMemory===arr[i].memory){
                PhonePrice = arr[i].price;
                
                break ;
            }   
    }
        
    if(typeof PhoneMemory ==='object'){
        document.write('<div class = "goodbye">До свидания!</div>');
                break;
                }
}
if(PhonePrice!==0){
    document.write(`${PhoneMemory} -  ${PhonePrice}`);
}
