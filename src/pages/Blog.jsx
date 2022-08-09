import React from 'react'
import Footer from '../components/Footer/Footer.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import blog1 from '../images/blog (1).png'
import blog2 from '../images/blog (2).png'
import blog3 from '../images/blog (3).png'
import blog4 from '../images/blog (4).png'
import blog5 from '../images/blog (5).png'
import blog6 from '../images/blog (6).png'
import banner from '../images/blog-banner.png'
import '../styles/Blog.css'
const Blog = () => {
  return (
    <section className='blog'>
      <Navbar/>
      
      <div className="blog-container">
        <div className="blog-card">
          <img src={blog1} alt="blog" className="blog-img" loading='lazy' />
          <div className="blog-info">
            <h2 className="blog-title">
            The Best ways to change your summer wardrobe into autumn wardrobe
            </h2>
            <div className="blog-footer">
              <p>Read More</p> <p>Jan 11,2022</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={blog2} alt="blog" className="blog-img" loading='lazy' />
          <div className="blog-info">
            <h2 className="blog-title">
            The Best ways to change your summer wardrobe into autumn wardrobe
            </h2>
            <div className="blog-footer">
              <p>Read More</p> <p>Jan 11,2022</p>
            </div>
          </div>
        </div>
        <div className="blog-banner">
          <img src={banner} alt="" loading='lazy' />
        </div>
        <div className="blog-card">
          <img src={blog3} alt="blog" className="blog-img" loading='lazy' />
          <div className="blog-info">
            <h2 className="blog-title">
            The Best ways to change your summer wardrobe into autumn wardrobe
            </h2>
            <div className="blog-footer">
              <p>Read More</p> <p>Jan 11,2022</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={blog4} alt="blog" className="blog-img" loading='lazy' />
          <div className="blog-info">
            <h2 className="blog-title">
            The Best ways to change your summer wardrobe into autumn wardrobe
            </h2>
            <div className="blog-footer">
              <p>Read More</p> <p>Jan 11,2022</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={blog5} alt="blog" className="blog-img" loading='lazy' />
          <div className="blog-info">
            <h2 className="blog-title">
            The Best ways to change your summer wardrobe into autumn wardrobe
            </h2>
            <div className="blog-footer">
              <p>Read More</p> <p>Jan 11,2022</p>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src={blog6} alt="blog" className="blog-img" loading='lazy' />
          <div className="blog-info">
            <h2 className="blog-title">
            The Best ways to change your summer wardrobe into autumn wardrobe
            </h2>
            <div className="blog-footer">
              <p>Read More</p> <p>Jan 11,2022</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Blog