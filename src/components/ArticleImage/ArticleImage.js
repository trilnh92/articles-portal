import React from 'react';
import ProgressiveImage from 'react-progressive-image';

const color = '#e6e6e6';

const placeholder = (
    <div
        style={{
            backgroundColor: color,
            height: 300,
            width: `100%`,
            filter: `blur(2px)`
        }}
    />
);

const ArticleImage = ({ imgSource, alt }) => (
    <ProgressiveImage src={imgSource} placeholder="">
        {(src, loading) =>
            loading ? (
                placeholder
            ) : (
                <img
                    src={`${process.env.PUBLIC_URL}/images/${imgSource}`}
                    alt={alt}
                />
            )
        }
    </ProgressiveImage>
);

export default ArticleImage;
