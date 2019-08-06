import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Footer from './Footer';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

