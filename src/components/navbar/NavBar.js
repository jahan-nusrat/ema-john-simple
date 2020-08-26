import React from 'react';
import '../header/StyleHeader.css';

function NavBar () {
	return (
		<div className="nav-bar">
			<nav className="container">
				<a href="/home"> Home </a> <a href="/review"> Order Review </a>{' '}
				<a href="/inventory"> Manage Inventory </a>{' '}
			</nav>{' '}
		</div>
	);
}

export default NavBar;
