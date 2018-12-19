import React, {Component} from 'react';
import {observer} from "mobx-react";
import ArticlesFilter from "./ArticlesFilter";
import ArticlesList from "./ArticlesList";
import articlesStore from '../../store/ArticleStore';
import "./Articles.scss";

@observer
class Articles extends Component {

    componentDidMount() {
        document.title = "Articles | Articles Portal";
    }

    render() {
        const {history, location} = this.props;
        return (
            <section className="articles">
                <div className="articles__container">
                    <div className="articles__heading">
                        <h1 className="articles__heading-title"> Articles.
                        </h1>
                    </div>
                    <ArticlesFilter
                        store={articlesStore}/>
                    <ArticlesList
                        store={articlesStore}
                        history={history}
                        location={location}/>
                </div>
            </section>
        );
    }
}

export default Articles;

