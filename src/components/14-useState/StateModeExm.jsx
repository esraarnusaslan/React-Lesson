import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const StateModeExm = () => {
    const [mode, setMode] = useState('light');

    let BgStyles = 'bg-light text-dark mt-5 p-5 text-center';

    if (mode === 'dark') {
        BgStyles = 'bg-dark text-light mt-5 p-5 text-center';
    }

    return (
        <div className={BgStyles}>
            <h1>Dar-Light-Mode</h1>
            <div className="d-flex justify-content-evenly mt-5">
                <Button variant="info" onClick={() => setMode('dark')}>
                    Dark Mode
                </Button>
                <Button variant="warning" onClick={() => setMode('light')}>
                    Light Mode
                </Button>
            </div>
        </div>
    );
};

export default StateModeExm;
