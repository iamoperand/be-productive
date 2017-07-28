import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SubmitMotivation from './components/SubmitMotivation/SubmitMotivation';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<SubmitMotivation />, document.getElementById('root'));
registerServiceWorker();
