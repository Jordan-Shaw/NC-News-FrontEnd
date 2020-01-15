import React from 'react'

export default function AddComment({ handleCommentSubmission, username, article_id }) {
  return (
    <form onSubmit={(event) => {
      const { value } = event.target.children[0]

      handleCommentSubmission(username, value, article_id);
      event.preventDefault();
    }}>
      Comment: <textarea placeholder="Enter your comment here" required />
      <input type="submit" value="submit" />
    </form>
  )
}
