import React from 'react';
import "./Home.css";
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';

const Home = () => {
    return (
        <div className='home-container' id='home'>
            <Profile />
            <Footer />
            
        </div>
    );
}

export default Home;
