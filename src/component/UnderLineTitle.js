import React, { PureComponent } from "react";
import styled from "styled-components";
const Title = styled.h1`
  color: ${({ fc }) => fc};
  font-size: ${({ fs }) => fs};
  font-weight: 800;
  box-shadow: inset 0 -0.4em ${({ bg }) => bg};
  margin-bottom: ${({ mb }) => mb};
`;
export default class UnderLine extends PureComponent {
  render() {
    const {
      title,
      mb = "2rem",
      fs = "1rem",
      bg = "#ccc",
      fc = "#ff6a1c"
    } = this.props;
    return (
      <Title mb={mb} fs={fs} bg={bg} fc={fc}>
        {title}
      </Title>
    );
  }
}
