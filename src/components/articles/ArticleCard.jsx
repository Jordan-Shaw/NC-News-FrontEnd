import React from 'react'
import { Link } from "@reach/router"
import Voter from '../general/Voter'

export default function ArticleCard(props) {
  const { article_id, author, comment_count, created_at, title, topic, votes } = props.article

  return (
    <li className="articleCard">
      <div className="topRow">
        <p><Link to={`/articles/${article_id}`} className="title">{`< ${title} />`}</Link></p>
        <p className="author">By <Link to={`/users/${author}`}>{author}</Link></p>
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
