import React, { Component } from 'react';
import ArticleCard from "./ArticleCard";
import * as api from "../api"
import { Link } from '@reach/router'
import ErrorPage from "./ErrorPage"

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    topic: null,
    author: null,
    order: "desc",
    topics: [],
    err: null
  }

  render() {
    const { articles, isLoading, err } = this.state
    if (isLoading) {
      return <p>Loading...</p>
    } else if (!err) {
      return (
        <div>
          <label>Sort by:
            <select name="sort_by" id="sort_by_Select" value={this.state.sort_by} onChange={this.handleChange}>
              <option value="created_at">Date posted</option>
              <option value="votes">Votes</option>
              <option value="comment_count">Number of comments</option>
              <option value="author">Author</option>
              <option value="topic">Topic</option>
            </select>
          </label>
          <ul>Topic:
            <li key="allTopics"><Link to={"/articles"}>All topics</Link></li>
            {this.state.topics.map(topic => {
              return <li key={`${topic.slug}`}><Link to={`/articles/topics/${topic.slug}`}>{`${topic.slug}`}</Link></li>
            })}
          </ul>
          <ul>
            {articles.map(article => {
              return <ArticleCard article={article} key={article.article_id} />
            })}
          </ul>
        </div>
      )
    } else {
      return <ErrorPage err={err} />
    }
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState(currentState => {
      return { articles: currentState.articles, sort_by: `${value}` }
    });
  }

  componentDidMount() {
    const { sort_by, author, order } = this.state
    const { topic } = this.props
    this.fetchArticles({ sort_by, topic, author, order });
    this.fetchTopics();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, author, order } = this.state;
    const { topic } = this.props;

    if (prevState.sort_by !== sort_by || prevState.author !== author || prevState.order !== order) {
      this.fetchArticles({ sort_by, topic, author, order })
    } else if (prevProps.topic !== topic) {
      this.fetchArticles({ sort_by, topic, author, order })
    }
  }

  fetchTopics = () => {
    return api.getTopics().then(topics => {
      this.setState({ topics: topics })
    })
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
