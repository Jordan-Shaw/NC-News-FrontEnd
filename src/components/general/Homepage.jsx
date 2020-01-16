import React from 'react'

export default function Homepage(props) {
  const { username } = props
  return (
    <div className="homepageBg">
      <div className="homepageWrap">
        <h2>Hello there!</h2>
        <p>Welcome to NC News, we hope you enjoy your stay!</p>
        <br></br>
        <h3>You are logged in as {username}</h3>
      </div>
    </div>
  )
}
