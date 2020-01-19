import React, { Component } from 'react'
import * as api from "../../api"
import CommentList from '../comments/CommentList'
import ErrorPage from '../general/ErrorPage';
import Voter from '../general/Voter';
import {Link} from '@reach/router'


export default class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  }


  render() {
    const { article, isLoading, err } = this.state;
    const { title, body, topic, author, votes, article_id } = article;
    const { username } = this.props;

    if (isLoading) {
      return <p>Loading...</p>
    } else if (!err) {
      return (
        <div className="ArticlePage">
          <div className="parallax4">
            <div className="articleBox">
              <h2 className="articleTitle">{title}</h2>
            </div>
          <div className="articleBox2">
            <p className="articleBody">{body}</p>
            <p className="articleTopic">Topic: {topic}</p>
              <p className="articleAuthor"><Link to={`/users/${author}`}>Author: {author}</Link></p>
            <Voter className="singleArticleVoter" votes={votes} article_id={article_id} />
          </div>
            <div className="articleBox3">
              <h2 className="articleTitle">Comments</h2>
            <h2 className="articleTitle">↓</h2>
            </div>
        </div>
            <CommentList article_id={article.article_id} username={username} className="commentList"/>
        </div>
      )
    } else {
      return <ErrorPage err={err} />
    }
  }

  componentDidMount() {
    const { article_id } = this.props
    this.fetchArticle(article_id);
  }

  fetchArticle = (article_id) => {
    return api.getArticle(article_id).then(article => {
      this.setState({ article: article, isLoading: false })
    }).catch(err => {
      const { status } = err.response;
      const { msg } = err.response.data
      this.setState({ err: { status, msg }, isLoading: false })
    })
  }
}
