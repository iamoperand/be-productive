import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

import MainContentComponent from './components/mainContentComponent';

class App extends React.Component{

	render(){
		return (<MainContentComponent />);
	}
}


ReactDOM.render(<App />, document.getElementById('root'));