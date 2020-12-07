
import {Apptemplate} from './app-template.js';
import {CategoriesComponent} from './components/categories/categories-component.js';
import {OperationsComponent} from './components/operations/operations-component.js';
import {OperationEditorComponent} from './components/operation-editor/operation-editor-component.js';
import {TypeSwitcherComponent} from './components/type-switcher/type-switcher-component.js';
         
class App {
    constructor(selector) {
      this.host = document.querySelector(selector);
      this.App = new Apptemplate(this.host, '#app');
      this.categoriesComponent = new CategoriesComponent(this.host, '.app__categories');
      this.operationEditorComponent = new OperationEditorComponent(this.host, '.app__operation-editor');
      this.operationsComponent = new OperationsComponent(this.host, '.app__operations');
      this.typeSwitcherComponent = new TypeSwitcherComponent(this.host, '.app__type-switcher');

    }
  }
  
new App('#app');