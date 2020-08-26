import React from 'react';

function Cart ({ cart }) {
	console.log(cart);
	const totalPrice = cart.reduce((acc, curr) => {
		return acc + curr.price;
	}, 0);
	return (
		<div>
			<h4>Order Summery</h4>
			<p>Items Ordered: {cart.length} </p>
			<h3>Price:{totalPrice.toFixed(2)}</h3>
		</div>
	);
}

export default Cart;
