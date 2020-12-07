import {OperationEditorTemplate} from './operation-editor-template.js';
export class OperationEditorComponent {
    constructor(parent, selector) {
      this.host = parent.querySelector(selector);
      this.template = new OperationEditorTemplate(this.host);
      
    }
    
  }