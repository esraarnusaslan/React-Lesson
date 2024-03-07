import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Outlet } from 'react-router-dom';
import './layout.scss';

const AppLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default AppLayout;
