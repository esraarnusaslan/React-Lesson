import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import UserCard from './UserCard';

const Fetch1 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //useEffect is asyncron
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => setUsers(response))
            .catch((err) => console.error(err));
    }, []);

    return (
        <Container>
            <Row className="row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {users.map((user) => (
                    <Col key={user.id}>
                        <UserCard name={user.name} email={user.email} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Fetch1;
