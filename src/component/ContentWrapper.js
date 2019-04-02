import styled from "styled-components";

const Wrapper = styled.div`
  opacity: ${props => (props.show ? 1 : 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  color: #fff;
  height: 100%;
`;
export default Wrapper;
