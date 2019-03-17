import styled from "styled-components";

const WaveBg = styled.div`
  position: absolute;
  bottom: 0;
  background: #fd762f;
  height: 10rem;
  width: 100%;
  z-index: -1;
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 9.9rem;
    right: 0;
    background-repeat: repeat;
    z-index: -1;
  }
  &:before {
    height: 0.64rem;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      #fd762f 13px
    );
  }
  &:after {
    height: 17px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      #fd762f 12px,
      transparent 13px
    );
  }
`;

export default WaveBg;
