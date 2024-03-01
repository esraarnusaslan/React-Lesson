import React, { useEffect, useState } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        window.document.title = `You clicked ${counter} times`;
    }, [counter]);

    return (
        <Container className="m-5 text-center">
            <Alert
                style={{ fontSize: '3rem', fontWeight: 'bold', margin: '50px' }}
            >
                {counter}
            </Alert>
            <div className="d-flex justify-content-around mt-4">
                <Button
                    variant="danger"
                    onClick={() => setCounter((prev) => prev + 1)}
                >
                    Click Me
                </Button>
            </div>
        </Container>
    );
};

export default Counter;
