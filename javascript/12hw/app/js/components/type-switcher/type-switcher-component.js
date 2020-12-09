import { TypeSwitcherTemplate } from "./type-switcher-template.js";
import { Component } from '../../core/component.js';

export class TypeSwitcherComponent extends Component {
  constructor(name, model, callbacks) {
    
    super(name, model, TypeSwitcherTemplate);
    this.callbacks = callbacks;
    this.template.listenSwitch(this.callbacks.onTypeSwitch)
  }
}
