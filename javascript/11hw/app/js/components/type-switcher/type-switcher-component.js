import { TypeSwitcherTemplate} from './type-switcher-template.js';
export class TypeSwitcherComponent {
    constructor(parent, selector) {
      this.host = parent.querySelector(selector);
      this.template = new TypeSwitcherTemplate(this.host);
      
    }
    
  }