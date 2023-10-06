const boxes = document.querySelectorAll(".box"); //요소하나가 아님!
const box1 = boxes[0];
box1.innerHTML = "안녕요소속성아ㅠㅠ";

console.log(box1.classList);

// box1.classList.add("red");
box1.classList.remove("red");

function twinckle() {
  box1.classList.toggle("red");
  //   if (box1.classList.contains("red")) box1.classList.remove("red");
  //   else box1.classList.add("red");
}
const input = document.querySelector("input");
function addPlaceholder() {
  input.setAttribyte("placeholder", "이름을 입력하세요");
}

// 특정 요소들의 자식 요소들의 접근
const container = document.querySelector(".container");
console.log(container.children[1]); // 배열을 반환

// 특정 요소들의 부모 요소에 접근
console.log(box1.parentNode); // 하나의 요소 반환

//특정 요소의 형제 요소에 접근
console.log(box1.nextElementSibling); // 다음 형제 요소 하나
console.log(boxes[1].previousElementSibling); // 이전 형제 요소 하나

//마지막 자식으로 추가(append:문자열도인자로넘길수잇음, appendChild:Node객체만넘길수잇음)
function addBox() {
  const container2 = document.querySelector(".container"); // 바로 직계 부모 요소 선택해야함
  const newBox = document.createElement("div"); //추가할 태그 적기
  //   newBox.classList.add("box");
  //   newBox.classList.add("red");
  newBox.className = "box red";
  container2.appendChild(newBox);
}

//첫번째 자식으로 추가(prepend)
container2.prepend(newBox);

//형제로 추가 (before, after)
container2.before(newBox);
container2.after(newBox);
