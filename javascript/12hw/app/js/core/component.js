export class Component {
  constructor(name, model, TemplateConstructor) {
    this.host = document.querySelector(`[data-component=${name}]`);
    this.model = model;
    this.template = new TemplateConstructor(this.host);

    this.init();
  }

  init() {
    this.model.subscribe(this.render.bind(this))
  }

  render(data) {
    // console.log(data);
    this.template.render(data);
  }
}