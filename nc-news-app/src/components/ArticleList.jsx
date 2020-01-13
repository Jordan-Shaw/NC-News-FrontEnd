import React, { Component } from 'react';
import ArticleCard from "./ArticleCard";
import * as api from "../api"

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  }

  render() {
    const { articles, isLoading } = this.state
    if (isLoading) {
      return <p>Loading...</p>
    } else {
      return (
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />
          })}
        </ul>
      )
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.fetchArticles();
  }

  fetchArticles = () => {
    return api.getArticles(this.props).then(articles => {
      this.setState({ articles: articles, isLoading: false });
    })
  }
}
