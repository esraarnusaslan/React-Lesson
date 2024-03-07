import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="row-cols-2 row-cols-md-4 row-cols-lg-5">
            <Container>
                <Row>
                    <Col>
                        <Link
                            to="/hello-world"
                            className="btn btn-light btn-block"
                        >
                            Hello World
                        </Link>
                        {/* Link is a component */}
                    </Col>

                    <Col>
                        <Link
                            to="/control-menu"
                            className="btn btn-light btn-block"
                        >
                            Control Menu
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/clock" className="btn btn-light btn-block">
                            Clock
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
