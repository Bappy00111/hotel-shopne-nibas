import React from 'react';

const RoomsCard = ({ data }) => {
    console.log(data);
    const { img, name, title } = data
    return (
        <div className="card card-compact w-full rounded-none ">
            <figure><img src={img} alt="Shoes" 
                data-aos="fade-up" /></figure>
            <div className="card-body ">
                <div className='-mt-10 p-10 bg-base-100 shadow-2xl rounded-xl space-y-5'>
                    <h2 className="card-title text-xl md:text-2xl text-cyan-500 ">{name}</h2>
                    <p className=' font-semibold text-slate-600 md:text-lg'>{title}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;