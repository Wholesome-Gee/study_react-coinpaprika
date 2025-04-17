import { useParams } from "react-router-dom";

interface IParams {
  coinId: string;
}
function Coin() {
  const { coinId } = useParams<IParams>();
  return <h1>Coin: {coinId}</h1>;
}
/*
useParams()는 route의 url parameter를 받아오는 React hook
*/

export default Coin;
