
let PhoneMemory=0;
while(true){

 PhoneMemory = prompt('Введите объём памяти мобильного телефона');
if(+PhoneMemory===128){
    PhoneMemory = `${PhoneMemory} - 900`;
    
    break;
}   else if(+PhoneMemory===256){
        PhoneMemory = `${PhoneMemory} - 1200`;
      
        break;
    }   else if(+PhoneMemory===512){
            PhoneMemory = `${PhoneMemory} - 1400`;
            
            break;
        }   else if(typeof PhoneMemory ==='string'){
           
           
            }   else if(!PhoneMemory){
                PhoneMemory ='<div class = "goodbye">До свидания!</div>';
                break;
                }
}
document.write(PhoneMemory);

