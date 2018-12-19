import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Col, Row} from 'reactstrap';
import {toJS} from 'mobx';
import ArticlePanel from "../../components/ArticlePanel/ArticlePanel";

@observer
class ArticlesList extends Component {

    render() {
        const { store, history, location } = this.props;
        const articles = toJS(store.filteredArticles);
        return (
            <section className="articles__list">
                <Row>
                    {
                        articles.map(article => (
                            <Col xs="12" sm="6" md="4" lg="3" key={article.id}>
                                <ArticlePanel article={article}
                                              history={history}
                                              location={location}/>
                            </Col>
                        ))
                    }
                </Row>
            </section>
        );
    }
};

export default ArticlesList;
