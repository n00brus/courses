import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlPageComponent } from './control-page/control-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { TypeSwitcherComponent } from './type-switcher/type-switcher.component';
import { OperationEditorComponent } from './operation-editor/operation-editor.component';
import { AllOperationsComponent } from './all-operations/all-operations.component';




@NgModule({
  declarations: [ControlPageComponent, CategoriesComponent, TypeSwitcherComponent, OperationEditorComponent, AllOperationsComponent],
  imports: [
    CommonModule
  ],
  exports: [ControlPageComponent]
})
export class ControlModule { }
