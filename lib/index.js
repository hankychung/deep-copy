"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isRaw(e) {
  if (_typeof(e) !== 'object') return true;
  return false;
}

function isArr(e) {
  if (e instanceof Array) return true;
  return false;
}

function deepCopy(e) {
  var obj = {};

  for (var k in e) {
    var v = e[k];

    if (isRaw(v)) {
      obj[k] = v;
    } else if (isArr(v)) {
      obj[k] = copyArr(v);
    } else {
      obj[k] = deepCopy(v);
    }
  }

  return obj;
}

function copyArr(e) {
  var arr = [];
  e.forEach(function (item) {
    if (isRaw(item)) {
      arr.push(item);
    } else if (isArr(item)) {
      arr.push(copyArr(item));
    } else {
      arr.push(deepCopy(item));
    }
  });
  return arr;
}

var _default = function _default(e) {
  if (isRaw(e)) return e;
  if (isArr(e)) return copyArr(e);
  if (_typeof(e) === 'object') return deepCopy(e);
  throw 'function is not supported';
};

exports["default"] = _default;
