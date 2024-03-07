import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { Outlet } from 'react-router-dom';
import './layout.scss';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AppLayout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
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
