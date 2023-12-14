type gender = "Men" | "Women";
const siri: gender = "Women";

// 객체에 대한 타입을 지정할 경우
interface ProductInfo1 {
  productName: string;
  price: number;
}
const drink: ProductInfo1 = { productName: "cocacola", price: 2500 };

interface Seller {
  name: string;
}
type ProductInfo2 = {
  productName: string;
  price: number;
  sale?: object;
  seller?: Seller;
};
const 참이슬: ProductInfo2 = {
  productName: "참이슬",
  price: 1700,
  seller: { name: "진로" },
};
// 옵셔널 체이닝
console.log(참이슬.seller?.name);

interface Person {
  name: string;
  age: number;
}
interface Student extends Person {
  studentID: string;
  eat: () => void;
}
const person: Person = { name: "siri", age: 5 };
const stu: Student = {
  name: "siri",
  age: 5,
  studentID: "00000000",
  eat: () => console.log("배고팡"),
};
