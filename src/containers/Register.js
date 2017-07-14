import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import RegisterAction from '../actions/RegisterAction';
import { connect } from 'react-redux';

class Register extends Component{

	constructor(props) {
		super(props);
		this.state = {
			registerMessage: "",
			nameError: null,
			emailError: null,
			formError: false
		}
		this.handleRegistration = this.handleRegistration.bind(this);
	}

	handleRegistration(event){
		event.preventDefault();
		console.log('User Submitted the Form');
		var name = event.target[0].value
		var email = event.target[1].value;
		var userName = event.target[2].value;
		var password = event.target[3].value;
		var city = event.target[4].value;
		var state = event.target[5].value;
		var salesRep = event.target[6].value;
		var error = false;

		if(name.length < 3){
			var nameError = "error"; 
			error=true;
		}
		else{ 
			var nameError = "success"
		}

		//Email
		if(email.length < 3){var emailError = "error"; error=true}
		else{var emailError = "success"}


		// console.log(name);
		if(error){
			this.setState({
				formError: true,
				emailError: emailError,
				nameError: nameError
			}) 
		// console.log(salesRep)
		}else{
			this.props.registerAction({
				name: name,
				email: email,
				username: userName,
				password: password,
				city: city,
				state: state,
				salesRep: salesRep
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
		console.log(this.state.registerMessage);

		return(

			<div className="registercontainer">
				<h1>{this.state.registerMessage}</h1>
				<h1 className="register"></h1>
				<form onSubmit={this.handleRegistration}>
				  <div className="container">
				  	<label><b>Name</b></label>
				    <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter full name"/>

				    <label><b>Email</b></label>
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

				    <label><b>Username</b></label>
				    <input type="text" className="form-control" id="exampleInputUserName" aria-describedby="usernameHelp" placeholder="Enter username"/>

				    <label><b>Password</b></label>
				    <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" placeholder="Enter password"/>


				    <label><b>City</b></label>
				    <input type="text" className="form-control" id="exampleCity" aria-describedby="cityHelp" placeholder="City"/>

				    <label><b>State</b></label>
				    <input type="text" className="form-control" id="exampleState" aria-describedby="stateHelp" placeholder="State"/>

				    <label><b>Sales Rep</b></label>
				    <input type="text" className="form-control" id="exampleRep" aria-describedby="repHelp" placeholder="Enter sales rep"/>

				    <input type="checkbox"  /> Remember me
				    <p className="terms">By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

				    <div className="clearfix">
				      <button type="submit" className="btn btn-primary">Register</button>
				    </div>
				  </div>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		registerResponse: state.registerReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);