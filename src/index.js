import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
//import './i18n';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
