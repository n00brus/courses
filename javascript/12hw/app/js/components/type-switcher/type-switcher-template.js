  export class TypeSwitcherTemplate {
  constructor(host) {
    this.host = host;
  }

  template(data) {
    
    return `
      <button class="switch-btn" data-type="profit">Profit ${data === 'profit' ? 'SELECTED' : ''}</button>
      <button class="switch-btn" data-type="consumption">Consumtion ${data === 'consumption' ? 'SELECTED' : ''}</button>
    `;
  }

  render(data) {
    this.host.innerHTML = this.template(data.type);
  }

  listenSwitch(cb) {
    this.host.addEventListener('click', (e) => {
      if (e.target.classList.contains('switch-btn')) {
        cb(e.target.getAttribute('data-type'))
      }
    })
  }
}