import React from 'react'
import Categories from '../components/Categories/Categories'
import Cta from '../components/Cta/Cta'
import FeatureProduct from '../components/FeatureProduct/FeatureProduct'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import PopularProduct from '../components/PopularProduct/PopularProduct'
import Services from '../components/Services/Services'
import SummerProduct from '../components/SummerProduct/SummerProduct'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <PopularProduct/>
    <Cta/>
    <SummerProduct/>
    <Services/>
    <FeatureProduct/>
    <Footer/>
    </>
  )
}

export default Home