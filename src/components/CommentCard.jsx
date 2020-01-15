import React from 'react'

export default function CommentCard(props) {
  const { author, body, created_at, votes } = props.comment

  return (
    <li className="commentCard">
      <p className="commentAuthor">Author: {author}</p>
      <p className="commentBody">{body}</p>
      <p className="commentDate">{created_at}</p>
      <p className="commentVotes">Votes: {votes}</p>
    </li>
  )
}
