import React, { useState } from 'react';

const Form1 = () => {
    const [name, setName] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || name.length < 3) {
            alert('Enter a valid name');
            return;
        }

        alert('Form submit was successful');
    };

    return (
        <div>
            <form
                action="https://exampl.com"
                method="post"
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name: </label>
                <br />
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleName}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Form1;
