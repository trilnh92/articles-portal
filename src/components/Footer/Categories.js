import React from 'react';
import {Link} from "react-router-dom";

const Categories = () => (
    <section className="footer__categories footer__block">
        <div className="footer__block__container">
            <h4 className="footer__block-title"> Categories </h4>
            <nav className="footer__categories__nav">
                <ul className="footer__categories__menu">
                    <li className="footer__categories__menu__item">
                        <Link to="/articles">
                            Lifestyle
                        </Link>
                    </li>
                    <li className="footer__categories__menu__item">
                        <Link to="/articles">
                            Journey
                        </Link>
                    </li>
                    <li className="footer__categories__menu__item">
                        <Link to="/articles">
                            Inspiration
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
);

export default Categories;
