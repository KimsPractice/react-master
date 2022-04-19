import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.fontColor};
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const App = () => (
  <Wrapper>
    <Title>Hello</Title>
  </Wrapper>
);

export default App;
