import React from 'react';
import { Col, Row } from 'reactstrap';

const CopyRight = () => (
    <Row className="footer__copyright">
        <Col xs="12" className="footer__copyright__border" />
        <Col xs="12" className="footer__copyright__container">
            <span>
                Made by{' '}
                <a
                    href="https://trilnh92.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tri Le Nguyen Huu
                </a>
            </span>
            <span> on December 2018.</span>
        </Col>
    </Row>
);

export default CopyRight;
