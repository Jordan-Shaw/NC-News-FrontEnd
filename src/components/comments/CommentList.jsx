import React, { Component } from 'react'
import * as api from "../../api"
import CommentCard from './CommentCard'
import AddComment from './AddComment'

export default class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true
  }

  render() {
    const { comments, isLoading } = this.state;
    const { username, article_id } = this.props

    if (isLoading) {
      return <p>Comments loading...</p>
    } else {
      return (
        <div>
          <h3>Comments</h3>
          <AddComment handleCommentSubmission={this.handleCommentSubmission} username={username} article_id={article_id} />
          <ul>
            {comments.map(comment => {
              return <CommentCard comment={comment} key={comment.comment_id} username={username} handleCommentDeletion={this.handleCommentDeletion} />
            })}
          </ul>
        </div>
      )
    }
  }

  handleCommentSubmission = (username, body, article_id) => {
    api.postComment(username, body, article_id).then(newComment => {
      this.setState(currentState => {
        return currentState.comments.unshift(newComment);
      })
    })
  }

  handleCommentDeletion = (comment_id, deletedComment) => {
    api.deleteComment(comment_id).then((response) => {
      this.setState(currentState => {
        const commentIndex = currentState.comments.findIndex(comment => { return comment === deletedComment });
        return currentState.comments.splice(commentIndex, 1, response)
      });
    });
  };

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
