import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* 
import SubmitMotivation from './components/SubmitMotivation/SubmitMotivation';
*/
 
import Signup from './components/Authentication/Signup/Signup';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Signup />, document.getElementById('root'));
registerServiceWorker();
