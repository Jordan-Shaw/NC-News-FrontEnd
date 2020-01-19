import React from 'react'
import ArticleList from '../articles/ArticleList'
import { Link } from '@reach/router'

export default function TopicsPage(props) {
  const { topic } = props
  return (
    <div className="TopicsPage">
      <div className="topicsBg">
        <div className="caption2">
          <h3 className="topicsSubheading">
          Scroll down to view our articles relating to {topic}.
          </h3>
        </div>
      </div>
      <div className="allTopicsWrapper">
        <h3 className="topicsSubheading">
          Otherwise, use the button below to view articles relating to all topics
          </h3>
      <p key="allTopicsButton" className="topics">
        <Link to={`/articles/`} className="topics">
          {"<"} all topics {'/>'}
        </ Link>
      </p>
      </div>
      <ArticleList topic={topic} />
    </div>
  )
}
