import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import { useOutletContext } from "react-router-dom";

interface IContext {
  coinId: string;
}
function Chart() {
  const { coinId } = useOutletContext<IContext>();
  const { isLoading, data } = useQuery("ochlv", () => fetchCoinHistory(coinId));
  /*
  useOutletContext()는 상위 component로부터 nested route component에게 전달된 props(context)를 확인하는 방법  #5.12 'salt01' 댓글 참고
  */
  return <h1>Chart</h1>;
}

export default Chart;
