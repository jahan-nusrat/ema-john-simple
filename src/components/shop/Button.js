import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
function Button (props) {
	const { item, selectItems } = props;
	const clickHandler = () => {
		return selectItems(item);
	};
	return (
		<button className="btn" onClick={clickHandler}>
			<FontAwesomeIcon icon={faShoppingCart} /> add to cart
		</button>
	);
}

export default Button;
