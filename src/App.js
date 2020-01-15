import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import SingleArticle from "./components/SingleArticle"
import ArticlePage from "./components/ArticlePage"
import TopicsPage from "./components/TopicsPage"
import { stack as Menu } from 'react-burger-menu'
import { Link } from '@reach/router'
import ErrorPage from './components/ErrorPage';



function App(username) {
  return (
    <div className="App">
      <Menu>
        <Link to="/" className="navItem">Home</Link>
        <Link to="/articles" className="navItem">Articles</Link>
        <Link to={`/users/${username}`} className="navItem">Profile</Link>
      </Menu>
      <div id="page-wrap">
        <Header />
        <Router className="pageBody">
          <Homepage path="/" />
          <ArticlePage path="/articles" />
          <TopicsPage path="/articles/topics/:topic" />
          <SingleArticle path="/articles/:article_id" />
          <ErrorPage default />
        </Router>
      </div>
    </div>
  );
}

export default App;
