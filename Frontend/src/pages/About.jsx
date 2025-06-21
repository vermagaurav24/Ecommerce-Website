import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-14'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img1} alt="" />
        <div className='flex flex-col justify-center gap-10 md:w-2/4 text-gray-600'>
          <p>Welcome to DesiCart – your trusted destination for authentic, handmade treasures crafted by skilled village artisans. Our goal is to bring you closer to India’s rich culture and craftsmanship through beautiful, affordable, and meaningful products — made with heart and heritage.</p>
          <p>At the core of DesiCart is a mission to support rural talent. Many artisans lack the means to reach the wider world — we’re here to bridge that gap. From doorstep pickup to seamless online shopping, we ensure every purchase helps empower local hands and preserve traditional skills.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to connect you with the soul of India — through handcrafted goods that tell a story. From eco-friendly home décor to everyday essentials made with care, everything you find here supports real people and real communities. When you shop with us, you’re not just buying — you’re uplifting lives.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE USE'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We handpick and rigorously inspect every product to meet the highest standards of quality. Your satisfaction and trust matter, so we deliver nothing but the best.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Enjoy a seamless shopping experience from browsing to checkout. With a user-friendly interface, secure payment options, and fast delivery, everything you need is just a click away.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our support team is always ready to help — before, during, and after your purchase. We believe in building relationships, not just transactions.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About