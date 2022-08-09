import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import "../styles/SingleProduct.css";
const SingleProductPage = () => {
  const { database, decreaseCartQuantity, increaseCartQuantity, cartQuantity } =
    useShoppingCart();
  const { id } = useParams();
  const product = database.find((item) => item.id === id);
  const { productImage, productName, productPrice } = product;
  return (
    <>
      <Navbar />
      <div className="single-product">
        <img src={productImage} alt="" className="single-product-img" />
        <div className="single-product-info">
          <h4>{productName}</h4>
          <p>
            Children clothing/ kids wear is usually more casual than adult
            clothing, fit play and rest. Hosiery is usually used. More recently,
            however, tons of childrenswear is heavily influenced by trends in
            adult fashion
          </p>
          <h4><span>{formatCurrency(productPrice)} </span> {formatCurrency(productPrice-190)}</h4>

          <div className="amount-btn">
            <div onClick={() => decreaseCartQuantity(id)}>-</div>
            <div>{cartQuantity}</div>
            <div onClick={() => increaseCartQuantity(id)}>+</div>
            <div onClick={() => increaseCartQuantity(id)}>Add To Cart</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
