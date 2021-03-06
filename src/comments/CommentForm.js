import React from 'react'
import {connect} from 'react-redux'
import addComment from '../actions/addComment'
import "../styles/CommentForm.css"

class CommentForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {content: ""}
    console.log("Hello from CommentForm.js")

  }

  handleSubmit(e) {
    e.preventDefault()
    const comment = {...this.state, post_id: this.props.post.id}
    this.props.addComment(comment)
    this.setState({content: this.state.content})
    this.setState({
      content: ''
    });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    return (
      <form 
        className="comment__form" 
        onSubmit={this.handleSubmit.bind(this)}
      >

        <input 
        
          className="commentForm__input" 
          type="text" 
          onChange={this.handleChange.bind(this)} 
          value={this.state.content} 
          name="content"
          placeholder="Add comment..."
        />

        <input 
          className="commentForm__submit" 
          type="submit"
        />
      </form>
    )
  }
}

export default connect(null, {addComment})(CommentForm)
