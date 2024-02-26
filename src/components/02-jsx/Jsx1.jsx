import React from 'react';

const Jsx1 = () => {
    const user = {
        name: 'Ahmet',
        surname: 'Yilmaz',
        age: 20,
        address: {
            city: 'istanbul',
            country: 'Turkey',
        },
        salary: 34000,
        gender: 'Man',
        message: 'Good Night!',
    };

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h2>Surname: {user.surname} </h2>
            <h2>Gender: {user.gender} </h2>
            <h2>Age: {user.age} </h2>
            <h2>
                Address: {user.address.city} / {user.address.country}{' '}
            </h2>
            <h2>Salary: {user.salary} $ </h2>
            <h5>Message: {user.message}</h5>
        </div>
    );
};

export default Jsx1;
