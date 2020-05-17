import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'react-redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
