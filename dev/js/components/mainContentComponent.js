import React from 'react';
import '../scss/mainContentStyling.scss';

import * as firebase from 'firebase';

const database  = firebase.database();
const mainContentRef = database.ref('mainContent');

export default class MainContentComponent extends React.Component{

	submitContent(){
		
	}

	render(){

		return(
			<div>
				<p>
					<span ref="task" contentEditable="true">
						Fill in a small next task
					</span>
				</p>
				<p>
					<b>
						in order to
					</b> 
					<span ref="outcome" contentEditable="true">
						fill in a falsifiable outcome
					</span>
				</p>
				<p>
					<b>
						because I want to
					</b> 
					<span ref="desire" contentEditable="true">
						fill in the desire behind the outcome
					</span>
				</p>
				<button onClick={this.submitContent.bind(this)}>
					Submit
				</button>
			</div>
			);
	}
}

