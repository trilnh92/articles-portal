import React from 'react';
import {Col, Row} from 'reactstrap';
import './FeaturedArticles.scss';
import store from '../../store/ArticleStore';
import ArticlePanel from "../../components/ArticlePanel/ArticlePanel";

const FeaturedArticles = () => (
    <div className="homepage__featured-articles">
        <div className="homepage__featured-articles__container">
            <h2 className="homepage__featured-articles-title">
                Featured Articles
            </h2>
            <Row className="homepage__featured-articles__items">
                {
                    store.filteredFeaturedArticles().map(article =>
                        <Col key={article.id} xs="12" sm="6" md="4" lg="3">
                            <ArticlePanel article={article}/>
                        </Col>
                    )
                }
            </Row>
        </div>
    </div>
);

export default FeaturedArticles;
