import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
console.log('store.getState()');
console.log(store.getState());
console.log('store.getState().goodReducer');
console.log(store.getState().goodsReducer);
console.log(store.getState().goodsReducer.stock);
console.log('store.getState().stockReducer');
console.log(store.getState().stockReducer);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    // 하위컴포넌트에서 store를 쓸 수 있게 해줌.
    <Provider store={store}>
        <App />
    </Provider>
);