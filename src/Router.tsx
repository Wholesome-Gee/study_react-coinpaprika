// react-router-dom으로 route설정하기  #5.0
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}
/*
10. path="/:coinId" 는 url에서 coinId라는 parameter를 받을 수 있고, Component에서 useParams로 parameter를 받을 수 있다.
*/
export default Router;
