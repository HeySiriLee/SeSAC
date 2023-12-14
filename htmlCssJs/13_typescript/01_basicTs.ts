let str: string = "hello Typescript";
console.log(str);

let undif: undefined = undefined;
// undif = 5; Error
let nu: null = null;
// nu = 2; Error

let arr: number[] = [1, 2, 3, 4, 5];

let strArr: string[] = ["abc", "def", "ghi"];
let strArr2: Array<string> = ["zyx", "wvu", "str"];

let numStrArr: (number | string)[] = [1, "a", 2, "b"];

// 지양해야함니댱
let anyArr: any[] = ["a", null, undefined, 1, {}];

enum Weather1 {
  sun = 0,
  cloud = 1,
  wind = 2,
}
console.log(Weather1.sun);
const weather = 0;
if (weather == Weather1.sun) {
  console.log("맑은 날씨");
}

enum Weather2 {
  sun = "sun",
  cloud = "cloud",
  wind = "wind",
}
console.log(Weather2.wind);
