import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../styles/Cart.css';
import cartImg from '../images/cart.png';
import { useShoppingCart } from '../context/ShoppingCartContext';
import SingleCartItem from '../components/SingleCartItem/SingleCartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import { NavLink } from 'react-router-dom';
const Cart = () => {
	const { cartItem, database, clearCart } = useShoppingCart();

	if (cartItem.length >= 1) {
		return (
			<>
				<Navbar />
				<div className="cart-container">
					{cartItem.map((item) => {
						return <SingleCartItem item={item} key={item.id} />;
					})}

					<div className="cart-footer">
						<p className="cart-total">
							Total:
							{formatCurrency(
								cartItem.reduce((total, cartItem) => {
									const item = database.find((i) => i.id === cartItem.id);
									//   console.log(item);
									return total + (item?.productPrice || 0) * cartItem.quantity;
								}, 0),
							)}
						</p>

						<button className="checkout-btn" onClick={() => clearCart()}>
							check out
						</button>
					</div>
				</div>
			</>
		);
	} else {
		return (
			<>
				<Navbar />
				<section className="empty-cart">
					<img src={cartImg} alt="cart" loading="lazy" width={'100px'} />
					<h1 sty>Your Cart is Empty</h1>
					<p>Add Something to make me happy 😍</p>
					<NavLink to="/shop" className={'empty-btn'}>
						Continue Shopping
					</NavLink>
				</section>
			</>
		);
	}
};

export default Cart;
