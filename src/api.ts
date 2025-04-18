export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) => response.json());
}

// api fetch 함수는 component와 분리해서 사용하는 습관을 들이자  #5.9
