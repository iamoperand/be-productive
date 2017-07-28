import React, { Component } from 'react';

import './Signup.css';


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
