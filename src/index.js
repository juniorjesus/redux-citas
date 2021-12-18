import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'materialize-css';
import './styles/style.css'
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);