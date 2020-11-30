  class TodosComponent {
  constructor(parent, selector) {
    this.host = parent.querySelector(selector);
    this.template = new TodosTemplate(this.host);
    this.todos=[{}];
    this.initializeTodos();

    this.renderAll();

    // this.addTodo('Some title');
    // this.addTodo('Some title');
    // console.log(this.todos);

    const boundAddTodo = this.addTodo.bind(this);
    this.template.listenAddTodo(boundAddTodo);
    this.template.listenDeleteTodo(this.deleteDone.bind(this));
    this.template.listenDoneChange(this.toggleDone.bind(this));
  }
  initializeTodos(){
    (async () => {
      const dataFromServer = await axios.get('https://jsonplaceholder.typicode.com/todos');
      this.todos = dataFromServer.data;
      console.log(this.todos);
      this.renderAll();
      
    })()

  }
  sendnewTodo(){
    axios.post('https://jsonplaceholder.typicode.com/todos',this.newTodo)
  .then(res => {
    console.log(res);
    console.log("SEND ");
  })
  .catch(err => {
    console.log('ERROR', err);
  })
  }
  sendnewComplication(id){
    axios.post('https://jsonplaceholder.typicode.com/todos',this.todos[id-1])
    
    .then(res => {

      console.log(this.todos[id-1]);
    })
    .catch(err => {
      console.log('ERROR', err);
    })
  }
  sendDeletetodos(){
    axios.post('https://jsonplaceholder.typicode.com/todos',this.todos)
    .then(res => {
      console.log(res);
      console.log("SEND ");
    })
    .catch(err => {
      console.log('ERROR', err);
    })
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
      completed: false,
    }
    this.todos = [...this.todos, newTodo];
    this.renderAll();
    this.sendnewTodo();
    this.template.cleanField();
  }

  toggleDone(id) {
    
    // получить от view id тудушки которой нужно поменять done
    // меняем done тудушки с id который нам пришел выше (из view)
    // перерендерить тудушки И COUNTER (renderAll)
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    this.renderAll();
    this.sendnewComplication(id);
  }

  deleteDone() {
    this.todos = this.todos.filter(todo => todo.completed === false);
    
    sendDeletetodos();
    this.renderAll();
  }
  todosCounter(){
    let count=0;
    
    this.todos.forEach(todo =>{if(todo.completed === false){  count+=1;}} )
    return count;
}

  _getNewTodoId() {
    return this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
  }
}
