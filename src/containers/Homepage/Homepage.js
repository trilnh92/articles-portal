import React, {Component} from 'react';
import "./Homepage.scss";
import FeaturedArticles from "./FeaturedArticles";
import HighlightedText from "./HighlightedText";

class Homepage extends Component {
    componentDidMount() {
        document.title = "Homepage | Articles Portal";
    }

    render() {
        return (
            <section className="homepage">
                <div className="homepage__container">
                    <HighlightedText/>
                    <FeaturedArticles/>
                </div>
            </section>
        );
    }
}

export default Homepage;

