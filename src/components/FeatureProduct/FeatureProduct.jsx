import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import {NavLink} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import SingleProduct from '../SingleProduct/SingleProduct'
const FeatureProduct = () => {
    const {featureProduct}=useShoppingCart()
   
  return (
    <section>
       <div className="section-header">
        <h2 className="section-title">Feature Products</h2>
        <NavLink to={"/shop"} className="section-btn" > See More <span><BsArrowRight/></span></NavLink>
      </div>

      <div className="popular-product-container">
        {
            featureProduct && featureProduct.map((item)=>{
              
               return(

                 <SingleProduct item={item} key={item.id}/>
               )
            })
        }
</div>


    </section>
  )
}

export default FeatureProduct