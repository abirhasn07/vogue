import React from 'react'
import './Polularproduct.css'
import {BsArrowRight} from 'react-icons/bs'
import { useShoppingCart } from '../../context/ShoppingCartContext.jsx'
import { NavLink } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
const PopularProduct = () => {
    const {popularProduct}=useShoppingCart()
    // console.log(popularProduct);
  return (
    <section className='popular-product'>

      <div className="section-header">
        <h2 className="section-title">Woman Fashion</h2>
        <NavLink to={"/shop"} className="section-btn" > See More <span><BsArrowRight/></span></NavLink>
      </div>

<div className="popular-product-container">
        {
            popularProduct && popularProduct.map((item)=>{
              
               return(

                 <SingleProduct item={item} key={item.id}/>
               )
            })
        }
</div>

      

    </section>
  )
}

export default PopularProduct