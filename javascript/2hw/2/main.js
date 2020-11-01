let arr = [];
var phone = new Object();
phone.memory= 128;
phone.price= "700$";
arr[0] = phone;
var phone = new Object();
phone.memory= 64;
phone.price= "500$";
arr[1] = phone;
var phone = new Object();
phone.memory= 256;
phone.price= "900$";
arr[2] = phone;


 let PhoneMemory=0;
mainfor: for(let i = 0;i<=arr.length;i++){
 PhoneMemory = prompt('Введите объём памяти мобильного телефона');

    for(let i = 0;i<arr.length;i++){
            if(+PhoneMemory===arr[i].memory){
                PhoneMemory = `${arr[i].memory} - ${arr[i].price}`;
                
                break mainfor;
            }   
    }
        
        if(typeof PhoneMemory ==='string'){
         
           
            }   else if(!PhoneMemory){
                PhoneMemory ='<div class = "goodbye">До свидания!</div>';
                break;
                }
}
document.write(PhoneMemory);