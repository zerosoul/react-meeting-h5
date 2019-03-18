import React, { PureComponent } from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #ff6a14;
  position: relative;
  padding: 0 1.4rem 0 3rem;
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;
  margin-left: 2rem;
  display: flex;
  min-height: 6rem;
  align-self: center;
  width: 16rem;
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
    left: -3.5rem;
    top: 50%;
    margin-top: -2.4rem;
    width: 5rem;
    height: 5rem;
  }

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: 1.2rem;
      font-weight: 800;
      margin-bottom: 0.4rem;
    }
    .desc {
      font-size: 0.7rem;
      line-height: 1.4;
      &.bold {
        font-weight: 800;
      }
    }
  }
`;
export default class ProfileCard extends PureComponent {
  render() {
    const { avatar, name, title = "壹点壹滴金牌讲师", descs } = this.props;
    return (
      <Card>
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
