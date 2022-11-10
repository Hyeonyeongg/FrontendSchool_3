import React from 'react'; //reat를 포함
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client'; //react-dom포함 (익스포트)
import App from './App'; //App포함(디폴트)

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App/>);//괄호 안에 있는 것을 index.html의 div에 넣음. tab="home"은 나중에 App 컴포넌트에 tab을 받는 props가 있으면 써주면 됨.