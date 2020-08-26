import React from 'react';
import './Cart.css';

function Cart ({ cart }) {
	const totalPrice = cart.reduce((acc, curr) => {
		return acc + curr.price;
	}, 0);

	const shippingCost = cart.reduce((acc, curr) => {
		return acc + curr.shipping;
	}, 0);

	const tax = totalPrice / 10;

	return (
		<div className="cart-content">
			<h3>Order Summery</h3>
			<p>Items Ordered: {cart.length} </p>
			<p>Product price: ${totalPrice.toFixed(2)}</p>
			<p>
				<small>Shipping cost:${shippingCost.toFixed(2)}</small>
			</p>
			<p>
				<small>Tax + VAT: ${tax.toFixed(2)}</small>
			</p>
			<hr />
			<h4>Total Price:${(totalPrice + shippingCost + tax).toFixed(2)}</h4>
		</div>
	);
}

export default Cart;
