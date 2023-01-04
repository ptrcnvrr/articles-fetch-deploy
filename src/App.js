import React, { useEffect, useState } from 'react';
import './App.css';

import ArticleList from './Components/ArticleList';

function App() {
  const [Articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleItems();
  }, []);

  const fetchArticleItems = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setArticles(json);
        setLoading(false);
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  };

  return (
    <div>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Article List</h1>
        </div>
      </div>
      <div className="main-content">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ArticleList data={Articles} />
        )}
      </div>
    </div>
  );
}

export default App;
