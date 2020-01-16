import React from 'react'
import ArticleList from './ArticleList'

export default function ArticlePage() {
  return (
    <div className="articlePageWrapper">
      <div class="bgimg-1">
        <div className="caption1">
          <span className="border">ARTICLES</span>

          <div className="caption2">
            <p className="border">↓</p>
          </div>
        </div>
      </div>
      <div className="bgimg-2">
        <div className="bg-img-2Wrapper">
          <div className="h3Box">
          <h3 className="h3Border">Here are all of our articles. Use the buttons below to see articles relating to specific topics.
          </h3>
          </div>
        <ArticleList className="ArticleListWrapper"/>
        </div>
      </div>
    </div>
  )
}
