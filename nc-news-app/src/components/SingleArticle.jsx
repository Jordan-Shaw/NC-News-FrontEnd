import React, { Component } from 'react'
import * as api from "../api"


export default class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  }

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>
    } else {
      return (
        <div className="singleArticle">
          <h2 className="articleTitle">{article.title}</h2>
          <p className="articleBody">{article.body}</p>
          <p className="articleTopic">Topic: {article.topic}</p>
          <p className="articleAuthor">Author: {article.author}</p>
          <p className="authorVotes">Votes: {article.votes}</p>
        </div>
      )
    }
  }

  componentDidMount() {
    this.fetchArticle(this.props.article_id);
  }

  fetchArticle = (article_id) => {
    return api.getArticle(article_id).then(article => {
      this.setState({ article: article, isLoading: false })
    })
  }
}
