import React, { Component } from 'react';
import ArticleCard from "./ArticleCard";
import * as api from "../../api"
// import { Link } from '@reach/router'
import ErrorPage from "../general/ErrorPage"

export default class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    // sort_by: "created_at",
    // topic: null,
    // author: null,
    // order: "desc",
    // topics: [],
    err: null
  }

  render() {
    const { articles, isLoading, err } = this.state
    if (isLoading) {
      return <p>Loading...</p>
    } else if (!err) {
      return (
        <div className="bgimg-2">
          {/* <div className="sortByWrapper">
          <label>Sort by:
            <select name="sort_by" id="sort_by_Select" value={this.state.sort_by} onChange={this.handleChange}>
              <option value="created_at">Date posted</option>
              <option value="votes">Votes</option>
              <option value="comment_count">Number of comments</option>
              <option value="author">Author</option>
              <option value="topic">Topic</option>
            </select>
          </label>
          </div>
          <ul className="listOfTopics">
            {this.state.topics.map(topic => {
              return <li key={`${topic.slug}`} className="topics"><Link to={`/articles/topics/${topic.slug}`} className="topics">{`< ${topic.slug} />`}</Link></li>
          })}
          </ul> */}
          <ul className="listOfArticles">
            {articles.map(article => {
              return <ArticleCard article={article} key={article.article_id} className="articles"/>
            })}
          </ul>
        </div>
      )
    } else {
      return <ErrorPage err={err} />
    }
  }

  // handleChange = (event) => {
  //   const { value } = event.target
  //   this.setState(currentState => {
  //     return { articles: currentState.articles, sort_by: `${value}` }
  //   });
  // }

  componentDidMount() {
    const { order } = this.state
    const { topic, author, sort_by } = this.props
    this.fetchArticles({ sort_by, topic, author, order });
    // this.fetchTopics();
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

  // fetchTopics = () => {
  //   return api.getTopics().then(topics => {
  //     this.setState({ topics: topics })
  //   })
  // }

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
