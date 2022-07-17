import React from 'react';
import "./Home.css";
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import NavBar from './NavBar/NavBar';

const Home = () => {
    return (
        <div className='home-container' >
            <NavBar />
            <Profile />
            <Footer />
            
        </div>
    );
}

export default Home;
