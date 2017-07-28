import React, { Component } from 'react';

import './Signup.css';


class Signup extends Component {
  
  constructor(props){

    super(props);
    this.state = {email: '', password: ''};
  }
    
  handleEmailChange(event){
  	console.log('Email changed: ', event.target.value);
  	this.setState({email: event.target.value});

  }

  handlePasswordChange(event){

  	console.log('Password changed: ', event.target.value);
  	this.setState({password: event.target.value});
  }    
  
  render() {
   
    return (
    	<div>
    		<h2>
    			Sign-up
    		</h2>
			<form>
			  <label>
			    Email:
			    <input type="text" name="email" onChange={this.handleEmailChange.bind(this)}/>
			  </label>
			  <label>
			    Password:
			    <input type="password" name="password" onChange={this.handlePasswordChange.bind(this)}/>
			  </label>

			  <input type="submit" value="Signup" />
			</form>
		</div>
		);
  }

  
}

export default Signup;
