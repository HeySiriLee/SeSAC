class Area {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

let area1 = new Area(1, 2);
console.log(`넓이: `, area1.getArea());

class Rectangle extends Area {
  getArea() {
    return this.width * this.height;
  }
  getDiagonal() {
    return Math.sqrt(width ** 2 + height ** 2);
  }
}
class Triangle extends Area {
  getArea() {
    return (this.width * this.height) / 2;
  }
}
class Circle {}
// 전체 클래스 상속
console.log(
  `직사각형 넓이: ${rec1.getArea()}, 삼각형 넓이: ${tri1.getArea()}, 원 넓이: ${cir1.getArea()}`
);
