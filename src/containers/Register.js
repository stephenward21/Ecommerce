import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import RegisterAction from '../actions/RegisterAction';
import { connect } from 'react-redux';

class Register extends Component{

	constructor(props) {
		super(props);
		this.handleRegistration = this.handleRegistration.bind(this);
	}

	handleRegistration(event){
		event.preventDefault();
		console.log('User Submitted the Form');
		var name = event.target[0].value
		var email = event.target[1].value;
		var password = event.target[2].value;
		console.log(password)
		var passwordCheck = event.target[3].value;
		var city = event.target[4].value;
		var state = event.target[5].value;
		var salesRep = event.target[6].value;
		// console.log(salesRep)
		this.props.registerAction({
			name: name,
			email: email,
			password: password,
			passwordCheck: passwordCheck,
			city: city,
			state: state,
			salesRep: salesRep
		});

	}

	render(){
		return(
			<div className="registercontainer">
				<h1 className="register"></h1>
				<form onSubmit={this.handleRegistration}>
				  <div className="container">
				  	<label><b>Name</b></label>
				    <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter full name"/>

				    <label><b>Email</b></label>
				    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

				    <label><b>Password</b></label>
				    <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" placeholder="Enter password"/>

				    <label><b>Repeat Password</b></label>
				    <input type="password" className="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" placeholder="Re-Enter password"/>

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

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(Register);