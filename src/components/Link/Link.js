import React from 'react';
import {Link} from 'react-router-dom';
import './Link.scss';

const ArticlePortalLink = ({name, url, icon}) => (
    <Link id="article-portal-link"
          className="article-portal-link"
          to={url}>
        {icon && <i className={icon}/>} {name}
    </Link>

);

export default ArticlePortalLink;

