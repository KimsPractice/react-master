import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Coins = () => <Title>코인</Title>;

export default Coins;