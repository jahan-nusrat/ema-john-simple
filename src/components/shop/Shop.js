import React, { Component } from 'react';
import ShopItems from './ShopItems';
import Cart from '../cart/Cart';
import './Shop.css';

class Shop extends Component {
	render () {
		const { items, selectItems, product, cart } = this.props;
		const sliceData = items.slice(0, 40);
		const propsItem = sliceData.map((item) => {
			return <ShopItems key={item.key} item={item} selectItems={selectItems} />;
		});
		return (
			<div className="shop-container">
				<div className="product-container">{propsItem}</div>
				<div className="cart-container">
					<Cart product={product} cart={cart} />
				</div>
			</div>
		);
	}
}

export default Shop;
