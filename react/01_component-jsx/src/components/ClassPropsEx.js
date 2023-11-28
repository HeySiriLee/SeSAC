import { Component } from "react";
import PropTypes from "prop-types";

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>Use the Class Component ( Props )</div>
        <div>
          Title: {this.props.title}, Content: {this.props.content}, Number:{" "}
          {this.props.number}
        </div>
      </>
    );
  }

  static defaultProps = {
    name: "코딩온",
  };

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
    number: PropTypes.number,
  };
}

// ClassPropsEx.defaultProps = {
//   name: "코딩온",
// };

// ClassPropsEx.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string.isRequired,
//   number: PropTypes.number,
// };

export default ClassPropsEx;
