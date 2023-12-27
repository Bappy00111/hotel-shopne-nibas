import React, { useEffect, useState } from 'react';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'

const Bannar = () => {
    const [image, setImage] = useState(0)

    const images = ['https://i.ibb.co/jMhyGbH/asset-1.jpg', 'https://i.ibb.co/g9wGcMv/asset-6.jpg', 'https://i.ibb.co/sKgSFgF/asset-2.jpg']

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImage((preIndex) => (preIndex + 1) % images.length)
        }, 3000)
        return () => clearInterval(intervalId)
    }, [])

    // console.log('Current Image Index:', image);
    // console.log('Current Image URL:', images[image]);


    return (
        <div className='relative' style={{ backgroundImage: `url(${images[image]})`,backgroundSize:'cover',backgroundPosition:'center',height:'100vh'}}>
            <div className='absolute inset-0 bg-gray-900 bg-opacity-40 flex flex-col justify-center items-center text-white space-y-5 text-center'>
                    <h3 className='text-5xl font-serif font-extrabold text-white'>Welcome To</h3>
                    <p className='text-white font-medium'>Best Hotel In Panthapath</p>
                    <h1 className='text-2xl md:text-6xl font-extrabold text-white'>HOTEL SHOPNO NIBASH</h1>
                    <p className='font-medium text-white'>Welcome to Hotel Shopno Nibash, your Best hotel in Panthapath for a low-price hotel in Panthapath, <br /> Dhanmondi, and Green Road areas. Experience top-notch hospitality and comfort at the best residential <br /> hotel in Panthapath. Book now for an unforgettable stay that won’t break the bank.</p>
                    <button className='btn bg-cyan-400 hover:bg-cyan-600 px-6 border-none text-lg text-white'>
                    <span><ArrowRightStartOnRectangleIcon className='h-5 w-5 text-white' /></span>
                        Contact Us</button>
                </div>
            </div>
    );
};

export default Bannar;