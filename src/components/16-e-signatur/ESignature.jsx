import React, { useState } from 'react';
import '../../App.css';
import Title from './Title';

const ESignature = () => {
    const [name, setName] = useState('Your Signature');
    const [date, setDate] = useState('Select Your Date');

    const inputStyle = {
        border: 'none',
        borderBottom: '2px dotted black',
        outline: 'none',
        padding: '15px',
        backgroundColor: 'lightgray',
    };

    const handleDateTime = (e) => {
        setDate(e.target.value);
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    return (
        <div className="container">
            <Title classes={'title'} text={name} />
            <Title
                classes={'title-main mb-5'}
                text={date ? date : 'Select Your Date'}
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adip lorem ipsum dolor
                sit amet consectetur adip lorem ipsum dolor sit amet consectetur
                adip Lorem ipsum dolor sit amet consectetur adip lorem ipsum
                dolor sit amet consectetur adip lorem ipsum dolor sit amet
                consectetur adip
            </p>

            <footer
                className="d-flex justify-content-around"
                style={{ position: 'relative', top: '20vh' }}
            >
                <input
                    type="datetime-local"
                    value={date}
                    style={inputStyle}
                    onChange={handleDateTime}
                ></input>
                <input
                    type="text"
                    value={name}
                    style={inputStyle}
                    onChange={handleChangeName}
                ></input>
            </footer>
        </div>
    );
};

export default ESignature;
