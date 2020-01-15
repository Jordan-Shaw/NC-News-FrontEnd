import React from 'react'
// import { Link } from '@reach/router';

export default function Header(username) {
  return (
    <header>
      <h1>Northcoders News</h1>
      {/* <nav>
        <Link to="/" className="navItem">Home</Link>
        <Link to="/articles" className="navItem">Articles</Link>
        <Link to={`/users/${username}`} className="navItem">Profile</Link>
      </nav> */}
    </header>
  )
}
