import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const loadCountries = async () => {
        try {
            const resp = await axios.get('https://restcountries.com/v3.1/all'); // axios ta async
            const data = resp.data; //burada await yazmiyoruz
            setCountries(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        //re render olmaz.
        loadCountries();
    }, []);

    return (
        <Container className="mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Flag</th>
                        <th>Country</th>
                        <th>Population</th>
                        <th>Capital City</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country, index) => (
                        <tr key={country.name}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    src={country.flags.png}
                                    width="150"
                                    alt={country.name}
                                />
                            </td>
                            <td>{country.name.common}</td>
                            <td>{country.population}</td>
                            <td>{country.capital?.join('-')}</td>
                            {/* capital dizi oldugu igin join yaptik. baskenti olmayan ulke var diye ? koyduk */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Countries;
