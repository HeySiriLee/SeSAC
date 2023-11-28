import 그럼20000 from "./그럼20000.jpg";

function FuncComponent2() {
  const text = "react!";
  const name = "siri";

  const ifRenderTest = () => {
    if (name === "siri") {
      return "Hi!";
    } else if (name === "sesac") {
      return "wow!";
    } else {
      return "Who R U?";
    }
  };
  return (
    <>
      {/* 1-1. 하나의 태그로 감싸서 return */}
      <div>Functional Component2 입니다</div>
      <div>Functional Component2 입니다</div>

      {/* 1-2. js 문법 사용 가능 */}
      <h4>Bye, {text}</h4>

      {/* 1-3. 삼항 연산자 조건에 따른 렌더링 */}
      <h4>{name === "siri" ? "Nice to meet you!" : "Who R U?"}</h4>

      {/* 2-1. 복잡한 조건을 이용하고 싶다면? 위에서 함수를 만들어서 사용 */}
      <h4>{ifRenderTest()}</h4>

      {/* 2-2. 논리 연산자 조건에 따른 렌더링 */}
      <h4>{name === "sesac" && "Hello!"}참고로 False값!</h4>

      {/* 3. inline style 적용 방법 > style 속성값으로 객체 전달 */}
      <div style={{ fontWeight: "bold", fontSize: "15px", color: "yellow" }}>
        ohNoReact!!!!!
      </div>
      {/* 4-1. class를 jsx에서 사용하기 */}
      <div className="test-css">jsx에서 css 사용하기(className) </div>

      {/* 4-2. onclick을 jsx에서 사용하기 */}
      <button
        onClick={() => {
          console.log("click!");
        }}
      >
        Console에 찍힙니당
      </button>

      {/* 5. Close tag 필수! */}
      <br />
      <img src="./logo192.png" alt="REACT Img" />
      <br />
      <img
        src={그럼20000}
        alt="이제 그만!"
        style={{ width: "70%", height: "70%" }}
      />
    </>
  );
}
export default FuncComponent2;
