import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './ArticlePanel.scss';

@observer
class ArticlePanel extends Component {
    render() {
        const { article } = this.props;
        return (
            <section className="article">
                <div className="article__container">
                    <div className="article-image">
                        {
                            // TODO: lazy loading for image
                        }
                        <Link to={`/articles/${article.id}`}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/${
                                    article.coverImg
                                }`}
                                alt={article.coverImg}
                            />
                        </Link>
                    </div>
                    <span className="article-published-date">
                        {article.publishedDate}
                    </span>
                    <Link
                        to={`/articles/${article.id}`}
                        className="article-title"
                    >
                        {article.name}
                    </Link>
                    <p className="article-short-description">
                        {article.shortDescription}
                    </p>
                    <Link
                        to={`/articles/${article.id}`}
                        className="article-link"
                    >
                        read more
                    </Link>
                </div>
            </section>
        );
    }
}

export default ArticlePanel;
