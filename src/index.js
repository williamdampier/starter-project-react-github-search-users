import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
//domain: dev-i-dydsrh.us.auth0.com
//client-id: Q0XFggQlvxfc7KLxQT8Ij6I5Uer2y0yT

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-i-dydsrh.us.auth0.com'
      clientId='Q0XFggQlvxfc7KLxQT8Ij6I5Uer2y0yT'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
