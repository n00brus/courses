let age = prompt('Введите объём памяти мобильного телефона');
if(age==128){
    document.write(age+ ' - 900');
}   else if(age==256){
    document.write(age+' - 1200');
    }       else if(age==512){
        document.write(age+' - 1400');
        }
        else if(typeof age =='string' ){
            document.write('<div class = "falsememory">Неверная память</div>');
        }   else if(!age){
                document.write('<div class = "goodbye">До свидания!</div>');
                }
