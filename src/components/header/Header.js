import React from 'react';
import logo from '../../images/logo.png';
import './StyleHeader.css';
import NavBar from '../navbar/NavBar';

function Header () {
	return (
		<div className="header">
			<img src={logo} alt="logo" />
			<NavBar />
		</div>
	);
}

export default Header;
