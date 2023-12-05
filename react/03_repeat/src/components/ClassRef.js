import { Component, createRef } from "react";

class ClassRef extends Component {
  input2 = createRef();

  //   callback 함수를 이용하여 ref 지정했을 때, ref 변수를 사용하는 방법
  focusInput1 = () => {
    this.input1.focus();
  };

  focusInput2 = () => {
    this.input2.current.focus();
  };

  render() {
    return (
      <>
        {/* callback 함수를 이용하여 ref 지정 */}
        <input
          type="text"
          ref={(ref) => {
            this.input1 = ref;
          }}
        />
        &nbsp;
        <button type="button" onClick={this.focusInput1}>
          눌러쥬세용
        </button>
        <br />
        <input type="text" ref={this.input2} />
        &nbsp;
        <button type="button" onClick={this.focusInput2}>
          눌러쥬세용
        </button>
      </>
    );
  }
}

export default ClassRef;
