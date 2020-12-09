export class CategoriesTemplate {
  constructor(host) {
    this.host = host;
  }

  template(data) {
    
    let tpl = '';
    data.listToShow.forEach(cat => {
      tpl += `
        <button class="switch-category" data-type="${cat.name}">${cat.type} - ${cat.name} ${cat.selected === true ? 'SELECTED' : ''}</button>
      `
    });
    return tpl;
    
  }

  render(data) {
    this.host.innerHTML = this.template(data.categories);
  }
  listenSwitch(cb) {
    this.host.addEventListener('click', (e) => {
     
      if (e.target.classList.contains('switch-category')) {
        
        cb(e.target.getAttribute('data-type'))
       
      }
    })
  }
}