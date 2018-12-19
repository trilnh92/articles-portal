import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row} from 'reactstrap';

const RecentPosts = () => (
    <section className="footer__recent-posts footer__block">
        <div className="footer__block__container">
            <h4 className="footer__block-title"> Recent Posts </h4>
            <Row>
                <Col xs="12" className="footer__recent-posts__article">
                    <div className="footer__recent-posts__article__title">
                        <Link to="/articles/9" className="footer__recent-posts__article__title-link">
                            Li lingues differe solmen in li grammatica
                        </Link>
                    </div>
                    <div className="footer__recent-posts__article__published-date">
                        <span className="footer__recent-posts__article__published-date-month">
                            29 October,
                        </span>
                        <span className="footer__recent-posts__article__published-date-days">
                           2018
                        </span>
                    </div>
                </Col>
                <Col xs="12" className="footer__recent-posts__article">
                    <div className="footer__recent-posts__article__title">
                        <Link to="/articles/10" className="footer__recent-posts__article__title-link">
                            Li nov lingua franca va esser plu simplic
                        </Link>
                    </div>
                    <div className="footer__recent-posts__article__published-date">
                        <span className="footer__recent-posts__article__published-date-month">
                           30 October,
                        </span>
                        <span className="footer__recent-posts__article__published-date-days">
                           2018
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    </section>
);

export default RecentPosts;
