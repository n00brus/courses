export class OperationEditorTemplate {
    constructor(host) {
      this.host = host;
  
      this._iniTemplate = `
    
      <div class="operation-editor__main">
                    <div class="operation-editor__main__header">Введите суму</div>
                    <input type="text" class="app__input" placeholder="Сюда вводить">
                    <div class="operation-editor__main__description"> Платёж</div>
                    <button class="app__addbutton">-></button>
 
                </div> 
                <div class="app__addbutton__description">
                    Описание   
      
                    <input type="text"  class="app__input app__input-description" placeholder="Сюда вводить">

                </div>
   
      `
      console.log("fasdfsd");
      this.host.innerHTML = this._iniTemplate;
     
    }
}