import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import SingleProduct from '../SingleProduct/SingleProduct'
import {BsArrowRight} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const SummerProduct = () => {
    const {superDeal}=useShoppingCart()
  
  return (
    <section className='popular-product'>

    <div className="section-header">
      <h2 className="section-title">Summer Fashion</h2>
      <NavLink to={"/shop"} className="section-btn" > See More <span><BsArrowRight/></span></NavLink>
    </div>

<div className="popular-product-container">
      {
          superDeal && superDeal.map((item)=>{
            
             return(

               <SingleProduct item={item} key={item.id}/>
             )
          })
      }
</div>

    

  </section>
  )
}

export default SummerProduct