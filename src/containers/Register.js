import React, {Component} from 'react';

class Register extends Component{
	render(){
		return(
			<div className="registercontainer">
				<h1 className="register"></h1>
				<form action="/action_page.php">
				  <div className="container">
				    <label><b>Email</b></label>
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

				    <label><b>Password</b></label>
				    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="passwordHelp" placeholder="Enter password"/>

				    <label><b>Repeat Password</b></label>
				    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="passwordHelp" placeholder="Re-Enter password"/>
				    <input type="checkbox"  /> Remember me
				    <p className="terms">By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

				    <div className="clearfix">
				      <button type="submit" className="btn btn-primary">Sign Up</button>
				    </div>
				  </div>
				</form>
			</div>
		)
	}
}

export default Register;