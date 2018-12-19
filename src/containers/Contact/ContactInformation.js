import React from 'react';

const ContactInformation = () => (
    <section className="contact__information">
        <div className="contact__information__title">
            <h3>Articles Portal</h3>
        </div>
        <div className="contact__information__address-info">
            <h5>Address:</h5>
            <p>Ben Thanh Market, Le Loi Street</p>
            <p>Ben Thanh Ward, District 1</p>
            <p>Ho Chi Minh City</p>
            <p>Vietnam</p>
        </div>
        <div className="contact__information__email-info">
            <h5>Email Us:</h5>
            <p>Email: <a className="contact__information__email-info-link"
                         href="mailto:enquiries@articles-portal.com">enquiries@articles-portal.com</a></p>
        </div>
        <div className="contact__information__contact-info">
            <h5>Call Us:</h5>
            <p>Phone: (+84) 283 794 586</p>
        </div>
    </section>
);

export default ContactInformation;
