import React from 'react';

const InternalStyles = () => {
    const ulStyles = {
        backgroundColor: 'pink',
        color: 'white',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    return (
        <div>
            <h2>Internal Style</h2>
            <nav>
                <ul style={ulStyles}>
                    <li>
                        <a href="#" style={{ textDecoration: 'none' }}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" style={{ textDecoration: 'none' }}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" style={{ textDecoration: 'none' }}>
                            Products
                        </a>
                    </li>
                </ul>
            </nav>
            <ul style={{ ...ulStyles, backgroundColor: 'yellow' }}>
                <li>
                    <a href="#">Apple</a>
                </li>
                <li>
                    <a href="#">Orange</a>
                </li>
                <li>
                    <a href="#">Fish</a>
                </li>
            </ul>
        </div>
    );
};

export default InternalStyles;
