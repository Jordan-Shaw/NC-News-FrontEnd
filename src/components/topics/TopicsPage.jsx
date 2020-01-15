import React from 'react'
import ArticleList from '../articles/ArticleList'

export default function TopicsPage(props) {
  const { topic } = props
  return (
    <div>
      <h2>Articles</h2>
      <h3>Here are our articles relating to {topic}. Use the buttons below to view articles relating to a different topic</h3>
      <ArticleList topic={topic} />
    </div>
  )
}
