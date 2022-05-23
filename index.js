HTMLElement.prototype.q = function (i) {
  return this.querySelector(i);
};
HTMLDocument.prototype.q = function (i) {
  return this.querySelector(i);
};
Object.prototype._pipe_ = function (fn) {
  return fn(this);
};
