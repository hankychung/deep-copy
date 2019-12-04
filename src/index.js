function isRaw(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return true;
  return false;
}

function isArr(e) {
  if (e instanceof Array) return true;
  return false;
}

function deepCopy(e) {
  let obj = {};
  for (let k in e) {
    let v = e[k];
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
  let arr = [];
  e.forEach(item => {
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

export default e => {
  if (typeof e === "function")
    throw "FUNCTION is not supported to be copy source in @hankychung/deep-copy";
  if (isRaw(e)) return e;
  if (isArr(e)) return copyArr(e);
  if (typeof e === "object") return deepCopy(e);
};
