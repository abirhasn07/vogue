import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency';
const SingleCartItem = ({ item }) => {
	const { id, quantity } = item;
	// console.log(item);
	const {
		removeFromCart,
		decreaseCartQuantity,
		increaseCartQuantity,
		database,
	} = useShoppingCart();

	const newItem = database.find((i) => i.id === id);
	if (item == null) return null;

	return (
		<div className="cart-product">
			<div className="cart-product-img">
				<img src={newItem.productImage} alt="" />
			</div>
			<div className="cart-product-details">
				<p className="cart-product-name">White Shirt With Pleat Detail Back</p>
				<p className="cart-product-amount">
					<span>{quantity}</span> x {formatCurrency(newItem.productPrice)}
				</p>
			</div>
			<div className="single-product-total">
				<p>{formatCurrency(quantity * newItem.productPrice)}</p>
			</div>
			<div className="cart-btns">
				<div className="cart-icon-btn" onClick={() => increaseCartQuantity(id)}>
					<h3>+</h3>
				</div>
				<div className="cart-icon-btn">{quantity}</div>
				<div className="cart-icon-btn" onClick={() => decreaseCartQuantity(id)}>
					<h3>-</h3>
				</div>
			</div>
			<button className="remove-item" onClick={() => removeFromCart(id)}>
				<AiFillCloseCircle color="red" />
			</button>
		</div>
	);
};

export default SingleCartItem;
