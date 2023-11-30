import { Component } from "react";

class ClassEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "헬로웅 ",
    };
    // 함수 선언문을 사용하여 메소드를 만들 때,
    // METHOD 내부에서 CLASS의 this를 사용하고 싶을 경우,
    // 생성자 내에서 this를 bind 해주는 작업을 거쳐야 함
    this.handleOnClick1 = this.handleOnClick1.bind(this);
  }

  // 함수 내부에서 자체적인 this를 만들 수 있고, this가 클래스의 this가 아니게 됌?

  // 해결법 1: 함수 선언문: 동적 바인딩하기 때문에 함수가 사용될 때 this가 결정됌
  handleOnClick1() {
    console.log();
    this.setState({ msg: "빠잉 " });
  }

  // 해결법 2: 함수 표현식: 정적 바인딩을 함, 함수가 선언될 때 this를 결정 지음. 함수를 선언하는 code를 읽을 때 this가 결정됌
  handleOnClick2 = (event) => {
    console.log(event);
    this.setState({ msg: "다시헬로웅 " });
  };

  render() {
    return (
      <>
        <h3>Classical Component Event Handling </h3>
        {this.state.msg}
        <button onClick={this.handleOnClick1}>눌러봥!</button>
        &nbsp;
        <button onClick={this.handleOnClick2}>다시눌러봥!</button>
        &nbsp;
        <button
          onClick={(e) => {
            // event = e , react의 합성 이벤트 객체, 합성 이벤트에 대한 모든 정보를 담고 있음
            // target에 접근하면 event가 걸린 tag를 확인할 수 있음
            console.log(e.target);
            console.log(e.type);
          }}
        >
          얜좀다른애
        </button>
      </>
    );
  }
}
export default ClassEvent;
