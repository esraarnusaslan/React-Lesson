import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header>
            <h1>React Examples</h1>
            <nav>
                <Link to="/">Home</Link>

                {pathname.includes('/movies') && (
                    <>
                        <span> | </span>
                        <a
                            href="https://api.tvmaze.com/"
                            target="_blank"
                            rel="noreferrer nofollow noopener"
                        >
                            TVmaze API
                        </a>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
