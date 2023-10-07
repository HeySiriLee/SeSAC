// 변수 선언 할당
//var : 재선언 가능, 재할당 가능, 남발ㄴ,undefined
var whatIsVar = "itsVarrr";
var whatIsVar = "itsVarr";
whatIsVar = "itsVar";

//let : 재선언 불가능, 재할당 가능, undefined
let whatIsLet = "itsLett";
whatIsLet = "itsLet";

//const : 재선언 불가능, 재할당 불가능
const whatIsConst = "itsConst";

console.log(whatIsVar, whatIsLet, whatIsConst);

// Array: 하나의 변수에 여러개의 값을 담고 싶을 때
let num = ["1", "2", "3", "4", "5"];

console.log(num);

let me = {
  //Key: value
  name: "이은실",
  eName: "SiriLee",
  age: ["1", "12", "20", "27"],
  isCute: true,
  howRU: function () {
    return "항상배고프다";
  },
};
console.log(me);
console.log(me.howRU());

// 형변환
let mathScore = Number(77);
let engScore = Number(88);
let avgScore = (mathScore + engScore) / 2;
console.log(avgScore);

// 명시적 함수 선언 > 함수를 쓰기 전 호출해도 상관X = 호이스팅
// 함수 표현식 선언 > 호이스팅X
let multifly = (num1, num2) => {
  return num1 * num2;
};

function square(num3) {
  console.log(num3 ** 3);
}
console.log(square(4));

let conditional = () => {
  if (조건1) {
    //조건1이 true일때
  } else if (조건2) {
    //조건1이 false이고 조건2가 true일때
  } else {
    //조건1이 false이고 조건2도 false 일 때 실행할 코드
  }
};

let age = (age) => {
  if (age >= 20) {
    console.log("성인");
  } else if (age >= 17) {
    console.log("고등학생");
  } else if (age >= 14) {
    console.log("중학생");
  } else if (age >= 8) {
    console.log("초등학생");
  } else {
    console.log("유아");
  }
};

let now = new Date().getHours();
let time = now == 12 >= now ? console.log("오전") : console.log("오후");
