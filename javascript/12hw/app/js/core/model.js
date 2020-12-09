import { Observable } from "./observable.js";

export class Model extends Observable{
  constructor(state) {
    super();
    this.state = state || {};
  }

  set(key, data) {
    //  console.log("key");
    //   console.log(key);
    //   console.log(data);
    //   console.log("data");
    this.state[key] = data;
    this.notify(this.state);
    // console.log(this.state);
  }

  get(key) {
    return key ? this.state[key] : this.state;
  }
}