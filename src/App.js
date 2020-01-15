import React, { Component } from 'react'
import './App.css';
import { Router } from '@reach/router';
import Header from "./components/general/Header"
import Homepage from "./components/general/Homepage"
import SingleArticle from "./components/articles/SingleArticle"
import ArticlePage from "./components/articles/ArticlePage"
import TopicsPage from "./components/topics/TopicsPage"
import { stack as Menu } from 'react-burger-menu'
import { Link } from '@reach/router'
import ErrorPage from './components/general/ErrorPage';


export default class App extends Component {
  state = {
    username: 'tickle122'
  }
  render() {
    const { username } = this.state

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
            <ArticlePage path="/articles" username={username} />
            <TopicsPage path="/articles/topics/:topic" />
            <SingleArticle path="/articles/:article_id" username={username} />
            <ErrorPage default />
          </Router>
        </div>
      </div>
    )
  }
}

