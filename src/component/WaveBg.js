import styled from "styled-components";
import WaveImg from "../assets/img/bg.wave.png";

const WaveBg = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fd762f;
  height: ${({ height }) => (height ? height : "10rem")};
  width: 100%;
  z-index: 0;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: ${({ height = "10rem" }) => {
      let tmp = parseFloat(height) - 0.1;
      return `${tmp}rem`;
    }};
    right: 0;
    background-repeat: no-repeat;
    height: 12px;
    background-size: 100% 100%;
    background-image: url(${WaveImg});
  }
`;

export default WaveBg;
