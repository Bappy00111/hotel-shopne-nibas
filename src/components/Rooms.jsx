import React, { useEffect, useState } from 'react';
import RoomsCard from './RoomsCard';

const Rooms = () => {
const [datas,setDatas] = useState(null)
    useEffect(()=>{
        fetch('rooms.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    console.log(datas);
    return (
        <div className='bg-slate-200 py-10'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 className='text-center text-4xl font-medium mb-4'>RO<span className='text-cyan-400'>OMS</span></h1>
                <div className='grid md:grid-cols-2 gap-5 p-4'>
                    {
                        datas?.map(data => <RoomsCard
                        key={data.id}
                        data={data}
                        ></RoomsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Rooms;