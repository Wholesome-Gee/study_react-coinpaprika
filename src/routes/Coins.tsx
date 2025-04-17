import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 480px;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background-color: white;
  color: black;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]); // <ICoin[]> 배열 state에 type하는 방법  #5.3
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCoins() {
      const response = await (await fetch("https://api.coinpaprika.com/v1/coins")).json();
      setCoins(response.slice(0, 100));
      setLoading(false);
    }
    fetchCoins();
  }, []);
  // useEffect를 사용하여 api data 요청  #5.3

  return (
    <Container>
      <Header>
        <Title>코인리스트</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`}> {coin.name} &rarr; </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
/*
JSX에서 조건문 사용할 땐 삼항연산자  #5.3
JSX에서 반복문 사용할 땐 map  #5.2
map의 item에는 key가 있어야한다.  #5.2
<Link>는 새로고침 기능이 없는 a태그의 역할  #5.2
*/

export default Coins;
