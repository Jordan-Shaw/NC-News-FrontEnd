import React from 'react'

export default function CommentDeleter({ comment_id, comment, handleCommentDeletion }) {
  return (
    <button onClick={() => {
      if (window.confirm("Are you sure you want to delete this comment?")) {
        handleCommentDeletion(comment_id, comment)
      }
    }}>
      <span role="img" aria-label="delete comment" className="deleteCommentButton">❌</span>
    </button>
  )
}
