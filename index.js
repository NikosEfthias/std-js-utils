HTMLElement.prototype.q = function (i) {
  return this.querySelector(i);
};
HTMLDocument.prototype.q = function (i) {
  return this.querySelector(i);
};
Object.prototype._pipe = function (fn) {
  return fn(this);
};
