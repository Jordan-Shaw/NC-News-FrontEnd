import React from 'react'
import { Link } from "@reach/router"
import Voter from '../general/Voter'

export default function ArticleCard(props) {
  const { article_id, author, comment_count, created_at, title, topic, votes } = props.article

  return (
    <li className="articleCard">
      <div className="cardTop">
        <p className="articleTitle"><Link to={`/articles/${article_id}`} className="title">{`< ${title} />`}</Link></p>
        <p className="author">By <Link to={`/users/${author}`}>{author}</Link></p>
        <p className="date">{created_at} </p>
        <p className="comments">{comment_count} comments</p>
        <p className="topic">Topic: {topic}</p>
      </div>
        <Voter votes={votes} article_id={article_id} className="voterVotes"/>
    </li>
  )
}
