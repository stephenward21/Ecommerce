import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterAction from '../actions/RegisterAction';
import LoginAction from '../actions/LoginAction';

class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			registerMessage: "",
			nameError: null,
			emailError: null,
			formError: false
		}
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin(event){
		event.preventDefault();
		console.log('User Submitted the Form');
		var userName = event.target[0].value
		var password = event.target[1].value;
		var error = false;
	

	if(password.length == 0){
			var passwordError = "error"; 
			error=true;
		}
		else{ 
			var passwordError = "null"
		}

		//Email
		if(userName.length < 3){var userNameError = "error"; error=true}
		else{var userNameError = "success"}


		// console.log(name);
		if(error){
			this.setState({
				formError: true,
				userNameError: userNameError,
				passwordError: passwordError
			}) 
		// console.log(salesRep)
		}else{
			this.props.loginAction({
				username: userName,
				password: password,
			
			});
		}

	}

	componentWillReceiveProps(nextProps) {
		console.log("=======================")
		console.log(nextProps.registerResponse)
		console.log("=======================")

		if(nextProps.registerResponse.msg == 'userInserted'){
			this.props.history.push('/');
		}else if(nextProps.registerResponse.msg == 'userAlreadyExists'){
			console.log("User name taken!")
			this.setState({
				registerMessage: "Sorry, this username is already taken."
			})
		}		
	}

	render(){
		return (
			<div className="login">
					<form onSubmit={this.handleLogin}>
					  <div className="form-group">
					    <label for="exampleInputEmail1">Username</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
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

function mapStateToProps(state){
	return{
		registerResponse: state.registerReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}

// export default Register;
export default connect(mapStateToProps,mapDispatchToProps)(Login);