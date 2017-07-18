import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import GetCart from '../actions/GetCart'
import $ from 'jquery';

class Cart extends Component{

	componentDidMount() {
		if(this.props.loginInfo.token !== undefined){
			this.props.getCart(this.props.loginInfo.token)
		}else{

		}
	}
	makePayment() {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_MSOQhftUcFj8PJMLX814mn7h',
            locale: 'auto',
            token: (token) => {
                var theData = {
                    amount: 10 * 100,
                    stripeToken: token.id,
                    userToken: this.props.tokenData,
                }
                $.ajax({
                    method: 'POST',
                    url: window.hostAddress + '/stripe',
                    data: theData
                }).done((data) => {
                    console.log(data);
                    if (data.msg === 'paymentSuccess') {

                    }
                });
            }
        });
        handler.open({
            name: "Pay Now",
            description: 'Pay Now',
            amount: 10 * 100
        })
    }
	

	render(){
		console.log(this.props.cartInfo)
		return(
			<div>
				<div>
					<button className="btn btn-primary" onClick={this.makePayment}>
						Pay Now
					</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		loginInfo: state.registerReducer,
		cartInfo: state.cartReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getCart: GetCart
	}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)