import 'bootstrap/dist/css/bootstrap.css';
import React, { StrictMode } from 'react';
import registerServiceWorker from './registerServiceWorker';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import "./index.scss";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { BrowserRouter } from 'react-router-dom';
document.documentElement.classList.add(`theme-dark`);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<StrictMode>
  <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </Provider>
</StrictMode>);

registerServiceWorker();
