import React, { Component } from 'react'
import * as api from "../api"

export default class Voter extends Component {
  state = {
    thumbed: 0
  }

  render() {
    const { thumbed } = this.state
    let { votes, article_id, comment_id } = this.props
    votes += thumbed;

    return (
      <div>
        <button className="thumbsUp" onClick={() => {
          this.handleThumbs(1, article_id, comment_id)
        }} disabled={thumbed === 1}>
          <span role="img" aria-label="Thumbs Up">
            👍
          </span>
        </button>
        <p>
          Votes: {votes}
        </p>
        <button className="thumbsDown" onClick={() => {
          this.handleThumbs(-1, article_id, comment_id)
        }} disabled={thumbed === -1}>
          <span role="img" aria-label="Thumbs Down">
            👎
          </span>
        </button>
      </div>
    )
  }

  handleThumbs = (num, article_id, comment_id) => {
    if (article_id) {
      this.setState(currentState => {
        return { thumbed: currentState.thumbed + num }
      })
      api.handleVote(article_id, "article", num)
    } else if (comment_id) {
      this.setState(currentState => {
        return { thumbed: currentState.thumbed + num }
      })
      api.handleVote(comment_id, "comment", num)
    }
  }
}
