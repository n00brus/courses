import {AppTemplate} from './app-template.js';
import { CategoriesComponent } from './components/categories/categories-component.js';
import { TypeSwitcherComponent } from './components/type-switcher/type-switcher-component.js';
import {OperationEditorComponent} from './components/operation-editor/operation-editor-component.js';
import { CategoriesService } from './services/categories-service.js';
import { TypeSwitcherModel } from './models/type-switcher-model.js';
import {CategoriesModel} from './models/categories-model.js';
import {OperationEditorModel} from './models/operation-editor-model.js';

const INITIAL_STATE = {
  type: 'profit',
  selected:false,
  categories: {
    list: [],
    listToShow: [],
    isLoading: false,
    selected: false,
  },
  
}

class AppComponent {
  constructor(name) {
    this.host = document.querySelector(`[data-component=${name}]`);
    
    this.template = new AppTemplate(this.host);
    this.template.render();

    this.typeModel = new TypeSwitcherModel();
    this.categoriesModel = new CategoriesModel();
    this.editorModel = new OperationEditorModel();
    this.categoriesService = new CategoriesService();

    this.typeSwitcherComponent = new TypeSwitcherComponent(
      'typeSwitcher',
      this.typeModel,
      {
        onTypeSwitch: this.onTypeSwitch.bind(this)
      }
    );

    this.categoriesComponent = new CategoriesComponent(
      'categories',
      this.categoriesModel,
      {
      onCategorySwitch: this.onCategorySwitch.bind(this)
      }
    );
    this.operationEditorComponent = new OperationEditorComponent(
      'operationEditor',
      this.editorModel,
      "asd"
      
    );
    
    this.init();
  }

  init() {
    this.typeModel.set('type', INITIAL_STATE.type);
    this.setCategories();
    this.editorModel.set('data', "nothing selected");
  }

  async setCategories() {
    this.categoriesModel.set('categories', {...INITIAL_STATE.categories, isLoading: true});
    const categories = await this.categoriesService.getCategories();
   
    this.categoriesModel.set('categories', {
      ...INITIAL_STATE.categories,
      isLoading: false,
      list: categories,
      listToShow: this.getFilteredCategoriesList(categories)
    })
  }

  getFilteredCategoriesList(categories) {
    const list = categories || this.categoriesModel.get('categories').list;
    return list.filter(c => c.type === this.typeModel.get('type'));
  }

  updateCategories() {
    this.categoriesModel.set('categories', {
      ...this.categoriesModel.get('categories'),
      listToShow: this.getFilteredCategoriesList()
    })
  }
  updateOperationEditor(data) {
    this.editorModel.set('data', data);
  }

  onTypeSwitch(type) {
    this.typeModel.set('type', type);
    this.categoriesService.deleteSelectedcategory();
    this.updateCategories();
    this.updateOperationEditor("");
  }
   onCategorySwitch(type) {
     this.categoriesService.setSelectedCategory(type);
    this.updateCategories();
    this.updateOperationEditor(type);
  }
}

new AppComponent('app');