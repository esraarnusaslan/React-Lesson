import React from 'react';

const FunctionComp = ({ image }) => {
    const [message, setMessage] = React.useState('Hello World');

    useEffect(() => {}, [message, image]);

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};

export default FunctionComp;
