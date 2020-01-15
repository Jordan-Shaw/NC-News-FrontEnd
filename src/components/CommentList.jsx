import React, { Component } from 'react'
import * as api from "../api"
import CommentCard from './CommentCard'

export default class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  }

  render() {
    const { comments, isLoading } = this.state;

    if (isLoading) {
      return <p>Comments loading...</p>
    } else {
      return (
        <div>
          <h3>Comments</h3>
          <ul>
            {comments.map(comment => {
              return <CommentCard comment={comment} key={comment.comment_id} />
            })}
          </ul>
        </div>
      )
    }
  }

  addComment = () => { }

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchComments(article_id);
  }

  fetchComments = (article_id) => {
    return api.getComments(article_id).then(comments => {
      this.setState({ comments: comments, isLoading: false })
    })
  }
}
