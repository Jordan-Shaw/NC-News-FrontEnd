import React from 'react'

export default function Homepage(props) {
  const { username } = props
  return (
    <div className="homepageBg">
      <div className="homepageWrap">
        <h2>Hello there!</h2>
        <p className="welcome">Welcome to NC News, we hope you enjoy your stay!</p>
        <br></br>
        <h3 className="loggedInAs">You are logged in as {username}</h3>
        <p className="ps">P.S. try the konami code on the articles page...</p>
      </div>
    </div>
  )
}
