import { Component } from "react";

class ClassLifeCycle extends Component {
  state = { text: "" };
  // 1. Component가 mount 될 때
  componentDidMount() {
    console.log("class component: mount");
  }
  // 2. Component가 update 될 때
  componentDidUpdate(prevProps, prevState) {
    console.log("class component: update");

    // text state 가 변경될 때마다 if문 안에 있는 코드 실행
    if (prevState.text !== this.state.text) {
      console.log("class component: text update");
    }
  }
  // 3. Component가 unmount 될 때
  conponentWillUnmount() {
    console.log("class component: unmount");
  }

  render() {
    return (
      <>
        <h2>Classical Component LifeCycle</h2>
        <div>number: {this.props.num}</div>
        <br />
        <input
          type="text"
          valuer={this.state.text}
          onchange={(e) => this.setState({ text: e.target.value })}
        />
        <br />
      </>
    );
  }
}

export default ClassLifeCycle;
