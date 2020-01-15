import React from 'react'
import Voter from './Voter'
import CommentDeleter from './CommentDeleter'


export default function CommentCard({ username, comment, handleCommentDeletion }) {
  const { author, body, created_at, votes, comment_id } = comment

  if (username === author) {
    return (
      <li className="commentCard">
        <p className="commentAuthor">Author: {author}, that's you! <span role="img" aria-label="party-hat-emoji">🥳</span></p>
        <CommentDeleter comment_id={comment_id} comment={comment} handleCommentDeletion={handleCommentDeletion} />
        <p className="commentBody">{body}</p>
        <p className="commentDate">{created_at}</p>
        <Voter votes={votes} comment_id={comment_id} />
      </li>
    )
  } else if (typeof (comment) === 'string') {
    return (<li className="deletedCard">
      {comment}
    </li>)
  } else {
    return (
      <li className="commentCard">
        <p className="commentAuthor">Author: {author}</p>
        <p className="commentBody">{body}</p>
        <p className="commentDate">{created_at}</p>
        <Voter votes={votes} comment_id={comment_id} />
      </li>
    )
  }
}
