import React from 'react'

export default function ErrorPage(props) {
  const { status, msg } = props.err
  return (
    <div>
      {status}: {msg}
    </div>
  )
}
