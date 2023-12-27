import React from 'react';
import Bannar from './Bannar';
import Feature from './Feature';
import Rooms from './Rooms';
import RantRooms from './RantRooms';
import About from './About';
import Contact from './Contact';
import FixedSection from './FixedSection';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Feature></Feature>
            <Rooms></Rooms>
            <RantRooms></RantRooms>
            <About></About>
            <Contact></Contact>
            <FixedSection></FixedSection>
        </div>
    );
};

export default Home;