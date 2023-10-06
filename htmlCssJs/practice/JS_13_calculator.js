function calculator() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const result = document.querySelector("#result");

  // input ver1
  if (operation == "+") {
    result.value = num1 + num2;
  } else if (operation == "-") {
    result.value = num1 - num2;
  } else if (operation == "*") {
    result.value = num1 * num2;
  } else if (operation == "/") {
    if (num2 !== 0) {
      result.value = num1 / num2;
    } else {
      alert("0으로 나눌 수 없습니드아");
    }
  } else {
    alert("올바른 연산자를 입력하세요!");
  }
}

// input ver2
// switch (opertaion) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;
//   default:
//     alert("연산자를 입력해주세용");
// }

// reset ver1
// function resetCalc() {
//   document.getElementById("num1").value = "";
//   document.getElementById("num2").value = "";
//   document.getElementById("operation").value = "";
//   document.getElementById("result").value = "";
// }
