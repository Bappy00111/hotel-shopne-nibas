import React, { useEffect, useState } from 'react';
import RentCard from './RentCard';

const RantRooms = () => {
    const [rooms,setRooms] = useState(null)

    useEffect(()=>{
        fetch('rentRoom.json')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])


    return (
        <div className='bg-slate-100 py-5'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-center text-4xl font-medium pb-10'>ROOMS RENT <span className='text-teal-400'>PRICE</span></h1>
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        rooms?.map(room => <RentCard
                        key={room.id}
                        room={room}
                        ></RentCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default RantRooms;