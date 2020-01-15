import React from 'react'
import ArticleList from './ArticleList'

export default function ArticlePage() {
  return (
    <div>
      <div class="bgimg-1">
        <div className="caption">
          <span className="border">ARTICLES</span>
        </div>
      </div>
      <h2 class="border">ARTICLES</h2>
      <h3>Here are all of our articles. Use the buttons below to see articles relating to specific topics.</h3>
      <ArticleList />
    </div>
  )
}
