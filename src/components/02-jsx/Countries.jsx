import React from 'react';
import data from '../../assets/data/countries.json';

const Countries = () => {
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Country Name</th>
                    <th>Country Code</th>
                </tr>
            </thead>

            <tbody style={{ textAlign: 'center' }}>
                {data.map((country, index) => (
                    <tr key={country.code}>
                        <td>{index + 1}</td>
                        <td>{country.name}</td>
                        <td>{country.code}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Countries;
