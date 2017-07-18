import React, { Component } from 'react';
import $ from 'jquery';
import ProductTableRow from '../components/ProductTableRow';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UpdateCart from '../actions/UpdateCart';

class ProductLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: [],
			whichWay: true
		}
	
		this.sortTable = this.sortTable.bind(this)
		this.getProducts = this.getProducts.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		this.getProducts(nextProps)
	}

	componentDidMount() {
		this.getProducts(this.props);
		
	}

	getProducts(props){
		const pl = props.match.params.productLine
		console.log(pl)
		const url = window.hostAddress + `/productlines/${pl}/get`
		$.getJSON(url, (data)=>{
			console.log(data);
			this.setState({
				productList: data
			})
		});
	}

	sortTable(columnName){
		console.log(columnName)
		var productList = this.state.productList.slice();
		

		productList.sort((a, b)=> {
		    var textA = a[columnName];
		    var textB = b[columnName];
		    if (this.state.whichWay){
		    	return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		    }else{
		    	return (textA < textB) ? 1 : (textA > textB) ? -1 : 0;
		    }
		    
		});

		this.setState({
			productList: productList,
			whichWay: !this.state.whichWay
		})

	}

	render(){
		console.log(this.props.loginInfo)
		if(this.props.loginInfo.token != undefined){
			// these are the droids we're looking for
			var loggedIn = true;
			var token = this.props.loginInfo.token
		}else{
			var loggedIn = false;
			var token = null
		}

		
		var productTableArray = [];
		this.state.productList.map((product, index)=>{
			productTableArray.push(
				<ProductTableRow key={index} product={product} addToCart={this.props.updateCart} loggedIn={loggedIn} token={token} />
			)

		});

		if(this.state.productList.length == 0){
			var textHeader = "";
		}else{
			var textHeader = this.state.productList[0].productLine;
		}

		return(
			<div>
				<h1 className="product-type"> {textHeader}</h1>
				<table className="table table-striped">
					<thead>
						<tr>
							<th className="table-head" onClick={()=>{this.sortTable("productName")}}>Product Name</th>
							<th className="table-head" onClick={()=>{this.sortTable("productScale")}}>Model Scale</th>
							<th className="table-head" onClick={()=>{this.sortTable("productVendor")}}>Made By</th>
							<th className="table-head" onClick={()=>{this.sortTable("productDescription")}}>Description</th>
							<th className="table-head" onClick={()=>{this.sortTable("quantityInStock")}}>In Stock</th>
							<th className="table-head" onClick={()=>{this.sortTable("buyPrice")}}>Your Price!</th>
							<th className="table-head" onClick={()=>{this.sortTable("MSRP")}}>MSRP</th>
						</tr>
					</thead>
					<tbody>
						{productTableArray}
					</tbody>
				</table>
			</div>
		)
	}

}

function mapStateToProps(state){
	return {
		loginInfo: state.registerReducer
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		updateCart: UpdateCart
	}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductLine);