import styled from "styled-components";
import Router from "./Router";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const App = () => {
  return (
    <div>
      <Router></Router>
    </div>
  );
};

export default App;
