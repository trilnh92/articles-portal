import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import RecentPosts from "./RecentPosts";
import Information from "./Information";
import Categories from "./Categories";
import SocialIcons from "./SocialIcons";
import CopyRight from "./CopyRight";
import "./Footer.scss";

const Footer = () => (
    <footer className="footer">
        <Container className="footer__container">
            <Row>
                <Col xs="12" sm="6" xl="4">
                    <Information/>
                </Col>
                <Col xs="12" sm="6" xl="2">
                    <Categories/>
                </Col>
                <Col xs="12" sm="6" xl="4">
                    <RecentPosts/>
                </Col>
                <Col xs="12" sm="6" xl="2">
                    <SocialIcons/>
                </Col>
            </Row>
        </Container>
        <CopyRight/>
    </footer>
);


export default Footer;

