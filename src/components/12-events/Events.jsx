import React from 'react';
import Button from 'react-bootstrap/Button';

const Events = () => {
    const sayHello = () => {
        alert('Hello');
    };

    const sayHelloEvent = (name) => {
        alert(`Hi ${name}`);
    };

    return (
        <div
            style={{
                margin: '50px',
                display: 'flex',
                justifyContent: 'space-evenly',
            }}
        >
            <Button variant="primary" onClick={sayHello}>
                Hello
            </Button>
            <Button variant="secondary" onClick={() => sayHelloEvent('Event')}>
                Event
            </Button>
        </div>
    );
};

export default Events;
