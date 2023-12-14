function sum1(a: number, b: number): number {
  return a + b;
}

const sum2 = (a: number, b: number): number => {
  return a + b;
};

const sum3 = (a: number, b?: number): number => {
  if (b) {
    return a + b;
  } else return a;
};

// void: function에 return 값이 없을 때 사용
const hello = (): void => {
  console.log("Hola");
};
