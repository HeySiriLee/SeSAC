// 문제코드!
function goMart1() {
  console.log("뭘 살까?");
}

let product1;
let price1;

function pickDrink1() {
  setTimeout(function () {
    console.log("결정~!");
    product1 = "Coke";
    price1 = 1500;
  }, 100);
}

function pay1(product1, price1) {
  console.log(`상품명: ${product1}, 가격: ${price1}`);
}

goMart1();
pickDrink1();
pay1(product1, price1);

// callback function : parameter로 넘겨서 실행
// example1
function goMart2() {
  console.log("뭘 살까?");
}

let product2;
let price2;

function pickDrink2(callback) {
  setTimeout(function () {
    console.log("결정~!");
    product2 = "Zero Coke";
    price2 = 1500;
    callback(product2, price2);
  }, 1000);
}

function pay2(product2, price2) {
  console.log(`상품명: ${product2}, 가격: ${price2}`);
}

goMart2();
pickDrink2(pay2);

// Promise
function promise(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve("promise 상태는 fulfilled! then으로 연결~ flag는 true!");
    } else {
      reject("promise 상태는 rejected! catch로 연결~ flag는 false");
    }
  });
}
// 특정 함수가 return 하는 값이 promis 객체일 경우, chaining으로 then, catch라는 Method 사용
promise(true)
  .then((result) => {
    // result에는 resolve로 보낸 parameter 값이 들어옴
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

promise(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    // result에는 reject로 보낸 parameter 값이 들어옴
    console.log(err);
  });

// example1
function goMart3() {
  console.log("뭘 살까?");
}

let product3;
let price3;

function pickDrink3() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("결정~!");
      product3 = "Sprite";
      price3 = 1500;
      resolve(true);
    }, 1500);
  });
}

function pay3(product3, price3) {
  console.log(`상품명: ${product3}, 가격: ${price3}`);
}

goMart3();
pickDrink3().then(() => {
  pay3(product3, price3);
});
// example2: Not use Promise chaining
function add1(n1, n2, callback) {
  setTimeout(function () {
    let result1 = n1 + n2;
    callback(result1);
  }, 2000);
}
function mul1(n, callback) {
  setTimeout(function () {
    let result1 = n * 2;
    callback(result1);
  }, 2250);
}
function sub1(n, callback) {
  setTimeout(function () {
    let result1 = n - 1;
    callback(result1);
  }, 2500);
}

add1(4, 3, function (x) {
  console.log("1: ", x);
  mul1(x, function (y) {
    console.log("2: ", y);
    sub1(y, function (z) {
      console.log("3: ", z);
    });
  });
});
// example3: Use Promise chaining
function add2(n1, n2) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let result2 = n1 + n2;
      resolve(result2);
    }, 3000);
  });
}
function mul2(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let result2 = n * 2;
      resolve(result2);
    }, 3250);
  });
}
function sub2(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let result2 = n - 1;
      resolve(result2);
    }, 3500);
  });
}

add2(4, 3)
  .then((result2) => {
    console.log("1: ", result2);
    return mul2(result2);
  })
  .then((result2) => {
    console.log("2: ", result2);
    return sub2(result2);
  })
  .then((result2) => {
    console.log("3: ", result2);
  });

// async: return promise / await: async 함수 내부에서만 사용 가능

// example1
function goMart4() {
  console.log("뭘 살까?");
}
let product4;
let price4;

function pickDrink4() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("결정~!");
      product4 = "Coke";
      price4 = 1500;
      resolve();
    }, 5000);
  });
}

function pay4() {
  console.log(`상품명: ${product4}, 가격: ${price4}`);
}

async function exec() {
  goMart4();
  await pickDrink4();
  pay4();
}

exec();
