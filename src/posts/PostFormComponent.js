import React from 'react'
// stateless component #3

class PostFormComponent extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    this.props.submitCallback(this.props.post)
  }

  handleChange = (e) => {
    this.props.updateStateInParent({[e.target.name]: e.target.value})}

  render = () => {

    return (

      <form 
        className="postForm__component" 
        onSubmit={this.handleSubmit.bind(this)}>

        <input 
          className="postForm__input"
          type="text" 
          onChange={this.handleChange} 
          value={this.props.post && this.props.post.body} 
          name="body"
          placeholder="what's happening...?"
        />

        <input
          className="postForm__submit"
          type="submit" 
        />
      </form>
    )
  }
}    console.log("Hello from PostFormComponent.js")


export default PostFormComponent

