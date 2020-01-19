import React, { Component } from 'react'

export default class AddComment extends Component {
  state = {
    textInput: ""
  }

  render() {
    const { handleCommentSubmission, username, article_id } = this.props
    return (
      <div>
      <form onSubmit={(event) => {
        const { textInput } = this.state;
        handleCommentSubmission(username, textInput, article_id);
        event.preventDefault();
        }} value={this.state.stextInput} className="submitCommentBox">
        <textarea placeholder="Enter your comment here" required onChange={(event) => { return this.handleInput(event) }} />
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }

  handleInput = (event) => {
    const { value } = event.target
    this.setState({ textInput: value })
  }
}
