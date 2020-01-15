import React, { Component } from 'react'
import * as api from "../api"
import CommentList from './CommentList'
import ErrorPage from './ErrorPage';
import Voter from './Voter';


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
        <div>
          <div className="singleArticle">
            <h2 className="articleTitle">{title}</h2>
            <p className="articleBody">{body}</p>
            <p className="articleTopic">Topic: {topic}</p>
            <p className="articleAuthor">Author: {author}</p>
            <Voter className="singleArticleVoter" votes={votes} article_id={article_id} />
          </div>
          <div className="commentList">
            <CommentList article_id={article.article_id} username={username} />
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
