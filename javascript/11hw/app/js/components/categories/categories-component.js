import {CategoriesTemplate} from './categories-template.js';
export class CategoriesComponent {
    constructor(parent, selector) {
      console.log("adsda");
      this.host = parent.querySelector(selector);
      this.template = new CategoriesTemplate(this.host);
      
    }
    
  }