import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header>
            <h1>React Examples</h1>
            <nav>
                <Link to="/">Home</Link>

                
                {pathname === '/control-menu' && (
                    <>
                        {' '}
                        <span> | </span>{' '}
                        <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
                            Wikipedia
                        </a>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
