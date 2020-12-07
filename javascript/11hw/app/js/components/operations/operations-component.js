import {OperationsTempplate} from './operations-template.js';
export class OperationsComponent {
    constructor(parent, selector) {
      this.host = parent.querySelector(selector);
      this.template = new OperationsTempplate(this.host);
      
    }
    
  }