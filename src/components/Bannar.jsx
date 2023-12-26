import React, { useEffect, useState } from 'react';

const Bannar = () => {
    const [image,setImage] = useState(0)

    const images = ['https://i.ibb.co/jMhyGbH/asset-1.jpg','https://i.ibb.co/g9wGcMv/asset-6.jpg','https://i.ibb.co/sKgSFgF/asset-2.jpg']

    useEffect(()=>{
        const intervalId  = setInterval(()=>{
            setImage((preIndex)=>(preIndex+1) % images.length)
        },3000)
        return ()=> clearInterval(intervalId)
    },[])

    // console.log('Current Image Index:', image);
    // console.log('Current Image URL:', images[image]);
    

    return (
        <div className='bg-cover bg-center h-screen' style={{backgroundImage:`url(${images[image]})`}}>
            <h1>Hotel</h1>
        </div>
    );
};

export default Bannar;