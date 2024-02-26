import React from 'react';

const Jsx3ShortCircuit = () => {
    const user = {
        name: 'Tom',
        age: 33,
        isStudent: false,
    };
    const { isStudent, name, age } = user;

    return (
        <div>
            {isStudent && <h1>{name}</h1>}
            {age >= 18 && <h1>Go to bar</h1>}
            {age < 18 && <h1>Go to home</h1>}

            {age < 18 ? <h1>Go to home</h1> : <h1>Go to bar</h1>}
        </div>
    );
};

export default Jsx3ShortCircuit;
