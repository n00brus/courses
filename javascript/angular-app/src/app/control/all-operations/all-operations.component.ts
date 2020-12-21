import { Component, OnInit, Input } from '@angular/core';
import { Category,OperationTypeCode,CategoryService } from '../models/category.model';
@Component({
  selector: 'app-all-operations',
  templateUrl: './all-operations.component.html',
  styleUrls: ['./all-operations.component.css'],
  providers: [CategoryService]
})
export class AllOperationsComponent implements OnInit {
  @Input() selectedType: OperationTypeCode;
  allCategories =this.categoriesService.categories
  categories: Category[] = []
  constructor(private categoriesService: CategoryService) { 
   

  }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    this.filterCategories();
  
  }
  filterCategories() {
    this.categories = this.allCategories.filter(c => c.type === this.selectedType)
    // this.categories.forEach(category => {
    //   console.log(category.operationsInfo[0].value);
      
    // });
  }
  
  
}
