import React from 'react';
import Bannar from './Bannar';
import Feature from './Feature';
import Rooms from './Rooms';
import RantRooms from './RantRooms';
import About from './About';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Feature></Feature>
            <Rooms></Rooms>
            <RantRooms></RantRooms>
            <About></About>
        </div>
    );
};

export default Home;