import React, { PureComponent } from "react";
import styled from "styled-components";
import ani from "animejs";

const Title = styled.h2`
  color: #fff;
  background: #ff6a14;
  border-radius: 0.4rem;
  font-weight: 800;
  font-size: 0.8rem;
  line-height: 1.4;
  padding: 0.3rem 0.6rem;
`;
export default class DepartmentTitle extends PureComponent {
  constructor() {
    super();
    this.titleEle = React.createRef();
  }
  componentDidMount() {
    const title = this.titleEle.current;
    ani({
      targets: title,
      translateY: [-200, 0],
      translateZ: 0,
      opacity: [0, 1]
    });
  }
  render() {
    const { title } = this.props;
    return <Title ref={this.titleEle}>{title}</Title>;
  }
}
