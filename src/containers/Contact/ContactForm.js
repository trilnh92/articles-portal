import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

const handleContactForm = (e) => e.preventDefault();

const ContactForm = () => (
    <section className="contact__form">
        <Form>
            <FormGroup>
                <Label for="name">Name: </Label>
                <Input type="text" name="name"/>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email: </Label>
                <Input type="email" name="email"/>
            </FormGroup>
            <FormGroup>
                <Label for="subject">Subject: </Label>
                <Input type="text" name="subject"/>
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone: </Label>
                <Input type="text" name="phone"/>
            </FormGroup>
            <FormGroup>
                <Label for="message">Message:</Label>
                <Input type="textarea" name="message" rows="5"/>
            </FormGroup>
            <Button className="contact__form-button" onClick={(e) => handleContactForm(e)}>Submit</Button>
        </Form>
    </section>
);

export default ContactForm;
