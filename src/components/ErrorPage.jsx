import React from 'react'

export default function ErrorPage(props) {
  if (!props.err) {
    return (<div>
      404: Page not found :(
    </div>)
  } else {
    const { status, msg } = props.err
    return (
      <div>
        {status}: {msg}
      </div>
    )
  }
}
