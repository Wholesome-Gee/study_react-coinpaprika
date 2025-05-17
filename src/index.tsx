import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query"; // npm i react-query  
import { Helmet } from "react-helmet";
// ( react 18v 이하에서 사용, 18v 이상에서는 npm i @tanstack/react-query, query key의 값은 대괄호로 묶어주어야한다고 함. )  #5.9 mzd 댓글

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <title>Coin View App</title>
    </Helmet>
    <App />
  </QueryClientProvider>
);

/*
react-query를 사용하기위한 사전세팅
  - const queryClient = new QueryClient();
  - <QueryClientProvider client={queryClient}>
*/
