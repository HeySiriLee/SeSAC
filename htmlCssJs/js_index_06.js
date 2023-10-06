// // for문
// for (let i = 0; i < 10; i++) {}

// // 중첩 for문
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= 5; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }

//   // while문
//   while (i < 10) {
//     console.log(i);
//     i++;
//   }
// }

// break, continue 개념 정리

// 실습
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log("총합 = " + sum);

let num13 = Number(prompt("숫자를 입력해주세용"));
for (let j = 0; j <= num13; j++) {
  if (j % 13 === 0 && j % 2 !== 0) {
    console.log(j);
  }
}

for (let k = 2; k <= 9; k++) {
  console.log(`${k}단`);
  for (let l = 1; l <= 9; l++) {
    console.log(`${k} x ${l} = ${k * l}`);
  }
  console.log(""); // 각 단 사이에 한 줄 띄우기
}

// 1부터 100까지의 배열 생성
const numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

// for문을 사용하여 배열의 합 계산
let sumFor = 0;
for (let i = 0; i < numbers.length; i++) {
  sumFor += numbers[i];
}

// for...of문을 사용하여 배열의 합 계산
let sumForOf = 0;
for (const number of numbers) {
  sumForOf += number;
}

// forEach문을 사용하여 배열의 합 계산
let sumForEach = 0;
numbers.forEach((number) => {
  sumForEach += number;
});

console.log("for문을 사용한 배열의 합: " + sumFor);
console.log("for...of문을 사용한 배열의 합: " + sumForOf);
console.log("forEach문을 사용한 배열의 합: " + sumForEach);

// memorystage
let num = 5;
let num2 = num;
num += 5;
console.log(num, num2);
// 공간이 다름 num이라는 공간과 num과 num2

let arr = [1, 2, 3, 4, 5];
let arr2 = arr;
arr2.reverse();
console.log(arr, arr2);
// 같은 공간을 바라봄

//응용
var arr3 = [1, 2, 3, 4];
var arr4 = arr3.slice();
arr4.reverse();
console.log(arr3, arr4);

//Date
let todayDate = new Date();
console.log(todayDate);
//날짜에 삼일을 더한다던지 만료일까지 얼만큼 남았는지 할 때 사용?
