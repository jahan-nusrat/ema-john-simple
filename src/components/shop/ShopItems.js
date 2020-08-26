import React from 'react';
import './ShopItems.css';
import Button from './Button';

function ShopItems ({ item, selectItems }) {
	//console.log(item);
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
				<Button selectItems={selectItems} item={item} />
			</div>
		</div>
	);
}

export default ShopItems;
