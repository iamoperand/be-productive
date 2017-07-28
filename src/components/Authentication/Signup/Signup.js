import React, { Component } from 'react';

import './Signup.css';


class Signup extends Component {
  
  constructor(props){

    super(props);
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
			    <input type="text" name="email" />
			  </label>
			  <label>
			    Password:
			    <input type="password" name="password" />
			  </label>

			  <input type="submit" value="Signup" />
			</form>
		</div>
		);
  }

  
}

export default Signup;
