import React, { Component } from 'react';

import './Signup.css';

import { auth } from '../../../firebase-config.js';

class Signup extends Component {
  
  constructor(props){

    super(props);
    this.state = {email: '', password: ''};

    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    

  handleInputChange(event){

  	const target = event.target;
    const value = target.value;
    const name = target.name;

  	this.setState({[name]: value});
  }    
    
  /**
  * Handles the sign up button press.
  */
  handleSubmit(event){

  	let email = this.state.email,
  	password = this.state.password;

  	console.log('The details submitted are: \n Username: ', email,
  		'\n Password: ', password);

  	if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
  	}

    // Sign in with email and pass.
    // [START createwithemail]
  	auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	  if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.');
      } else {
          alert(errorMessage);
      }
      console.log(error);
	
	});

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
			    <input type="text" name="email" onChange={this.handleInputChange}/>
			  </label>
			  <label>
			    Password:
			    <input type="password" name="password" onChange={this.handleInputChange}/>
			  </label>

			  <input type="submit" value="Signup"/>
			</form>
		</div>
		);
  }

  
}

export default Signup;
