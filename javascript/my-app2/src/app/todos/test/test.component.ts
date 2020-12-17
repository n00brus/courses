import { Component, OnInit } from '@angular/core';
import { TODO } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [TodoService]
})
export class TestComponent implements OnInit {
  public todos: TODO[];
  constructor(private todosService: TodoService) { }

  ngOnInit(): void {
    this.todosService.getTodos().then((todos) => {
      this.todos = todos;
    });
  }
  something(): void{
    console.log(this.todosService.todos);
  }

}
