// External deps
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";

//Internal deps
import App from "./components/common/App";

// Local deps
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
