
export class TypeSwitcherTemplate{
    constructor(host) {
      this.host = host;
  
      this._iniTemplate = `
   
      
      <a href="#" class="type-switcher__button" >Расход</a>
      <a href="#"  class="type-switcher__button" >Доход</ahref="#" >
     
      
   
      `
      console.log("111S");
      this.host.innerHTML = this._iniTemplate;
     
    }
}