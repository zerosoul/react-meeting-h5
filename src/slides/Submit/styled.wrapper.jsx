import styled from "styled-components";
import ClockIcon from "../../assets/img/icon.clock.png";
import AddrIcon from "../../assets/img/icon.addr.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 4rem 3rem;
  height: 100vh;

  .info {
    color: #666;
    line-height: 1.5;
    font-size: 0.7rem;
    time {
      background: url(${ClockIcon});
    }
    .addr {
      background: url(${AddrIcon});
    }
    time,
    .addr {
      padding-left: 1.2rem;
      margin-bottom: 0.8rem;
      line-height: 1.6;
      background-repeat: no-repeat;
      background-size: 0.8rem;
    }
  }
  .form {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    /* width: 14rem; */
    .input {
      > input {
        font-size: 0.8rem;
        color: #fff;
        background: #fd762f;
        box-shadow: inset 0px 5px 13px 0px rgba(151, 0, 92, 0.35);
        margin-bottom: 0.6rem;
        border: none;
        border-radius: 0.2rem;
        padding: 0.3rem 0.6rem;
        box-sizing: border-box;
        line-height: 1.4;
        width: 15rem;

        &:disabled {
          opacity: 1;
          background: transparent;
          box-shadow: none;
          padding: 0.3rem 0.2rem;
          &::placeholder {
            color: #fd762f;
          }
        }
        &::placeholder {
          font-size: 0.8rem;
          font-weight: bold;
          color: #fff;
          opacity: 0.6;
        }
      }
      &.mobile {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
        > input {
          width: 8rem;
        }
        .codeBtn {
          font-weight: bold;
          color: #fff;
          background: #666;
          border: none;
          font-size: 0.8rem;
          border-radius: 0.4rem;
          padding: 0.3rem 0.4rem;
        }
      }
      &.num {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
        > input {
          width: 4.4rem;
        }
        .count {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          width: 4.4rem;
          margin: 0 0.2rem;
          .m,
          .p {
            width: 0.8rem;
            height: 0.8rem;
            font-weight: bolder;
            background: #fdb037;
            border-radius: 50%;
            box-sizing: border-box;
            text-align: center;
            font-size: 0.6rem;
            line-height: 1.2;
          }
          .p {
            background: #fd762f;
          }
          input {
            width: 2rem;
            text-align: center;
            border: 1px solid #ff761e;
            padding: 0.3rem 0.4rem;
            border-radius: 0.2rem;
            color: #ff761e;
          }
        }
        .tip {
          font-size: 0.5rem;
          color: #666;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          span {
            line-height: 1.6;
          }
        }
      }
      &.cost {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        color: #666;
        margin-bottom: 1rem;
        input {
          width: 4.4rem;
        }
        .price {
          font-weight: bold;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 10rem;
          margin-bottom: 0.8rem;
          .true {
            color: #ff761e;
          }
          .false {
            position: relative;
            &.hidden {
              visibility: hidden;
            }
            &:after {
              content: "";
              top: 50%;
              left: -5px;
              display: block;
              position: absolute;
              width: 120%;
              height: 1px;
              background: #ff761e;
            }
          }
        }
      }
    }
    .submitBtn {
      color: #fff;
      background: #fdb037;
      border: none;
      padding: 0.4rem 0;
      font-size: 1rem;
      width: 15rem;
      border-radius: 0.4rem;
      z-index: 1;
    }
  }
`;
export default Wrapper;
