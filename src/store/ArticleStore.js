import {action, computed, observable, toJS} from "mobx";
import ArticlesData from '../data/articles';
import CategoriesData from '../data/categories';

class ArticleStore {
    @observable articles = ArticlesData;

    // TODO: split store
    @observable categories = CategoriesData;

    @observable categoryId = ''; // default value of category id

    @computed get filteredArticles() {
        return this.categoryId > 0 ? this.articles.filter(article => article.categoryId === this.categoryId) : this.articles;
    }

    @action
    filteredFeaturedArticles = () =>  toJS(this.articles.filter(article => article.isFeaturedArticle));

    @action
    setCategoryId = categoryId => {this.categoryId = categoryId};

    @action
    getArticleById = articleId => toJS(this.articles.find(article => article.id === articleId));

    // TODO: split store
    @action
    createCategoriesData = () => {
        const defaultValue = {value: 0, label: 'All Categories'};
        if (this.categories[0].label !== defaultValue.label) {
            this.categories.unshift(defaultValue)
        }
        return toJS(this.categories);
    };

    // TODO: split store
    @action
    displayCategoryName = (categoryId) => {
        const match = this.categories.find(category => category.value === categoryId);
        return match ? toJS(match.label) : 'Not Found';
    };
}

const articlesStore = new ArticleStore();

export default articlesStore;
