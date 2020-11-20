import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import LandingPage from './Pages/landingPage';
import { Provider } from 'react-redux';
import CseShopStore from './Store/store';

const store = CseShopStore()
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <LandingPage />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
