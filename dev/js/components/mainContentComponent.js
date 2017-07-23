import React from 'react';

export default class MainContentComponent extends React.Component{

	render(){

		return(
			<p>
				<span id="task" contentEditable="true">
					Fill in a small next task
				</span>
			</p>
			<p>
				<b>
					in order to
				</b> 
				<span id="outcome" contentEditable="true">
					fill in a falsifiable outcome
				</span>
			</p>
			<p>
				<b>
					because I want to
				</b> 
				<span id="desire" contentEditable="true">
					fill in the desire behind the outcome
				</span>
			</p>

			);
	}
}

