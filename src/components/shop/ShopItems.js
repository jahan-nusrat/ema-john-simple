import React from 'react';
import './ShopItems.css';

function ShopItems ({ item }) {
	console.log(item);
	return (
		<div className="product">
			<div>
				<img src={item.img} alt={item.category} />
			</div>
			<div className="product-content">
				<p>
					<a href={item.url}>{item.name}</a>
				</p>
				<p>by: {item.seller}</p>
				<p>${item.price}</p>
				<p>only {item.stock} left in stock - order soon</p>
				<button className="btn">add to cart</button>
			</div>
		</div>
	);
}

export default ShopItems;
