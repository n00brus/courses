import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './services/todo.service';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [TodoComponent, TestComponent],
  exports: [
    TodoComponent,
    TestComponent
  ],
  imports: [
    CommonModule
  ],
  // providers: [TodoService]
})
export class TodosModule { }
