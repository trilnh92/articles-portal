import React, {Suspense} from 'react';
import Carousel from "nuka-carousel";
import './ArticleCovers.scss';

const Loading = (
    <div
        style={{ backgroundColor: '#e6e6e6', height: 300, width: `100%` }}
    />
);

const sliderOptions = {
    transitionMode: 'scroll',
    wrapAround: true,
    autoplay: true,
    autoplayInterval: 7000
};

const ArticleCovers = ({images}) => (
    <div className="article-detail__covers">
        <Carousel transitionMode={sliderOptions.transitionMode}
                  wrapAround={sliderOptions.wrapAround}
                  autoplay={sliderOptions.autoplay}
                  autoplayInterval={sliderOptions.autoplayInterval}>
            {
                images.map((item) => (
                    <Suspense key={item.id} fallback={Loading}>
                        <img src={item.value} alt={`article-cover-${item.id}`}/>
                    </Suspense>
                ))
            }
        </Carousel>
    </div>
);


export default ArticleCovers;
