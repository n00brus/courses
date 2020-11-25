  class TodosComponent {
  constructor(parent, selector) {
    this.host = parent.querySelector(selector);
    this.template = new TodosTemplate(this.host);
    this.todos = [
      {
        id: 1,
        title: 'Learn JS',
        done: true
      },
      {
        id: 2,
        title: 'Learn Angular',
        done: false
      }
    ]

    this.renderAll();

    // this.addTodo('Some title');
    // this.addTodo('Some title');
    // console.log(this.todos);

    const boundAddTodo = this.addTodo.bind(this);
    this.template.listenAddTodo(boundAddTodo);
    this.template.listenDeleteTodo(this.deleteDone.bind(this));
    this.template.listenDoneChange(this.toggleDone.bind(this));
  }

  renderAll() {
    this.template.renderTodos(this.todos);
    this.template.renderCounter(this.todosCounter());

  }

  addTodo(title) {
    // получить title ищ view (template)
    // Добавляем новую todo в массив (todos)
    // перерендерить тудушки И COUNTER (renderAll)
    // console.log('Title FROM view IN controller', title);
    const newTodo = {
      id: this._getNewTodoId(),
      title,
      done: false,
    }
    this.todos = [...this.todos, newTodo];
    this.renderAll();
    this.template.cleanField();
  }

  toggleDone(id) {
    // получить от view id тудушки которой нужно поменять done
    // меняем done тудушки с id который нам пришел выше (из view)
    // перерендерить тудушки И COUNTER (renderAll)
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo);
    this.renderAll();
  }

  deleteDone() {
    this.todos = this.todos.filter(todo => todo.done === false);
    
   
    this.renderAll();
  }
  todosCounter(){
    let count=0;
    
    this.todos.forEach(todo =>{if(todo.done === false){  count+=1;}} )
    return count;
}

  _getNewTodoId() {
    return this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
  }
}
