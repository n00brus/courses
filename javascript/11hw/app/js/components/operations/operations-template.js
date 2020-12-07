export class OperationsTempplate {
    constructor(host) {
      this.host = host;
  
      this._iniTemplate = `
   
      
            <div class="app__operations__header">Ваши доходы:</div>
          <a href="#" class="app__operations__component">Доход 1</a>
          <a href="#" class="app__operations__component">Доход 2</a>
          <a href="#" class="app__operations__component">Доход 3</a>
          <a href="#" class="app__operations__component">Доход 4</a>
          <a href="#" class="app__operations__component">Доход 5</a>
          <a href="#" class="app__operations__component">Доход 6</a>  
         
           
   
      `
      console.log("111S");
      this.host.innerHTML = this._iniTemplate;
     
    }
} 