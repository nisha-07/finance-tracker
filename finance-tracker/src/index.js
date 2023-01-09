import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './app/App';
import { AuthContextProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </React.StrictMode>
  </Provider>
);
