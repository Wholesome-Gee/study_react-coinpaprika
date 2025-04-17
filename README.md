# COINPAPRIKA를 활용한 COIN 조회 사이트

📍 강의 사이트 : NOMAD CORDER  
📍 강의 제목 : React JS 마스터클래스  
📍 강의 챕터 : #5 CRYPTO TRACKER  
📍 비고 : NOMAD CORDER 'React JS 마스터클래스 #3 TYPESCRIPT' 강의 내용을 기반으로 작성됨.  
📍 비고 : ReactRouterDom @5.3.0 버전 사용  
📍 라이브러리 :

- react v18 : `npm uninstall react react-dom`, `npm i react@18 react-dom@18`
- styled-components : `npm i styled-components`, `npm i --save-dev @types/styled-components`
- react-router-dom : `npm i react-router-dom`, `npm i --save-dev @types/react-router-dom`
- react-query : `npm i react-query`
  - react-query는 React v18 이하에서 구동이 가능하다.

---

### #5.0

**📗react-router-dom 으로 router 설정하기**

- `npm i react-router-dom`
- `npm i --save-dev @types/react-router-dom`
- src안에 routes폴더, Router.tsx 생성
  - Router.tsx → `import { BrowserRouter, Routes, Route } from "react-router-dom"`

**📗useParams()와 useParams()에 type하기**

---

### #5.1

**📗Styled-components의 createGlobalStyle을 사용하여 GlobalStyle 지정하기**

---

### #5.2

**📗JSX에서 반복문 사용할 땐 map()**  
**📗react-router-dom의 Link를 사용하여 route 이동**

---

### #5.3

**📗JSX에서 조건문 사용할 땐 삼항연산자**  
**📗useEffect()와 fetch()로 받아온 api data에 type하기**

---

### #5.4

**📗react-router-dom의 Link를 사용하여 state를 전달**

- `<Link to={'url'} state={{ key:value }}> link </Link>`

**📗useLocation()으로 Link로부터 넘어온 현재 URL에 대한 정보를 받기**

---
