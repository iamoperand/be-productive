import React, { Component } from 'react';

import './Signup.css';


class Signup extends Component {
  
  constructor(props){

    super(props);
    this.state = {email: '', password: ''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleEmailChange(event){
  	console.log('Email changed: ', event.target.value);
  	this.setState({email: event.target.value});

  }

  handlePasswordChange(event){

  	console.log('Password changed: ', event.target.value);
  	this.setState({password: event.target.value});
  }    

  handleSubmit(event){
  	console.log('The details submitted are: \n Username: ', this.state.email ,
  		'\n Password: ', this.state.password);

  	event.preventDefault();
  }
  
  render() {
   
    return (
    	<div>
    		<h2>
    			Sign-up
    		</h2>
			<form onSubmit={this.handleSubmit}>
			  <label>
			    Email:
			    <input type="text" name="email" onChange={this.handleEmailChange}/>
			  </label>
			  <label>
			    Password:
			    <input type="password" name="password" onChange={this.handlePasswordChange}/>
			  </label>

			  <input type="submit" value="Signup"/>
			</form>
		</div>
		);
  }

  
}

export default Signup;
