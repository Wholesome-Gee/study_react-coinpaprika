import { useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();
  // const { coinId } = useParams();
  /*
  useLocation()은 react-router-dom의 Link로부터 넘어온 URL의 정보를 제공한다. (pathname, state, search, hash, key 등)
  useParams()는 react-router-dom의 route로부터 넘어온 URL Parameter를 제공한다. (ex. path=/:coinId ) 
  */

  console.log("Coin.tsx 37", useLocation());
  console.log("Coin.tsx 38", useParams());

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
/*
useParams()는 route의 url parameter를 받아오는 React hook  #5.0
*/

export default Coin;
