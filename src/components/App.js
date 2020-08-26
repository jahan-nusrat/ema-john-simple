import React, { Component } from 'react';
import Header from './header/Header';
import Shop from './shop/Shop';
import fakeData from '../fakeData';

class App extends Component {
	state = {
		items : []
	};
	componentDidMount () {
		this.setState({
			items : fakeData
		});
	}
	render () {
		return (
			<div>
				<Header />
				<Shop items={this.state.items} />
			</div>
		);
	}
}

export default App;
