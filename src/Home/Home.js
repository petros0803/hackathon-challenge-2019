import React from 'react';
import './home.css';
import RecentCases from './RecentCases/RecentCases'

class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
		<div className = "bodyComponent">
			<RecentCases />
		</div>
		);	
	}
}
export default Home