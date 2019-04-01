import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 3.4rem 1.4rem;
  padding-bottom: 0;
  height: 100vh;

  .blocks {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    .block {
      display: flex;
      align-items: center;
      background: #ff6a14;
      border-radius: 0.4rem;
      margin-bottom: 1rem;
      padding: 1.2rem;
      box-sizing: border-box;
      width: 16rem;
      height: 5rem;
      position: relative;
      .avatar {
        position: absolute;
        bottom: 0;
        right: 1rem;
        width: 5rem;
      }
      &.reverse {
        flex-direction: row-reverse;
        background: #ffa71f;
        .avatar {
          left: 1rem;
        }
        .intro {
          .name {
            color: #ffa71f;
          }
        }
      }
      .intro {
        font-size: 0.6rem;
        display: flex;
        flex-direction: column;
        line-height: 1.6;
        position: relative;
        width: 10rem;
        height: 5rem;
        align-items: flex-start;
        justify-content: center;
        .name {
          color: #ff6a14;
          font-weight: bold;
          position: absolute;
          top: -1.6rem;
          left: 0;
          font-size: 1rem;
          i {
            font-size: 0.4rem;
            color: #666;
          }
        }
        .title {
          font-size: 0.7rem;
          font-weight: bold;
        }
      }
    }
  }
`;
export default Wrapper;
