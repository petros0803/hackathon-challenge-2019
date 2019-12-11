import React from 'react';
import '../Header/Header';
import '../Header/header.css';


import logo from '../Images/logoAsociatie.png';

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOptionOpen: false,
			profile: '',
			fullName: ''
		}
	}

	render() {
		return (
				<div id="nav" ref="nav">
					<ul>
						<li>
							<a href = '/home' className = "h"> Home </a>
						</li>
						<li>
							<a href = '/cazuriSociale' className = "h"> Cazuri sociale</a>
						</li>
						<li>
							<a href = "/home"> <img src = {logo} className = 'logo'></img> </a>
						</li>
						<li>
							<a href = "/incidente" className = "h"> Incidente </a>
						</li>
						<li>
							<a href = '/aboutUs' className = "h"> Despre noi </a>
						</li>
					</ul>
				</div>
		)
		/* LOGIN = TRUE
						<div id="nav" ref="nav">
					<ul>
						<li>
							<a href = '/home'> Home </a>
						</li>
						<li>
							<a href = '/CazuriSociale'> Cazuri sociale</a>
						</li>
						<li>
							<a href = "/Incidente"> Incidente </a>
						</li>
						<li>
							<a href = '/AboutUs'> Despre noi </a>
						</li>
						<div id="group">
							<img src={this.state.profile}id="ppic"  />

							{this.state.isOptionOpen && <div id="opts">
								</div>}
						</div>

					</ul>
				</div>
		*/
	}
}

export default Header
