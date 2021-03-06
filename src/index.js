import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import Auth from './auth/Auth';

ReactDOM.render(
  <>
   <Provider store={store}>
   <Auth>
      <Router>
        <App/>
      </Router>
    </Auth>
   </Provider>
    </>,
  document.getElementById('root')
);


