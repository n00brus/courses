import { CategoriesTemplate } from "./categories-template.js";
import { Component } from '../../core/component.js';

export class CategoriesComponent extends Component {
  constructor(name, model, callbacks) {
    
    super(name, model, CategoriesTemplate);
    this.callbacks = callbacks;
    this.template.listenSwitch(this.callbacks.onCategorySwitch)
  }
}