import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Child1 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const Child2 = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <Child1>
        <Text>Hello</Text>
      </Child1>
      <Child2 />
    </Father>
  );
}

export default App;
