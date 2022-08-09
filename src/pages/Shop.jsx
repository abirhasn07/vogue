import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useShoppingCart } from '../context/ShoppingCartContext'
import SingleProduct from '../components/SingleProduct/SingleProduct.jsx'
import '../styles/Shop.css'
import Footer from '../components/Footer/Footer'
const Shop = () => {
  const {database} =useShoppingCart()
  return (
    <>
    <section className='shop'>
      <Navbar/>



<div className="shop-container">
  <div className="shop-categories">
      <div className="shop-col search-product">
     <input type="text" name="search" id="" placeholder='Search Product' />
     
      </div>
<div className="shop-col">
  <h4>Category</h4>
  <li>Men Fashion</li>
  <li>Woman Fashion</li>
  <li>Summer Fashion</li>
  <li>Men Fashion</li>
  <li>Woman Accessories</li>
  <li>Corporate Fashion</li>
</div>
<div className="shop-col">
  <h4>Size</h4>
   <div className='checkbox-container'>
    <input type="checkbox" name="extra-small" className='checkbox' />
    <label htmlFor="extra-small">Extra Small</label>
   </div>
   <div className='checkbox-container'>
    <input type="checkbox" name="small" className='checkbox' />
    <label htmlFor="small">Small</label>
   </div>
   <div className='checkbox-container'>
    <input type="checkbox" name="medium" className='checkbox' />
    <label htmlFor="medium">Medium</label>
   </div>
   <div className='checkbox-container'>
    <input type="checkbox" name="large" className='checkbox' />
    <label htmlFor="large">Large</label>
   </div>
   <div className='checkbox-container'>
    <input type="checkbox" name="extra-large" className='checkbox' />
    <label htmlFor="extra-large">Extra Large</label>
   </div>
  
</div>

  </div>
  
<div className="popular-product-container shop-product-container">
        {
            database && database.map((item)=>{
              
               return(

                 <SingleProduct item={item} key={item.id}/>
               )
            })
        }
</div>
</div>

<Footer/>
    </section>


</>
  )
}

export default Shop