export class Observable {
  constructor() {
    this._subscriptions = [];
  }

  subscribe(cb) {
    this._subscriptions.push(cb);
  }
  notify(valueToNotify) {
    this._subscriptions.forEach(function (sb) {
      sb(valueToNotify);
    });
  }
  unSubscribe(cb) {
    this._subscriptions = this._subscriptions.filter(function (sb) {
      return sb != cb;
    });
  }
  subscribeAll(objs, cb) {
    objs.forEach(function (obj) {
      obj.subscribe(cb);
    });
  }
}