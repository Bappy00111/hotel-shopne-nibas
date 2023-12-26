import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            {/* <div className='max-w-[1240px] mx-auto'> */}
                <Header></Header>
            {/* </div> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;