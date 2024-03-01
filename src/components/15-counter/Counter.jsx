import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FiPlusCircle } from 'react-icons/fi';
import { FaMinus } from 'react-icons/fa';
import { GrPowerReset } from 'react-icons/gr';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const handleClick = (value) => {
        if (value < 0) value = 0;
        setNumber(value);
    };

    return (
        <div className="d-flex flex-column align-items-center m-5">
            <div className="mb-5">
                <Button
                    variant="danger"
                    className="fs-3"
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    <FiPlusCircle />
                </Button>
                <Button variant="secondary" className="fs-3">
                    {count}
                </Button>
                <Button
                    variant="success"
                    className="fs-3"
                    onClick={() => setCount((prev) => prev - 1)}
                >
                    <FaMinus />
                </Button>
                <Button
                    variant="info"
                    className="fs-3"
                    onClick={() => setCount(0)}
                >
                    <GrPowerReset />
                </Button>
            </div>

            <div>
                <Button
                    variant="danger"
                    className="fs-3"
                    onClick={() => handleClick(number + 1)}
                >
                    <FiPlusCircle />
                </Button>
                <Button variant="secondary" className="fs-3">
                    {number}
                </Button>
                <Button
                    variant="success"
                    className="fs-3"
                    onClick={() => handleClick(number - 1)}
                >
                    <FaMinus />
                </Button>
                <Button
                    variant="info"
                    className="fs-3"
                    onClick={() => handleClick(0)}
                >
                    <GrPowerReset />
                </Button>
            </div>
        </div>
    );
};

export default Counter;
