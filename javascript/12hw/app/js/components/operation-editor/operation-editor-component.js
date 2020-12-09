import {OperationEditorTemplate} from "./operation-editor-template.js";
import { Component } from '../../core/component.js';

export class OperationEditorComponent extends Component {
  constructor(name, model, callbacks) {
   
    super(name, model, OperationEditorTemplate);
    this.callbacks = callbacks;
  }
}