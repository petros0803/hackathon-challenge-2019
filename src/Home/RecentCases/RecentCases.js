import React from 'react';
import api from '../../api-connection.js';
import picture1 from '../../Images/1.jpg';
import './recentCases.css';

class RecentCases extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			oneCase: [],
			laoding: true,
		}
	}
/*
	componentDidMount = () => {
		fetch(api.recentCases, {
			method: 'GET'
		})
		.then(resp => resp.json())
		.then(data => {
			this.setState({
				oneCase: data.map((item) => {
					return {"id": item.id, title: item.title, description: item.description, date: item.date}
				})
			})
		})
		{console.log(this.state.oneCase.title)}
	}
*/

	async componentDidMount(){
		const response = await fetch(api.recentCases);
		const data = await response.json();
		this.setState({ oneCase: data[0], loading: false })
	}

	render(){
		return(
			<div>
							<h1> Cele mai recente cazuri sociale. </h1>
				{!this.state.oneCase || this.state.loading ? (
					<h1>laoding...</h1>
				) : (
				<div>
					<div className = "componentRecentCases">
					<img src = {picture1} className = "pictureCase" />
					{/* <text className="caseTitle"> { this.state.oneCase.title } </text> 
					<text > { this.state.oneCase.description } </text> */}
					<ul className = "recentCaseTitle">
						<il className = "componentTitle"> { this.state.oneCase.title } </il>
						<br/>
						<il> { this.state.oneCase.description } </il>
					</ul>
					</div>
					<div className = "componentRecentCases">
					<img src = {picture1} className = "pictureCase" />
					{/* <text className="caseTitle"> { this.state.oneCase.title } </text> 
					<text > { this.state.oneCase.description } </text> */}
					<ul className = "recentCaseTitle">
						<il className = "componentTitle"> { this.state.oneCase.title } </il>
						<br/>
						<il> { this.state.oneCase.description } </il>
					</ul>
					</div>
					<h1> Cele mai recente incidente. </h1>

					<div className = "componentRecentCases">
					<img src = {picture1} className = "pictureCase" />
					{/* <text className="caseTitle"> { this.state.oneCase.title } </text> 
					<text > { this.state.oneCase.description } </text> */}
					<ul className = "recentCaseTitle">
						<il className = "componentTitle"> { this.state.oneCase.title } </il>
						<br/>
						<il> { this.state.oneCase.description } </il>
					</ul>
					</div>
					<div className = "componentRecentCases">
					<img src = {picture1} className = "pictureCase" />
					{/* <text className="caseTitle"> { this.state.oneCase.title } </text> 
					<text > { this.state.oneCase.description } </text> */}
					<ul className = "recentCaseTitle">
						<il className = "componentTitle"> { this.state.oneCase.title } </il>
						<br/>
						<il> { this.state.oneCase.description } </il>
					</ul>
					</div>
				</div>
				)
				}
				
			</div>

		);	
	}
}
export default RecentCases