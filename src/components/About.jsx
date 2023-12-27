import React from 'react';
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'
import img from '../../public/imges/asset 11.jpeg'

const About = () => {
    return (
        <div className='max-w-screen-xl mx-auto py-10'>
            <h1 className='text-center  text-4xl font-medium mb-4'>ABOUT <span className='text-teal-400'>US</span> </h1>
            <div className='grid md:grid-cols-2 gap-5 p-4'>
                <div className='grid-cols-1  space-y-10'>
                    <h1 className='font-mono text-4xl font-bold text-teal-400'>About Best residiancial hotel Panthapath</h1>
                    <p className='text-lg text-slate-600'>Hotel Shopno Nibash is your ultimate destination for a delightful stay in Dhaka. As the best hotel in Panthapath, offering affordability and comfort, we provide a memorable experience. Conveniently located near Dhanmondi and Green Road, we are the top choice for those seeking a budget-friendly residential hotel in the area.</p>
                    <div className=''>
                        <button className='px-8 py-4 bg-cyan-500 flex gap-2 text-white'>
                            <span><PhoneArrowUpRightIcon className='h-5 w-5 text-white' /></span>
                            01914695985</button>
                    </div>
                </div>
                <div className='grid-cols-1'>
                    <img className='h-96 w-full' src={img} alt="" />

                </div>
            </div>
        </div>
    );
};

export default About;