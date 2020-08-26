import React, { Component } from 'react';
import ShopItems from './ShopItems';
import Cart from '../cart/Cart';
import './Shop.css';

class Shop extends Component {
	render () {
		const { items } = this.props;
		const sliceData = items.slice(0, 40);
		const propsItem = sliceData.map((item) => {
			return <ShopItems key={item.key} item={item} />;
		});
		return (
			<div className="shop-container">
				<div className="product-container">{propsItem}</div>
				<div className="cart-container">
					<Cart />
				</div>
			</div>
		);
	}
}

export default Shop;
