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
        <main>
          <h2>Articles</h2>
          <h3>Here are all of our articles. Use the buttons below to see articles relating to specific topics.</h3>
          <ul>
            {articles.map(article => {
              return <ArticleCard article={article} key={article.article_id} />
            })}
          </ul>
        </main>
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
