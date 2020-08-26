import React, { Component } from 'react';
import Header from './header/Header';
import Shop from './shop/Shop';
import fakeData from '../fakeData';

class App extends Component {
	state = {
		items        : [],
		selectedItem : 0,
		cart         : []
	};
	/* const [ cart, setCart ] = useState([]);
	const newCart = [ ...cart, item ];
	setCart(newCart); */

	componentDidMount () {
		this.setState({
			items : fakeData
		});
	}

	selectItems = (item) => {
		this.setState({
			selectedItem : item,
			cart         : [ ...this.state.cart, item ]
		});
	};

	render () {
		return (
			<div>
				<Header />
				<Shop
					items={this.state.items}
					selectItems={this.selectItems}
					product={this.state.selectedItem}
					cart={this.state.cart}
				/>
			</div>
		);
	}
}

export default App;
