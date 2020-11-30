class App {
  constructor(selector) {
    this.host = document.querySelector(selector);
    this.todosComponent = new TodosComponent(this.host, '#todos-component');
  }
}

new App('#app');
