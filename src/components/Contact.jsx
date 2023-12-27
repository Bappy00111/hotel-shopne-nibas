import React from 'react';
import { PhoneArrowUpRightIcon,InboxStackIcon,MapIcon } from '@heroicons/react/24/solid'
import img from '../../public/imges/Screenshot_2.png'

const Contact = () => {
    return (
        <div className='py-10 bg-slate-100 '>
            <div className='max-w-screen-xl mx-auto p-2'>
                <h1 className='font-sans  text-4xl text-center font-medium mb-4'>contact <span className='text-cyan-400'>us</span></h1>
                <div className='grid md:grid-cols-2'>
                    <div className='grid-cols-1 space-y-8 mb-5'>
                        <h1 className='font-extrabold text-3xl text-cyan-400'>Get in Touch</h1>
                        <p className='text-lg text-slate-600 font-medium'>Discover Hotel Shopno Nibash, the best hotel in Panthapath. Contact us now for an unforgettable stay filled with comfort and luxury.</p>
                        <div>
                            <div className='flex gap-3 items-center'>
                                <PhoneArrowUpRightIcon className='h-10 w-12 text-cyan-400' />
                                <span className='text-slate-700'>
                                    <h2 className='text-3xl font-semibold'>Call Now</h2>
                                    <p className='font-medium'>+8801914695985</p>
                                </span>
                            </div>
                            <div className='flex gap-3 items-center py-6'>
                                <InboxStackIcon className='h-10 w-12 text-cyan-400' />
                                <span className='text-slate-700'>
                                    <h2 className='text-3xl font-semibold'>Email</h2>
                                    <p className='font-medium'>hotelshopnonibash.info@gmail.com</p>
                                </span>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <MapIcon className='h-10 w-12 text-cyan-400' />
                                <span className='text-slate-700'>
                                    <h2 className='text-3xl font-semibold'>Address</h2>
                                    <p className='font-medium'>56/I/A, West Panthapath (West side of Square Hospital), Dhaka-1205</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='grid-cols-1'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;