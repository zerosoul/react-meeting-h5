import styled from "styled-components";

const WaveBg = styled.div`
  position: absolute;
  bottom: 0;
  background: #fd762f;
  height: ${({ height }) => (height ? height : "10rem")};
  width: 100%;
  z-index: 0;
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: ${({ height = "10rem" }) => height};
    right: 0;
    background-repeat: repeat;
  }
  &:before {
    height: 12px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      #fd762f 13px
    );
  }
  &:after {
    height: 16px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 10px 15px,
      #fd762f 12px,
      transparent 13px
    );
  }
`;

export default WaveBg;
