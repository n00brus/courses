import { Component, OnInit } from '@angular/core';
import { TODO } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  public todos: TODO[];

  newTodo(title): void{
    const todo = {
      id: this.todos.length + 1,
      title: title.value,
      completed: false
    };
    this.todosService.addTodo(todo);
    this.todos = [... this.todos, todo];
    console.log(this.todosService.todos);
  }


  constructor(
    private todosService: TodoService
  ) { }

  ngOnInit(): void {
    this.todosService.addTodo({
      id: 4,
      title: 'new todo1',
      completed: false,
    });
    this.todosService.getTodos().then((todos) => {
      this.todos = todos;
    });
  }

}
