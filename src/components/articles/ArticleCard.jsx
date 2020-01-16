import React from 'react'
import { Link } from "@reach/router"
import Voter from '../general/Voter'

export default function ArticleCard(props) {
  const { article_id, author, comment_count, created_at, title, topic, votes } = props.article

  return (
    <li className="articleCard">
      <div className="topRow">
        <p className="title"><Link to={`/articles/${article_id}`}>{title}</Link></p>
        <p className="author">By {author}</p>
        <p className="date">{created_at} </p>
      </div>
      <div className="bottomRow">
        <p className="comments">{comment_count} comments</p>
        <Voter votes={votes} article_id={article_id} />
        <p className="topic">Topic: {topic}</p>
      </div>
    </li>
  )
}
