import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConnectedIntlProvider from './modules/components/ConnectedIntlProvider';
import {IntlProvider, useIntl } from 'react-intl';
import VietNam from '../src/modules/init/vi.json'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const locale = navigator.language;

let lang;
if (locale==="vi-VN") {
   lang = VietNam;
   console.log(lang);
}



root.render(

    <IntlProvider locale={locale} messages={VietNam}>
     <App />
     
    </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
