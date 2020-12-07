export class CategoriesTemplate {
    constructor(host) {
      this.host = host;
  
      this._iniTemplate = `
   
      
          <a href="#" class="app__categories__component">Зарплата</a>
          <a href="#" class="app__categories__component">Премия</a>
          <a href="#" class="app__categories__component">Аренда</a>
          <a href="#" class="app__categories__component">Бизнес</a>
          <a href="#" class="app__categories__component">Подарок</a>
          <a href="#" class="app__categories__component">Продажа</a>
     
      
   
      `
      console.log("111sS");
      this.host.innerHTML = this._iniTemplate;
     
    }
}