import React, { Component } from 'react';

class Login extends Component{
	render(){
		return (
			<div className="login">
					<form>
					  <div className="form-group">
					    <label for="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
					  </div>
					  <button type="submit" className="btn btn-primary">Log In</button>
					</form>
			</div>


		)
	
	}
}

export default Login;