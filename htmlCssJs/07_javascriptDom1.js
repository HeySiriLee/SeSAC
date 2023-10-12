let elById = document.getElementById("box");
console.log(elById);

let elByClass = document.getElementsByClassName("box");
console.log(elByClass[0]);

let elByTag = document.getElementsByTagName("span");
console.log(elByTag);

let elByName = document.getElementsByName("email");
console.log(elByName);

// 선택자를 이용하여 요소를 선택
let elBySelector = document.querySelector(".box");
let elBySelectorAll = document.querySelectorAll(".box");
console.log(elBySelector);
console.log(elBySelectorAll);

let elBox2 = document.querySelector("#box2");
console.log(elBox2);
console.log(elBox2.innerText);
console.log(elBox2.innerHTML);

elBox2.innerText = "안녕안녕박스2야";
elBox2.innerHTML = "안녕안녕<b>박스22야</b>";
