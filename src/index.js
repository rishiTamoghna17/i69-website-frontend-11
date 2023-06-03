import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from './App';
import * as serviceWorker from './serviceWorker';
//import './App.css';
import './assets/scss/style.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from '../next-i18next.config';
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
const history = createBrowserHistory();
export async function getServerSideProps({locale}){
  if(locale){
    return{
      props:{
        ...(await serverSideTranslations(
          locale,
          ['translation'],
          nextI18nextConfig
        ))
      }
    }
  }
}
ReactDOM.render(
  <Router history={history}>
      <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
