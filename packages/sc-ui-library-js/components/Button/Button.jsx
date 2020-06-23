import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: red;
`;


const Button = ({ props }) => {
  const { children, buttonProp } = props;
  return (
    <div>
      <StyledButton className={'buttonClass'}>{children}</StyledButton>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node
}

Button.defaultProps = {
  children: <div>kill me</div>,
}

export default Button;
