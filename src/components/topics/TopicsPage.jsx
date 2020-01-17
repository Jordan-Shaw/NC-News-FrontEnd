import React from 'react'
import ArticleList from '../articles/ArticleList'
import { Link } from '@reach/router'

export default function TopicsPage(props) {
  const { topic } = props
  return (
    <div className="TopicsPage">
      <h2>Articles</h2>
      <h3>Here are our articles relating to {topic}. Use the button below to view articles relating to all topics</h3>
        <p key="allTopicsButton" className="topics"><Link to={`/articles/`} className="topics">{"<"} all topics {'/>'}</ Link></p>
      <ArticleList topic={topic} />
    </div>
  )
}
