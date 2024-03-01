import React, { useEffect } from 'react';
import { Alert, Button } from 'react-bootstrap';

const UseEffect = () => {
    const [message, setMessage] = React.useState('');
    const [error, setError] = React.useState('');

    console.log(
        'The return part works in both render and re-render situations.'
    );

    //! UseEffect
    useEffect(() => {
        console.log(`
        Mounting:Just works on the first render`);
    }, []);

    useEffect(() => {
        console.log(`
        Updating:Just works after the return part`);
    });

    useEffect(() => {
        console.log(`
        dependency change `);
    }, [message]);

    useEffect(() => {
        let timer = setTimeout(() => {
            console.log('It will work after 5 seconds');
        }, 5000);
        return () => {
            clearTimeout(timer);
            //Unmounting:
        };
    }, []);

    return (
        <div className="m-5 text-center">
            <Alert>
                {message}--------{error}
            </Alert>
            <div className="d-flex justify-content-around mt-4">
                <Button
                    variant="danger"
                    onClick={() => setMessage('Hello useEffect')}
                >
                    Set Message
                </Button>
                <Button
                    variant="info"
                    onClick={() => setError('Error useEffect')}
                >
                    Set Error
                </Button>
            </div>
        </div>
    );
};

export default UseEffect;
