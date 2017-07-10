import React, { Component } from 'react';

class Students extends Component {
	constructor(props) {
		super(props);
		this.state = {
			students: []
		}
	}
	componentDidMount() {
		var localStudents = [
			'Hayes',
			'Michael',
			'Carla',
			'YingRong'
		]
		this.setState({
			students: localStudents
		})
	}
	render(){
		var studentsArray = [];
		this.state.students.map((student, index)=>{
			studentsArray.push(<li key={index}>{student}</li>)
		})
		return(
			<div>
				<h1> Students </h1>
				{studentsArray}
			</div>


		)
	}

}

export default Students;