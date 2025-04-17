import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();
  return <h1>Coin: {coinId}</h1>;
}
/*
useParams()는 route의 url parameter를 받아오는 React hook  #5.0
*/

export default Coin;
