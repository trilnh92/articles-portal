import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';
import ContactMap from './ContactMap';
import GOOGLE_MAP_KEY from '../../services/Key';
import "./Contact.scss";

class Contact extends Component {
    componentDidMount() {
        document.title = "Contact | Articles Portal";
    }

    render() {
        return (
            <section className="contact">
                <div className="contact__container">
                    <div className="contact__heading">
                        <h1 className="contact__heading-title"> Contact.
                        </h1>
                    </div>
                </div>
                <ContactMap isMarkerShown
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&?v=3.exp&libraries=geometry,drawing,places`}
                            loadingElement={<div style={{height: `100%`}}/>}
                            containerElement={<div style={{height: `400px`}}/>}
                            mapElement={<div style={{height: `100%`}}/>}/>
                <div className="contact__container">
                    <Row>
                        <Col xs="12" md="8">
                            <ContactForm/>
                        </Col>
                        <Col xs="12" md="4">
                            <ContactInformation/>
                        </Col>
                    </Row>
                </div>
            </section>
        );
    }
}

export default Contact;

