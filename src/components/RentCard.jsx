import React from 'react';
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid'

const RentCard = ({ room }) => {
    console.log(room);
    const { img,name,title ,price} = room
    return (
        <div className="card w-full bg-base-100 rounded-none shadow-xl p-2" data-aos="zoom-in">
            <figure>
                <img src={img} alt="Shoes" className="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-medium text-sky-400">{name}</h2>
                <p className='text-slate-700 '>{title}</p>
                <p className='text-xl font-bold '>Price : {price}</p>
                <div className=''>
                        <button className='px-8 py-4 bg-cyan-500 flex gap-2 text-white'>
                            <span><PhoneArrowUpRightIcon className='h-5 w-5 text-white' /></span>
                            01914695985</button>
                    </div>
            </div>
        </div>
    );
};

export default RentCard;