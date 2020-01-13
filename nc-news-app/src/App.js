import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import ArticleList from "./components/ArticleList"
import SingleArticle from "./components/SingleArticle"


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Homepage path="/" />
        <ArticleList path="/articles" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
