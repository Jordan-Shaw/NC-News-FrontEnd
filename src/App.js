import React, { Component } from 'react'
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


export default class App extends Component {
  state = {
    username: 'Miscellaneous_Missingno'
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


// function App() {
//   return (
//     <div className="App">
//       <Menu>
//         <Link to="/" className="navItem">Home</Link>
//         <Link to="/articles" className="navItem">Articles</Link>
//         <Link to={`/users/${username}`} className="navItem">Profile</Link>
//       </Menu>
//       <div id="page-wrap">
//         <Header />
//         <Router className="pageBody">
//           <Homepage path="/" />
//           <ArticlePage path="/articles" />
//           <TopicsPage path="/articles/topics/:topic" />
//           <SingleArticle path="/articles/:article_id" />
//           <ErrorPage default />
//         </Router>
//       </div>
//     </div>
//   );
// }

