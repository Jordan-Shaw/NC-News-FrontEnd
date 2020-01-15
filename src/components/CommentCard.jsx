import React from 'react'
import Voter from './Voter'

export default function CommentCard(props) {
  const { author, body, created_at, votes, comment_id } = props.comment

  return (
    <li className="commentCard">
      <p className="commentAuthor">Author: {author}</p>
      <p className="commentBody">{body}</p>
      <p className="commentDate">{created_at}</p>
      <Voter className="commentVote" votes={votes} comment_id={comment_id} />
    </li>
  )
}
