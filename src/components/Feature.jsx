import React from 'react';
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'
import image from '../../public/imges/asset 10.jpeg'
import image2 from '../../public/imges/asset 12.jpeg'


const Feature = () => {
    return (
        <div className='my-20 max-w-screen-xl mx-auto p-4 '>
            <h3 className='font-sans font-bold text-3xl text-center'>ATTRACTIVE <span className='text-cyan-400 '>FEATURE</span></h3>
            <div className='grid md:grid-cols-2 py-8 gap-5'>
                <div className='grid-cols-1' data-aos="fade-right">
                    <img src={image} alt="" />
                    <p className='text-lg mt-4 text-slate-600'>Discover the <span className='font-bold'>best hotel rooms in Panthapath</span>, Dhanmondi, and Green Road! Experience luxury at an affordable price at our residential hotels. Book now for an unforgettable stay and enjoy top-notch amenities without breaking the bank. Your perfect stay awaits at our <span className='font-bold'>low-price hotels in Dhaka</span>.</p>

                    <div className='mt-4 md:mt-16'>
                        <button className='px-8 py-4 bg-cyan-500 flex gap-2 text-white'>
                            <span><PhoneArrowUpRightIcon className='h-5 w-5 text-white' /></span>
                            01914695985</button>
                    </div>
                </div>
                <div className='grid-cols-1' data-aos="fade-left">
                    <h3 className='font-medium text-2xl  md:text-4xl'>Enjoy a night of experiences at
                        Hotel Shopno Nibas.</h3>
                    <p className='py-4 text-lg text-slate-600'>Discover the <span className='font-bold'>best hotel in Panthapath</span> and the <span className='font-bold'>low-price hotel in Dhanmondi and Green Road</span> . Enjoy a comfortable stay at our <span className='font-bold'>residential hotel in Panthapath</span> without breaking the bank. Unbeatable rates, top-notch amenities, and a convenient location await you. Book now for an unforgettable experience.</p>
                    <img src={image2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Feature;