import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, OperationTypeCode,CategoryService } from '../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {

  @Input() selectedType: OperationTypeCode;
  @Input() selectedCategory: string;
  @Output() changeSelectedCategory = new EventEmitter()

  allCategories =this.categoriesService.categories
  categories: Category[] = []

  constructor(private categoriesService: CategoryService) { }

  ngOnChanges(): void {
    this.filterCategories();
  }

  ngOnInit(): void {}

  filterCategories() {
    this.categories = this.allCategories.filter(c => c.type === this.selectedType)
  }
  selectCategory(name:string) : void{
    
    
    this.changeSelectedCategory.emit(name);
    
    
  }

}


