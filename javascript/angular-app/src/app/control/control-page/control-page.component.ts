import { Component, OnInit } from '@angular/core';
import { OperationTypeCode } from '../models/category.model';

@Component({
  selector: 'app-control-page',
  templateUrl: './control-page.component.html',
  styleUrls: ['./control-page.component.scss']
})
export class ControlPageComponent implements OnInit {

  selectedTypeCode: OperationTypeCode = 'profit';
  selectedCategory = 'Зарплата';
  constructor() { }

  ngOnInit(): void {
  }

  changeSeletcedType(type: OperationTypeCode) {
    
    
    this.selectedTypeCode = type;
   
    
  }
  changeSelectedCategory(name: string) {
    
    this.selectedCategory = name;
    
    
    
  }


}
