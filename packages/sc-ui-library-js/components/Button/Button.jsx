import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: red;
`;
class Button extends React.Component {
  static defaultProps = {
    children: <div>TEST</div>,
  };
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, buttonProp } = this.props;
    return (
      <div>
        <StyledButton className={buttonProp}>{children}</StyledButton>
      </div>
    );
  }
}

// const Button = ({ props }) => {
//   const { children, buttonProp } = props;
//   return (
//     <div>
//       <StyledButton className={buttonProp}>{children}</StyledButton>
//     </div>
//   );
// };

// Button.propTypes = /*#__PURE__*/{
//   children: /*#__PURE__*/PropTypes.node
// }

// Button.defaultProps = {
//   children: <div/>
// }

export default Button;
