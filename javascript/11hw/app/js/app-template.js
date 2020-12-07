 export class Apptemplate{
    constructor(selector) {
        this.host = selector;
  
      this._iniTemplate = `
      <div class="app__type-switcher">
     

  </div>
  <div class="app__main">
        <div class="app__categories">  

        </div>
        <div class="app__operation-editor">

        </div>
      <div class="app__operations">
        
      </div>
  </div>
      `
      console.log("adsda");
      this.renderApp();
    }
    renderApp(){
      this.host.innerHTML = this._iniTemplate;
    }
}