import React from 'react'
import { formatCurrency } from '../../utilities/formatCurrency'
import './SingleProduct.css'
import {BsCartPlus,BsEyeFill,BsHeart} from 'react-icons/bs'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import {NavLink } from 'react-router-dom'
const SingleProduct = ({item}) => {

  const {increaseCartQuantity}=useShoppingCart()
    const {productName,productPrice,productImage,id}=item
    let randomDiscount= Math.trunc(Math.random()*350)
 //    console.log(randomDiscount);
    if (randomDiscount<=100) {
        randomDiscount += Math.trunc(Math.random()+99)
     }
  
 

    const discountPrice= productPrice - randomDiscount
  return (

    <figure>
    <img src={productImage} alt={productName} loading="lazy" />
    <p className="product-name">{productName}</p>
    <div className="product-pricing">
        <p className="without-discount">{formatCurrency(productPrice)}</p>
        <p className="discount-price">{formatCurrency(discountPrice)}</p>
    </div>

    <div className="product-addToCart">
      <div className="product-addToCart-icon">
      <BsHeart size={"1rem"} color="#efefef" />
      </div>
      <div className="product-addToCart-icon"  onClick={()=>increaseCartQuantity(id)}>
      <BsCartPlus size={"1rem"} color="#efefef" />
      </div>
      <NavLink to={`/product/${id}`} className="product-addToCart-icon">
      <BsEyeFill size={"1rem"} color="#efefef" />
      </NavLink>
    </div>
 </figure>
  )
}

export default SingleProduct