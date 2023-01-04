import React from 'react';

import Article from './Article';
import NoArticle from './NoArticle';

const ArticleList = ({ data }) => (
  <ul className="article-list">
    {data.length > 0 ? (
      data.map((article) => (
          <Article
            title={article.title}
            key={`article-key-${article.id}`}
          />
        )
      )
    ) : (
      <NoArticle />
    )}
  </ul>
);

export default ArticleList;
