import React from 'react';

const Jsx4Map = () => {
    const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

    const capitals = [
        'Helsinki',
        'Copenhagen',
        'Stockholm',
        'Oslo',
        'Reykjavik',
    ];

    return (
        <div>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>{country}</li>
                ))}
            </ul>

            <select>
                {capitals.map((capital, index) => (
                    <option key={index}>{capital}</option>
                ))}
            </select>
        </div>
    );
};

export default Jsx4Map;
