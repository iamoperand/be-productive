import React from 'react';
import '../../scss/mainContentStyling.scss';

import * as firebase from 'firebase';

import '../firebaseConfig';

const database  = firebase.database();
const mainContentRef = database.ref('mainContent');

export default class MainContentComponent extends React.Component{

	submitContent(){
		console.log(this.refs.task.innerText);
		let task = this.refs.task.innerText,
			outcome = this.refs.outcome.innerText,
			desire = this.refs.desire.innerText,
			username = 'Nikhil';

		console.log("Data is going to be sent to firebase");	
		mainContentRef.set({
			username: username,
			task: task,
			outcome: outcome,
			desire: desire
		});	


		console.log("Data is sent to firebase");
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

