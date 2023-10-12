// assigningDecomposition
const fruits = ["apple", "banana", "grape"];

const [apple2, banana2, grape2, cherry = "cherry"] = fruits;
console.log(apple2, cherry);
// 3-4 코드와 동일
// const apple2 = fruits[0]
// const banana2 = fruits[1]
// const grape2 = fruits[2]
// console.log(apple2);

const obj1 = {
  name: "siri",
  gender: "w",
  age: 0,
};

const { name: nickname, age, phone = "01000000000" } = obj1;
console.log(nickname, age, phone);
// 18 코드와 동일
// const nickname = obj.nickname;
// const age = obj.age;
// console.log(nickname, age, phone);

// Spread
// ...[배열의 원소들] => 배, 열, 의, 원, 소, 들
// spread는 배열로 감싸줬던것을 풀어줌
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c", "d", "e"];

const arr3 = [...arr1, ...arr2];
console.log("arr3: ", arr3);

const word1 = "abc";
const word2 = "xyz";

const word3 = [...word1, ...word2];
console.log(word3);

const obj2 = {
  ...obj1,
  adress: "용산구",
};
console.log("obj: ", obj2);

// rest Parameter
const values = [10, 20, 30];
function get(a, ...rest) {
  console.log("a: ", a); // a
  console.log("rest: ", rest); // [20, 30]
}

get(...values);
