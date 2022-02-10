import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Child = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Child)`
  border-radius: 50%;
`;

function App() {
  return (
    <Father>
      <Child bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
