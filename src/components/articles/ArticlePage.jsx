import React, { Component } from 'react'
import ArticleList from './ArticleList'
import { Link } from '@reach/router'
import * as api from "../../api"
import Konami from 'react-konami-code'


export default class ArticlePage extends Component {
  state = {
    sort_by: "created_at",
    topic: null,
    author: null,
    order: "desc",
    topics: [],
    konami: false
  }

  render() {
      return (
        <div className="articlePageWrapper">
          <div className={this.state.konami? "bgimg-doggo" : "bgimg-1"} >
            <Konami action={this.easterEgg}></Konami>
            <div className="caption1">
              <span className="border">↓ARTICLES↓</span>
            </div>
          </div>
          <div className="articlePageFlex">
           <div className="h3Box">
              <h3 className="h3Border">Here are all of our articles. Use the buttons below to see articles relating to specific topics.
             </h3>
            </div>
            <div className="sortByWrapper">
              <label>Sort by:
              <select name="sort_by" id="sort_by_Select" value={this.state.sort_by} onChange={this.handleChange} className="select-css">
                  <option value="created_at">Date posted</option>
                  <option value="votes">Votes</option>
                  <option value="comment_count">Number of comments</option>
                  <option value="author">Author</option>
                  <option value="topic">Topic</option>
                </select>
              </label>
            </div>
            <ul className="listOfTopics"> {/* <--- styling of inner container on outer container evernt */}
              <li key="allTopics" className="topics"><Link to={`/articles/`} className="topics">{"<"} all topics {'/>'}</ Link></li>
            {this.state.topics.map(topic => {
              return <li key={`${topic.slug}`} className="topics"><Link to={`/articles/topics/${topic.slug}`} className="topics">{`< ${topic.slug} />`}</Link></li>
            })}
            </ul>
          <ArticleList className="ArticleListWrapper" topic={this.state.topic} sort_by={this.state.sort_by} author={this.state.author} />
          </div>
          </div>
      )
  }

  componentDidMount() {
    this.fetchTopics();
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState(currentState => {
      return { articles: currentState.articles, sort_by: `${value}` }
    });
  }

  fetchTopics = () => {
    return api.getTopics().then(topics => {
      this.setState({ topics: topics })
    })
  }

  easterEgg = () => {
    const selected = window.confirm("Get ready for cuteness")
    if (selected) {
      this.setState({ konami: true })
    }
  }
}
