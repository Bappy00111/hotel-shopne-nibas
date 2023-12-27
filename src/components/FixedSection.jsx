import React from 'react';
import { PhoneArrowUpRightIcon, InboxStackIcon, MapIcon } from '@heroicons/react/24/solid'
const FixedSection = () => {

    const imgUrl = 'https://i.ibb.co/dMFtHPx/asset-13.jpg'
    return (
        <div className='h-96 py-10 md:bg-fixed relative' style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='absolute inset-0 bg-gray-900 bg-opacity-40 flex flex-col justify-center items-center space-y-5 text-center'>
                <h1 className='text-white text-xl md:text-4xl font-serif'>Best hotel in Panthapath</h1>
                <h1 className='text-white text-2xl md:text-5xl font-medium'>Extra Perks When You Book Directly With Us</h1>
                <div className='md:flex gap-4 text-center'>
                    <div className='mb-2'>
                        <button className='text-white px-6 py-2 bg-cyan-400 flex gap-2'>
                            <InboxStackIcon className='h-6 w-6' />
                            hotelshopnonibash.info@gmail.com
                        </button>
                    </div>

                    <div>
                        <button className='px-8 py-2 bg-cyan-400 flex gap-2 text-white'>
                            <span><PhoneArrowUpRightIcon className='h-5 w-5 text-white' /></span>
                            01914695985</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FixedSection;