import React, { Component } from 'react'
import * as api from '../../api'
import ArticleList from '../articles/ArticleList';

export default class UserPage extends Component {
  state = {
    avatar_url: null,
    name: null,
    articles: []
  }

  render() {
    console.log(this.state.articles);
    const { avatar_url, name } = this.state
    const {username} = this.props;
    return (
      <div className="UserPage">
        <div className="userBg">
          <div className="caption3">
            <h2 className="username">{name}</h2>
            <img src={`${avatar_url}`} alt={`${name}'s avatar`} className="userProfilePic"/>
          <p className="UserInfo">@{username}</p>
          </div>
        </div>
        <ArticleList author={username}/>
      </div>

    )
  }

  componentDidMount() {
    const { username } = this.props
    this.fetchUser(username)
  }

  fetchUser = (username) => {
    return api.getUser(username).then(response => {
      this.setState({ avatar_url: response.avatar_url, name: response.name, articles: response.articles })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { username } = this.props;
    if (this.state.name !== prevState.name) {
      return api.getArticles("created_at", undefined, username, "desc").then((articles) => {
        this.setState({ articles })
      })
    }
  }

}
