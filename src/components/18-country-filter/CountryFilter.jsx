import React, { useEffect, useState } from 'react';
import countries from '../../assets/data/countries.json';
import { Form, Table } from 'react-bootstrap';

const CountryFilter = () => {
    const [country, setCountry] = useState(countries);
    const [searchBox, setSearchBox] = useState('');

    useEffect(() => {
        let filteredCountries = countries.filter((item) =>
            item.name
                .toLocaleLowerCase()
                .includes(searchBox.toLocaleLowerCase())
        );
        setCountry(filteredCountries);
    }, [searchBox]);

    return (
        <div>
            <Form.Control
                type="text"
                placeholder="Filter"
                className="m-4 bg-info w-100 text-center p-2 fs-3"
                onChange={(e) => setSearchBox(e.target.value)}
            />
            <Table
                striped
                bordered
                hover
                variant="dark"
                style={{
                    textAlign: 'center',
                    cursor: 'pointer',
                    width: '50rem',
                    margin: '1rem auto',
                }}
            >
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Country Name</th>
                        <th>Country Code</th>
                    </tr>
                </thead>
                <tbody>
                    {country.map((country, index) => (
                        <tr key={country.code}>
                            <td>{index + 1}</td>
                            <td>{country.name}</td>
                            <td>{country.code}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default CountryFilter;
