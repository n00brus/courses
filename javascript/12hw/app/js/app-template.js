export class AppTemplate {
  constructor(host) {
    this.host = host;
    this.initTemplate = `
      <div class="app__aside app__aside--left categories" data-component="categories"></div>
      <div class="app__main">
          <div class="app__type-switcher" data-component="typeSwitcher"></div>
          <div class="app__add-form" data-component="operationEditor"></div>
      </div>
      <div class="app__aside app__aside--right operations" data-component="operations"></div>
    `
  }

  render() {
    this.host.innerHTML = this.initTemplate;
  }
}