import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  padding: 0 10px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface RouteParams {
  coinId?: string;
}

interface RouteState {
  state: { name: string };
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams() as RouteParams;
  const { state } = useLocation() as RouteState;
  console.log(state.name);

  return (
    <Container>
      <Header>
        <Title>코인 {state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>loading...</Loader> : <></>}
    </Container>
  );
};

export default Coin;
