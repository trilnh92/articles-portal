import React, {Component} from 'react';
import ArticlePortalLink from "../../components/Link/Link";
import ArticleCovers from './ArticleCovers';
import "./ArticleDetail.scss";
import store from '../../store/ArticleStore';

class ArticleDetail extends Component {
    state = {
        article: '',
        linkOptions: {
            name: 'Back to Articles',
            url: '/articles',
            icon: 'fas fa-angle-left'
        }
    };

    componentDidMount() {
        const {match: {params: {id}}} = this.props;
        const article = store.getArticleById(parseInt(id, 10));

        document.title = `${article.name} | Articles Portal`;

        // TODO: destructing setState https://github.com/mweststrate/immer
        this.setState({article});
        window.scrollTo(0, 0);
    }

    render() {
        const {history} = this.props;
        const {article, linkOptions} = this.state;
        return (
            <section className="article-detail">
                <div className="article-detail__container">
                    <span className="article-detail__category">
                        {store.displayCategoryName(article.categoryId)}
                    </span>
                    <h1 className="article-detail__name">
                        {article.name}
                    </h1>
                    <div className="article-detail__extra">
                        <span className="article-detail__author">
                            {article.author}
                        </span>
                        <span className="article-detail__published-date">
                            {article.publishedDate}
                        </span>
                    </div>
                    {
                        article.images &&
                        <ArticleCovers images={article.images}/>
                    }

                    <div className="article-detail__content"
                        /* eslint-disable react/no-danger */ dangerouslySetInnerHTML={{__html: article.content}} />
                    <div className="article-detail__navigate">
                        <ArticlePortalLink history={history}
                                           name={linkOptions.name}
                                           url={linkOptions.url}
                                           icon={linkOptions.icon}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default ArticleDetail;
