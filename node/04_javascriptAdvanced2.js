// example1
const cat1 = {
  name: "장화",
  age: 2,
  mew: function () {
    console.log("냐옹");
  },
};
const cat2 = {
  name: "코코",
  age: 1,
  mew: function () {
    console.log("냐옹");
  },
};
const cat3 = {
  name: "콩이",
  age: 5,
  mew: function () {
    console.log("냐옹");
  },
};

// PascalCase 규칙을 이용해서 식별자 생성
// camelCase에서 첫글자도 대문자인 방식
class Cat {
  // constructor = 생성자: Method의 종류 중 하나? 일종?
  // (Method 중에서) Cat 클래스를 이용해서 객체를 만드는 순간에 호출되는 Method
  constructor(name2, age2) {
    this.name = name2;
    this.age = age2;
  }
  // Method
  mew() {
    console.log("냐옹");
  }
  info() {
    console.log(`이름: ${this.name}, 나이:${this.age}살`);
  }
}

// Cat Class를 이용해서 새로운 객체를 만듬.
const cat4 = new Cat("나비", 7);
const cat5 = new Cat("휴지", 2);
console.log(cat4.name, cat5.name);
cat4.mew();
cat4.info();

// class 상속 example
class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    console.log(`이 건물은 ${new Date().getFullYear() - this.year}년 됨`);
  }
}
const house1 = new House("집1", 2015);
const house2 = new House("집2", 2009);
house1.age();
house2.age();

class Apartment extends House {
  constructor(name, year, floor) {
    // 부모의 생성자 호출
    super(name, year);
    this.floor = floor;
  }

  //   // 오버라이딩 : 부모에 있는 Method를 자식이 다시 정의하는 것
  age() {
    super.age();
    console.log(`입주는 ${this.year + 1}년부터 시작`);
  }
}

const apart1 = new Apartment("Xi", 2022, 25);
console.log(apart1.name, apart1.floor);
apart1.age();

// // 오버로딩: 똑같은 이름으로 여러개의 함수를 선언하는 것(매개변수 다름)
// function test(a, b) {
//   console.log(`A: ${a}, B: ${b}`);
// }
// function test(a, b, c) {
//   console.log(`A: ${a}, B: ${b}, C: ${c}`);
// }
// test(2, 5); // 두 번째 코드가 실행되고 C: undefined 출력
