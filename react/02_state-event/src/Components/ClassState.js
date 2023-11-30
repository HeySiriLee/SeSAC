import { Component } from "react";

class ClassState extends Component {
  // 구 버전
  // constructor(props) {
  //   //  부모 클래스의 생성자, 실행시켜야 this 객체를 사용할 수 있당
  //   super(props);
  //   this.state = {
  //     num: 0,
  //     text: "text",
  //   };
  // }

  // 현 버전
  state = {
    num1: 0,
    num2: 0,
    text: "text",
  };

  render() {
    return (
      <>
        <h3>Classic Component State Study</h3>
        <div>
          Synchronous num1 state value {this.state.num1}{" "}
          <button
            onClick={() => {
              // state 변경은 일반 변수 변경 시키듯이 변수에 재할당하는 것이 아니고,
              // state를 변경 시키는 함수를 사용한다.
              // class형 component는 setState METHOD가 제공됌
              this.setState({ num1: this.state.num1 + 1 });
            }}
          >
            + 1
          </button>
        </div>

        <div>
          Asynchronous num2 state value {this.state.num2}{" "}
          <button
            onClick={() => {
              this.setState((prevState) => {
                return { num2: prevState.num2 + 1 };
              });
              this.setState((prevState) => ({ num2: prevState.num2 + 1 }));
            }}
          >
            + 2
          </button>
        </div>
      </>
    );
  }
}

export default ClassState;
