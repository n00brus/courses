export class OperationEditorTemplate {
    constructor(host) {
      this.host = host;
    }
  
    template(data) {
      
      let tpl =`<div> selected category = ${data.data} </div>`;
      
      return tpl;
    }
  
    render(data) {
      this.host.innerHTML = this.template(data);
    }
  }