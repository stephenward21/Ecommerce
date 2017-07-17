
import React, {Component} from 'react';
import $ from 'jquery';
import {Link, Route} from 'react-router-dom';

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			productlines: []
		}
		
	}

	componentDidMount() {
		$.getJSON(window.hostAddress+'/productlines/get',(productlinesData)=>{
			console.log(productlinesData);
			this.setState({
				productlines: productlinesData
			});
		});
	}

	render(){
		const plImages = [];
		this.state.productlines.map((row, index)=>{
			plImages.push(
				<div key={index} className="col-sm-4 col-md-3 pl-images">
					<Link to={`/shop/${row.link}`}><img src={row.image}/></Link>
					<div className="text">{row.productLine}</div>

				</div>

			)
		})
		return(
			<div>
				{plImages}
			</div>

		)
		// return(
		// 	<div>
		// 		<h1>Models</h1>
		// 		<div className='container'>
		// 			<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 		</div>
		// 		<br />
		// 		<div className='featured-models'>
		// 			<h2>Featured Products</h2>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 		</div>
		// 		<div className='featured-models'>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 		</div>
		// 		<div className='featured-models'>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 			<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
		// 		</div>
			
		// 	</div>
		// )
	}
}

export default Home;