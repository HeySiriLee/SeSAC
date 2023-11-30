import { Component } from "react";
class HandlerEx1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello World!",
    };
    this.handlerOnClick = this.handlerOnClick.bind(this);
  }

  handlerOnClick() {
    this.setState({ msg: "Goodbye World!" });
  }

  render() {
    return (
      <>
        {this.state.msg}
        &nbsp;
        <button onClick={this.handlerOnClick}>Now!</button>
      </>
    );
  }
}

export default HandlerEx1;
