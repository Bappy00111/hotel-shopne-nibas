import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-cyan-500'>
            <div className='max-w-screen-xl mx-auto flex justify-between p-6'>
                <h1 className='font-medium'>©2023. Hotel Shopno Nibash. All Rights Reserved.</h1>
                <p className='font-medium'><Link>+8801790887775</Link></p>
            </div>
        </div>
    );
};

export default Footer;