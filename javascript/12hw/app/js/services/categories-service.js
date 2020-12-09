// import { ENV } from "../env";

let ALL_CATEGORIES = [
  {
    name: 'Зарплата',
    type: 'profit',
    selected: false,
  },
  {
    name: 'Возврат долга',
    type: 'profit',
    selected: false,
  },
  {
    name: 'Продукты',
    type: 'consumption',
    selected: false,
  },
  {
    name: 'Бензин',
    type: 'consumption',
    selected: false,
  }
]

export class CategoriesService {
  constructor(){
  }

  getCategories() {
    // return axios.get(ENV.apiUrl + '/todos')
    return new Promise((resolve) => {
      const data = ALL_CATEGORIES;
      resolve(data);  
    })
  }
  deleteSelectedcategory(){
    ALL_CATEGORIES.forEach(category => {
    if (category.selected===true) {
      category.selected=false
     }
    }
    );}
  setSelectedCategory(name) {
    // console.log(name);
    this.deleteSelectedcategory();
    ALL_CATEGORIES.forEach(category => {
      if(category.name===name){
        category.selected=true;
        // console.log(category);

      }
      
    });
 
}
}
