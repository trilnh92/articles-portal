import React, {Component} from 'react';
import {observer} from "mobx-react";
import {Link} from 'react-router-dom'
import ArticleImage from "../ArticleImage/ArticleImage";
import "./ArticlePanel.scss";

@observer
class ArticlePanel extends Component {

    render() {
        const {article} = this.props;
        return (
            <section className="article">
                <div className="article__container">
                    <div className="article-image">
                        <Link to={`/articles/${article.id}`}>
                            <ArticleImage imgSource={article.coverImg} alt={`article-cover-${article.id}`}/>
                        </Link>
                    </div>
                    <span className="article-published-date">{article.publishedDate}</span>
                    <Link to={`/articles/${article.id}`} className="article-title">
                        {article.name}
                    </Link>
                    <p className="article-short-description">
                        {article.shortDescription}
                    </p>
                    <Link to={`/articles/${article.id}`} className="article-link">
                        read more
                    </Link>
                </div>
            </section>
        );
    }
}

export default ArticlePanel;

