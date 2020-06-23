import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLink = styled.a`
  background-color: blue;
`;

class Link extends React.Component {

  render() {
    const { children, LinkProp } = this.props;
    return (
      <div>
        <StyledLink className={'linkClass'}>{children}</StyledLink>
      </div>
    );
  }
}

Link.propTypes = {
  children: PropTypes.node
}

Link.defaultProps = {
  children: <div/>
}

export default Link;