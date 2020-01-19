import React, { Component } from 'react'
import Voter from '../general/Voter'
import CommentDeleter from './CommentDeleter'
import * as api from '../../api'
import {Link} from '@reach/router'


export default class CommentCard extends Component {
  state = {
    deletedComment: false
  }

  render() {
    const { username, comment } = this.props
    const { author, body, created_at, votes, comment_id } = comment
    const { deletedComment } = this.state

    if (username === author && !deletedComment) {
      return (
        <li className="commentCard">
          <div className="loggedInUser">
          <p className="commentAuthor">Author: <Link to={`/users/${author}`} className="commentAuthor">{author}</Link>, that's you! <span role="img" aria-label="party-hat-emoji">🥳</span></p>
          <CommentDeleter comment_id={comment_id} comment={comment} handleCommentDeletion={this.handleCommentDeletion} />
          </div>
          <p className="commentBody">{body}</p>
          <p className="commentDate">{created_at}</p>
          <Voter votes={votes} comment_id={comment_id} className="articleCardVoter"/>
        </li>
      )
    } else if (deletedComment) {
      return (<li className="deletedCard" key={`${comment.comment_id}`}>
        Comment deleted...
      </li>)
    } else {
      return (
        <li className="commentCard">
          <p className="commentAuthor">Author: <Link to={`/users/${author}`} className="commentAuthor">{author}</Link></p>
          <p className="commentBody">{body}</p>
          <p className="commentDate">{created_at}</p>
          <Voter votes={votes} comment_id={comment_id} />
        </li>
      )
    }
  }

  handleCommentDeletion = (comment_id, deletedComment) => {
    api.deleteComment(comment_id).then(() => {
      this.setState({ deletedComment: true });
    });
  };

}



