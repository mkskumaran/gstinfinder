import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
//import './i18n';

ReactDOM.render(
<BrowserRouter>
<Main />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
