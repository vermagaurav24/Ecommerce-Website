import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-zinc-200 w-full'> {/* Light gray background and full width */}
        <div className='max-w-[1200px] mx-auto px-6 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-8 mt-40 text-sm'>

            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-369-6789</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
        </div>

        <div className='border-t border-gray-300'>
            <p className='py-5 text-sm text-center text-gray-700'>
                Copyright 2025© forever.com - All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer
