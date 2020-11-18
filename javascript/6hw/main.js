  
//init
const app = document.querySelector('#app');
const todosContainer = app.querySelector('#todos-container');

// рендерим изначальный шаблон (скелет) приложения (todos-container)
todosContainer.innerHTML = `
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
`;

//state
let todos = [
  {
    id: 1,
    title: 'Learn JS',
    done: true
  },
  {
    id: 2,
    title: 'Learn Angular',
    done: false
  },
  {
    id: 3,
    title: 'Learn Swift',
    done: false
  }
]

//selectors
const form = todosContainer.querySelector('.todos-form');
const field = form.querySelector('.todos-form__field');
const list = todosContainer.querySelector('.todos-list');
const todosAmount = todosContainer.querySelector('.todos__counter');
const deleteDone = todosContainer.querySelector('.tododelete-done');
//functions
function renderCount() {
  let number = todosCounter();
  let listCount="";
    if(number===1){
    listCount = `You have ${number} todo`;
    }
    else{
       listCount = `You have ${number} todos`;
    }
    todosAmount.innerHTML = listCount;




}
function renderTodos() { // функция чтобы держать state и html консистентными
  let listTemplate = '';
  todos.forEach(todo => {
    listTemplate += `
      <li class="todo">
        <input
          type="checkbox"
          data-id="${todo.id}"
          ${todo.done ? 'checked' : ''}
        >
        ${todo.title}
      </li>
    `;
  })
  list.innerHTML = listTemplate;
}

function addTodo(event) { // обработчик события change на checkbox'ах (принимает объект события)
  event.preventDefault();
  
  const title = field.value.trim();
  if (!title) {
    return;
  }
  const newTodo = {
    id: getNewTodoId(),
    done: false,
    title
  }
  // todos.push(newTodo); // !!!так не делать!!! в таком случае todos "не меняется" (ссылка на todos остается прежней)
  todos = [...todos, newTodo]; // Добавляем newTodo в конец todos (state)
  renderTodos(); // перерендериваем todos (html/view)
  renderCount();
  field.value = ''; // очищаем инпут после добавления newTodo
  console.log(todos);
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

function toggleDone(e) { // обработчик события change на checkbox'ах (принимает объект события)
  const id = +e.target.getAttribute('data-id');
  todos = todos.map(
    todo => todo.id === id ? {...todo, done: !todo.done} : todo
  ) // цикл проходится по всем тудушкам. если id текущей todo равен id который передали в функцию, 
    // то возвращаем todo с противоположным done на ее место
  console.log(todos);
  renderTodos(); // перерендериваем todos (html/view)
  renderCount();
  // todos = todos.map(function (todo){
  //   if (todo.id === id) {
  //     return {...todo, done: !todo.done}
  //   } else {
  //     return todo;
  //   }
  // })
  // todos = todos.map(todo => {
  //   return todo.id === id ? {...todo, done: !todo.done} : todo;
  // })
}
function todosCounter(){
    let count=0;
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].done===false){
            count+=1;
        }
        
    }
   
    return count;
}
function removedone(){
    
    for (let i = 0; i < todos.length; i++) {
        if(todos[i].done==true){
           todos.splice(i,1);
           i--;
        }
        
        
    }
    
   
    renderTodos(); // перерендериваем todos (html/view)
    renderCount();
       
}
function getNewTodoId() {
  // let id = 1;
  // if (todos.length) {
  //   id = todos[todos.length - 1].id + 1;
  // }
  // return id;
  return todos.length ? todos[todos.length - 1].id + 1 : 1;
}

function init() { // инициализирующая функция которая вешает прослушиватели DOM событий и рендерит изначальный state
  renderTodos(); // Рендерим изначальные todos (первый раз)
  renderCount();
  form.addEventListener('submit', addTodo); // когда сомитим форму, запсукается addTodo
  list.addEventListener('change', toggleDone); // когда меняется checkbox, запускается toggleDone
  deleteDone.addEventListener('click', removedone); // когда нажимают removedone, запускается removedone
  console.log(todos);
  
}

init();