import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Form5 = () => {
    return (
        <Container className="mt-5">
            <Form noValidate>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" placeholder="" />
                    <Form.Control.Feedback type="invalid">
                        Please enter your first name
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" placeholder="" />
                    <Form.Control.Feedback type="invalid">
                        Please enter your last name
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="" />
                    <Form.Control.Feedback type="invalid">
                        Please enter your email
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="" />
                    <Form.Control.Feedback type="invalid">
                        Please enter your phone
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Register</Button>
            </Form>
        </Container>
    );
};

export default Form5;
