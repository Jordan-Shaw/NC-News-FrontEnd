import React, { Component } from 'react'
import * as api from "../api"
import CommentList from './CommentList'
import ErrorPage from './ErrorPage';


export default class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  }

  render() {
    const { article, isLoading, err } = this.state;
    if (isLoading) {
      return <p>Loading...</p>
    } else if (!err) {
      return (
        <div>
          <div className="singleArticle">
            <h2 className="articleTitle">{article.title}</h2>
            <p className="articleBody">{article.body}</p>
            <p className="articleTopic">Topic: {article.topic}</p>
            <p className="articleAuthor">Author: {article.author}</p>
            <p className="authorVotes">Votes: {article.votes}</p>
          </div>
          <div className="commentList">
            <CommentList article_id={article.article_id} />
          </div>
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
