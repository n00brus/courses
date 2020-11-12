;(function() {

    const products = [
      {
        name:"Телевизор"
      },
      {
        name:"Машина"
      },
      {
        name:"Ручка"
      },
      {
        name:"Нож"
      }
    ]

    const form = document.querySelector('#app #addForm');
    const addBtn = document.querySelector('#app #addForm  .add-form__add');
    const formField = document.querySelector('#app #addForm .add-form__field');
    const productsList = document.querySelector('#app .products');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const productName = formField.value.trim(); 
      if (!productName) {
        return;
      }
      for (let i = 0; i < products.length; i++) {
        if(productName === products[i].name){
            productsList.innerHTML += `<li class="products__item">
            ${productName} <button class ="delbutton">X</button>
          </li>`;
          formField.value = "";
          return;
        }
          
    }
    formField.value = "";
      alert("Ви ввели неверное значение");
     

      console.log(productName);
    })
    let form1 = document.querySelector('#app #products');
    
    form1.addEventListener('click', function(event) {
        event.preventDefault();
        const item = event.target.parentElement.outerHTML;
        form1.innerHTML = form1.innerHTML.replace(item,"");


        
        console.log(form1.innerHTML);
        console.log(item);

    })
  
  }())

