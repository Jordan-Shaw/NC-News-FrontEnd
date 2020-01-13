import React from 'react'
import { Link } from '@reach/router';

export default function Header(username) {
  return (
    <header>
      <h1>Welcome to NC News</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
        <Link to={`/users/${username}`}>Profile</Link>
      </nav>
    </header>
  )
}
