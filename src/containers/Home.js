// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import NavBar from '../components/navbar';
// import SimpleSlider from '../components/SimpleSlider';


// class Home extends Component{
// 	render(){
// 		console.log(this.props.students);
// 		var studentArray = [];
// 		this.props.students.map((student,index)=>{
// 			studentArray.push(<li key={index}>{student}</li>)
// 		})
// 		return(
			
// 			<div>
// 				<NavBar />
// 				<h1> Classic Models </h1>
// 				<SimpleSlider />
				
// 			</div>
// 		)
// 	}

// }

// function mapStateToProps(state){
// 	return {

// 		students: state.students
// 	}
// }

// export default connect(mapStateToProps)(Home);
import React, {Component} from 'react';

class Home extends Component{
	render(){
		return(
			<div>
				<h1>Models</h1>
				<div className='container'>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='shop-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
				</div>
				<br />
				<div className='featured-models'>
					<h2>Featured Products</h2>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
				</div>
				<div className='featured-models'>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
				</div>
				<div className='featured-models'>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
					<a className='featured-images' href="http://placeholder.com"><img src="http://via.placeholder.com/200x200" /></a>
				</div>
			
			</div>
		)
	}
}

export default Home;