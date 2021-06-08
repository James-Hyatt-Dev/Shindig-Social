import React from 'react'



class PostFormComponent extends React.Component {


  handleSubmit(e) {
    e.preventDefault()
    this.props.submitCallback(this.props.post)
  }

  handleChange = (e) => {this.props.updateStateInParent({[e.target.name]: e.target.value})}

  render = () => {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange} value={this.props.post && this.props.post.body} name="name"/>

        <input type="submit"/>
      </form>
  )
  }

}

export default PostFormComponent