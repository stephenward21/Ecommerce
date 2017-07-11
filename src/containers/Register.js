import React, {Component} from 'react';

class Register extends Component{
	render(){
		return(
			<div>
				<h1 className="register">Register</h1>
				<form action="/action_page.php">
				  <div className="container">
				    <label><b>Email</b></label>
				    <input type="text" placeholder="Enter Email" name="email" required />

				    <label><b>Password</b></label>
				    <input type="password" placeholder="Enter Password" name="psw" required />

				    <label><b>Repeat Password</b></label>
				    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
				    <input type="checkbox"  /> Remember me
				    <p className="terms">By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

				    <div className="clearfix">
				      <button type="button"  className="btn btn-danger">Cancel</button>
				      <button type="submit" className="btn btn-primary">Sign Up</button>
				    </div>
				  </div>
				</form>
			</div>
		)
	}
}

export default Register;