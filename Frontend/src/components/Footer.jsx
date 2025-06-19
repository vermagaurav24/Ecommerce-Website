import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-zinc-100 w-full'> {/* Light gray background and full width */}
            <div className='max-w-[1200px] mx-auto px-6 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-8 mt-40 text-sm'>

                <div>
                    <img src={assets.logo1} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Forever is more than fashion — it's a feeling, a lifestyle, and a promise of timeless elegance.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li><Link to='/' className='hover:text-black'>Home</Link></li>
                        <li><Link to='/about' className='hover:text-black'>About Us</Link></li>
                        <li><Link to='/contact' className='hover:text-black'>Contact</Link></li>
                        <li><Link to='/privacy' className='hover:text-black'>Privacy</Link></li>
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
