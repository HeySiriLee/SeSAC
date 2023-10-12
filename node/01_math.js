// 함수 내부에 {} 가 없으면 바로 return
const add = (a, b) => a + b;
const remove = (x, y) => x - y;
const PI = 3.14;

// 이 파일은 module화 하는 code
// key: value 동일함
module.exports = {
  add,
  remove,
  PI,
};
