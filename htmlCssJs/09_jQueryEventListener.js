// 로딩 이벤트 : html이 로드된 후 실행할 코드를 걸어줌
$(document).ready(function () {
  //handler
  //body가 롣된 후 실행시키고 싶은 코드
  console.log($(".container"));
});
//3.x버전 이상
$(function () {
  console.log($(".container"));
});
// 마우스 이벤트
// 클릭했을 때, 실행 시키고 싶은 코드
$(".container").click(function () {
  // event가 걸린 요소에 this를 담음
  console.log(this);
  $(".container").css("background-color", "#54b4b7");
});
// 마우스가 올라갔을 때, 실행 시키고 싶은 코드
$(".container").mouseover(function () {});
// 마우스가 나갔을 때, 실행 시키고 싶은 코드
$(".container").mouseout(function () {});
// mouseover와 mouseout를 한번에 지정
$(".comtainer").hover(
  function () {
    // 마우스가 올라갔을 때
  },
  function () {
    // 마우스가 나갔을 때
  }
);
$(document).scroll(function () {
  if (document.body.scrollHeight >= "스크롤 위치") {
    // 하고 싶은 동작
  }
  console.log(document.body.clientHeight);
  console.log("안녕스크로로로로롤");
});

// 키보드 이벤트
// keydown :  선택한 요소에서 키보드를 누르는 이벤트가 발생한 경우
$("input[name=pw]").keydown(function () {
  console.log(this.value);
});
// keyup :  선택한 요소에서 키보드를 떼는 이벤트가 발생한 경우
$("input[name=pw]").keyup(function (event) {
  if (event.key == "Enter") {
    console.log("key : ", event.key);
    console.log("value : ", this.value);
  }
});

// on Method : event를 걸겠당
$("선택자").on("keyup", function (event) {
  if (event.key == "Enter") {
    console.log("value : ", this.value);
  }
});
