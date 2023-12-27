import React from 'react';
import Bannar from './Bannar';
import Feature from './Feature';
import Rooms from './Rooms';
import RantRooms from './RantRooms';
import About from './About';
import Contact from './Contact';
import FixedSection from './FixedSection';
import HotalContact from './HotalContact';

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
            <HotalContact></HotalContact>
        </div>
    );
};

export default Home;