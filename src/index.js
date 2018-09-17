import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
