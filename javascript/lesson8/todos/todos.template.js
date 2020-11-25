class TodosTemplate {
  constructor(host) {
    this.host = host;

    this._iniTemplate = `
      <div class="todos">
        <div class="todos__header">
          <h1 class="todos__title">Todos App</h1>
          <div class="todos__counter">You have 5 todos</div>
          <button class="tododelete-done">Remove done</button>
          <form class="todos-form">
            <input type="text" class="todos-form__field">
          </form>
        </div>
        <ul class="todos__list todos-list">
        </ul>
      </div>
    `

    this.initRender(); //ренжерим изначальный шаблон

    //selectors
    this.$form = this.host.querySelector('.todos-form'); // находим форму внутри компонента
    this.$field = this.$form.querySelector('.todos-form__field');
    this.$list = this.host.querySelector('.todos-list');
    this.$counter = this.host.querySelector('.todos__counter');
    this.$deleteDone = this.host.querySelector('.tododelete-done');
  }
  renderTodos(todos) { // функция чтобы держать state и html консистентными
    let listTemplate = '';
    todos.forEach(todo => {
      listTemplate += `
        <li class="todo ${todo.done ? 'todo--done' : ''}">
          <input
            type="checkbox"
            data-id="${todo.id}"
            ${todo.done ? 'checked' : ''}
          >
          ${todo.title}
        </li>
      `;
    })
    this.$list.innerHTML = listTemplate;
  }

  renderCounter(counter) {
    let listCounter = 'You have ';
    if(counter===1){
      listCounter += `${counter} todo`;
      }
      else{
        listCounter += `${counter} todos`;
      }
      this.$counter.innerHTML = listCounter;


  }

  initRender() {
    this.host.innerHTML = this._iniTemplate;
  }

  cleanField() {
    this.$field.value = '';
  }
  
  listenAddTodo(cb /*addTodo from component*/) {
    this.$form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = this.$field.value.trim();
      if (!title) {
        alert('Заголовок не может быть пустым');
        return;
      }
      cb(title);
    });
  }

  listenDoneChange(cb /*toggleDone из component*/) {
    this.$list.addEventListener('change', (e) => {
      const id = +e.target.getAttribute('data-id')
      cb(id)
    }); // когда меняется checkbox, запускается toggleDone
  }
  listenDeleteTodo(cb){
    this.$deleteDone.addEventListener('click',(e)=>{
      cb();

    });
  }
 
}
