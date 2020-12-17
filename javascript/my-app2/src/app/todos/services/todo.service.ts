import { Injectable } from '@angular/core';
import { TODO } from '../models/todo.model';
const MOCK_TODOS = [
  {
    id: 1,
    title: 'todo1',
    completed: true
  },
  {
    id: 2,
    title: 'todo2',
    completed: true
  },
  {
    id: 3,
    title: 'todo33',
    completed: true
  },
];
// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class TodoService {
   public todos = MOCK_TODOS;

  constructor() { }
  getTodos(): Promise<TODO[]>{
    return new Promise((resolve, reject) => {
      resolve(this.todos);
    });

  }
  addTodo(todo: TODO): void{
    this.todos = [... this.todos, todo];
  }
}
