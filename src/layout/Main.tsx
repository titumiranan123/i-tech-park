import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main:React.FC = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;