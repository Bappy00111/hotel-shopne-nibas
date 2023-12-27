import React from 'react';

const FixedSection = () => {

    const imgUrl = 'https://i.ibb.co/dMFtHPx/asset-13.jpg'
    return (
        <div className='h-96 py-10 relative' style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='absolute inset-0 bg-gray-900 bg-opacity-40'>
                <h1 className='text-white text-4xl'>Best hotel in Panthapath</h1>
            </div>
        </div>
    );
};

export default FixedSection;