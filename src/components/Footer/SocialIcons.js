import React from 'react';
import Facebook from "../Icons/Facebook";
import Twitter from "../Icons/Twitter";
import Pinterest from "../Icons/Pinterest";
import Instagram from "../Icons/Instagram";
import Youtube from "../Icons/Youtube";

const SocialIcons = () => (
    <section className="footer__social footer__block">
        <div className="footer__block__container">
            <h4 className="footer__block-title">Follow Us</h4>
            <ul className="footer__social__list">
                <li className="footer__social__list__item">
                    <Facebook/>
                </li>
                <li className="footer__social__list__item">
                    <Twitter/>
                </li>
                <li className="footer__social__list__item">
                    <Pinterest/>
                </li>
                <li className="footer__social__list__item">
                    <Instagram/>
                </li>
                <li className="footer__social__list__item">
                    <Youtube/>
                </li>
            </ul>
        </div>
    </section>
);


export default SocialIcons;
