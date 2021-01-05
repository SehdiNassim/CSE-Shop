import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import CseShopStore from './Store/index';
import App from './App';
import setCart from './Store/cart/action creators/setCart';

const store = CseShopStore
store.dispatch(setCart([
  {
    id:'sdvkjfbvv',
    title:"CSE shirt sweat all sizes lorem ipsum ...",
    category:"Cse Shirt / Sweat",
    src:"/img/sweat.png",
    price:1800,
    count:1,
  },
  {
    id:'sdvkjfbvsdljbdvjb',
    title:"CSE Full Set - Tshirt , Bag, cap - 2020",
    category:"CSE Look",
    src:"/img/image 2.png",
    price:5800,
    count:1,
  },
  {
    id:'sdvkjfbvsdljbdvjbsfvjbfvkj:b',
    title:"CSE shirt",
    category:"Cse Shirt / Sweat",
    src:"/img/sweat.png",
    price:1800,
    count:1,
  },
  {
    id:'sdvkjfbvsdljbdvjbsfvjbfvkj:b11',
    title:"CSE Full Set",
    category:"CSE Look",
    src:"/img/image 2.png",
    price:5800,
    count:1,
  },
]))
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
