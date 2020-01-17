import React, { Component } from 'react';
import ArticleCard from "./ArticleCard";
import * as api from "../../api"
// import { Link } from '@reach/router'
import ErrorPage from "../general/ErrorPage"

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  }

  render() {
    const { articles, isLoading, err } = this.state
    if (isLoading) {
      return <p>Loading...</p>
    } else if (!err) {
      return (
          <ul className="listOfArticles">
            {articles.map(article => {
              return <ArticleCard article={article} key={article.article_id} className="articles"/>
            })}
          </ul>
      )
    } else {
      return <ErrorPage err={err} />
    }
  }

  componentDidMount() {
    const { order } = this.state
    const { topic, author, sort_by } = this.props
    this.fetchArticles({ sort_by, topic, author, order });
  }

  componentDidUpdate(prevProps, prevState) {
    const { order } = this.state;
    const { topic, sort_by, author } = this.props;

    if (prevProps.sort_by !== sort_by || prevProps.author !== author || prevState.order !== order) {
      this.fetchArticles({ sort_by, topic, author, order })
    } else if (prevProps.topic !== topic) {
      this.fetchArticles({ sort_by, topic, author, order })
    }
  }

  fetchArticles = (stuff) => {
    const { sort_by, topic, author, order } = stuff

    return api.getArticles(sort_by, topic, author, order).then(articles => {
      this.setState({ articles: articles, isLoading: false });
    }).catch(err => {
      const { status } = err.response;
      const { msg } = err.response.data
      this.setState({ err: { status, msg }, isLoading: false })
    })
  }
}
