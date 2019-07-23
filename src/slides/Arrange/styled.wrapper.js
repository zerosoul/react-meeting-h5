import styled from "styled-components";

import TelIcon from "../../assets/img/icon.tel.png";
import AddrIcon from "../../assets/img/icon.addr.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 6rem 2rem;
  height: 100vh;
  .arranges {
    color: #666;
    font-size: 0.8rem;
    font-weight: 800;
    max-height: 14rem;
    overflow-y: scroll;
    padding: 0.4rem 0;
    .arrange {
      display: flex;
      align-items: end;
      &:last-child {
        .title {
          min-height: 8rem;
        }
      }
      .placeholder {
        border-right: 1px solid #fb763a;
        position: relative;
        font-size: 0.8rem;
        line-height: 1.2;
        min-width: 0.8rem;
        min-height: 5rem;
        &:after {
          content: "";
          position: absolute;
          top: 5px;
          right: -0.25rem;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 100%;
          box-shadow: 0px 0px 0px 4px white, 0 0 0 0.3rem #ff6a1c;
          background: #ff6a1c;
        }
      }
      .detail {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 1rem;
        time {
          margin-bottom: 0.4rem;
        }
        .title {
          line-height: 1.2;
          color: #ff6a1c;
        }
      }
    }
  }
  .info {
    color: #fff;
    text-align: left;
    z-index: 1;
    position: absolute;
    font-size: 0.8rem;
    bottom: 2rem;
    font-weight: border;
    .tel {
      background: url(${TelIcon});
      a {
        text-decoration: none;
        color: #fff;
      }
    }
    .addr {
      background: url(${AddrIcon});
    }
    .tel,
    .addr {
      padding-left: 1.8rem;
      margin-bottom: 0.8rem;
      line-height: 1.6;
      background-repeat: no-repeat;
      background-size: 1.2rem;
    }
  }
`;
export default Wrapper;
