import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0%{
  transform: rotate(0);
}
50%{
  transform: rotate(360deg);
  border-radius: 50%;
}
100%{
  transform: rotate(0);
}
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotate} 3s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }
`;

const App = () => (
  <Wrapper>
    <Box>
      <Emoji as="p">💛</Emoji>
    </Box>
  </Wrapper>
);

export default App;
