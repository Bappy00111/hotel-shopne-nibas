import React from 'react';
import img from '../../public/imges/asset 0.png'
import { PhoneArrowUpRightIcon,InboxStackIcon,MapIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const HotalContact = () => {
    return (
        <div className='py-10 md:py-20 grid md:grid-cols-3 gap-5 max-w-screen-xl mx-auto p-4'>
            <div className='space-y-8'>
                <img src={img} alt="" />
                <p className='text-lg font-medium tracking-wider'>Discover Hotel Shopno Nibash, the finest hotel in Panthapath offering luxurious accommodations, exceptional service, and unforgettable experiences.</p>
            </div>
            <div className='md:text-center'>
                <h1 className='text-2xl font-bold text-cyan-400 mb-4'>CLICK AND GO</h1>
                <ul className='space-y-5 font-medium text-gray-500'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/rooms'>Rooms</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <div className=''>
                <h1 className='text-2xl font-bold text-cyan-400 mb-4'>CONTACT​</h1>
                <div>
                    <div className='flex gap-3 items-center'>
                        <PhoneArrowUpRightIcon className='h-6 w-6 text-cyan-400' />
                        <span className='text-slate-700'>
                            <h2 className='text-xl font-semibold'>Call Now</h2>
                            <p className='font-medium'>+8801914695985</p>
                        </span>
                    </div>
                    <div className='flex gap-3 items-center py-6'>
                        <InboxStackIcon className='h-6 w-6 text-cyan-400' />
                        <span className='text-slate-700'>
                            <h2 className='text-xl font-semibold'>Email</h2>
                            <p className='font-medium'>hotelshopnonibash.info@gmail.com</p>
                        </span>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <MapIcon className='h-6 w-6 text-cyan-400' />
                        <span className='text-slate-700'>
                            <h2 className='text-xl font-semibold'>Address</h2>
                            <p className='font-medium'>56/I/A, West Panthapath (West side of Square Hospital), Dhaka-1205</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotalContact;