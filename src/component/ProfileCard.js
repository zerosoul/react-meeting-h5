import React, { PureComponent } from "react";
import styled from "styled-components";
import ani from "animejs";

const Card = styled.div`
  background: #ff6a14;
  position: relative;
  padding: 0 1.2rem 0 2.6rem;
  border-radius: 0.8rem;
  margin-bottom: 0.6rem;
  margin-left: 2rem;
  display: flex;
  min-height: 5rem;
  align-self: center;
  width: 14rem;
  &:nth-child(even) {
    background: #ffa71f;
    .avatar {
      border-color: #ffa71f;
    }
  }
  .avatar {
    background: #fff;
    border: 0.2rem solid #ff6a14;
    box-sizing: border-box;
    border-radius: 50%;
    position: absolute;
    left: -2.8rem;
    top: 50%;
    margin-top: -2.2rem;
    width: 4rem;
    height: 4rem;
  }

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: 0.8rem;
      font-weight: 800;
      margin-bottom: 0.2rem;
    }
    .desc {
      font-size: 0.6rem;
      line-height: 1.4;
      &.bold {
        font-weight: 800;
      }
    }
  }
`;
export default class ProfileCard extends PureComponent {
  constructor() {
    super();
    this.card = React.createRef();
  }
  componentDidMount() {
    const card = this.card.current;
    const avatar = card.querySelector(".avatar");
    const lines = card.querySelectorAll(".intro > span");
    const tl = ani.timeline();
    tl.add({
      targets: card,
      width: [0, "14rem"]
    })
      .add(
        {
          targets: avatar,
          opacity: [0, 1],
          scale: [2, 1]
        },
        "-=500"
      )
      .add(
        {
          targets: lines,
          opacity: [0, 1],
          translateX: [-200, 0],
          delay: (ele, i) => {
            return i * 100;
          }
        },
        "-=800"
      );
  }
  render() {
    const { avatar, name, title = "壹点壹滴金牌讲师", descs } = this.props;
    return (
      <Card ref={this.card}>
        <img className="avatar" src={avatar} alt={name} />
        <p className="intro">
          <span className="name">{name}</span>
          <span className="desc bold">{title}</span>
          {descs.map(desc => (
            <span key={desc} className="desc">
              {desc}
            </span>
          ))}
        </p>
      </Card>
    );
  }
}
