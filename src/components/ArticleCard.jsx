import React from 'react'
import { Link } from "@reach/router"

export default function ArticleCard(props) {
  const { article_id, author, comment_count, created_at, title, topic, votes } = props.article

  return (
    <li className="articleCard">
      <p className="title"><Link to={`/articles/${article_id}`}>{title}</Link></p>
      <p className="author">By {author}</p>
      <p className="date">{created_at} </p>
      <p className="comments">{comment_count} comments</p>
      <p className="votes">Votes: {votes}</p>
      <p className="topic">Topic: {topic}</p>
    </li>
  )
}
