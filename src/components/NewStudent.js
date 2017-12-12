import React, { Component } from 'react';

class NewStudent extends Component {
	constructor(props){
		super(props)

	}

	render() {
		return (
			<div>
				<h4>Add A New Student:</h4>
			  <form onSubmit={this.props.handleSubmit}>
			    <input type="text" name="nameField" placeholder="Name" /> <br/>
			    <input type="text" name="imageField" placeholder="Image URL" /> <br/>
			    <input type="text" name="bioField" placeholder="Bio" /> <br/>
			    <button>Submit!</button>
			  </form>
		  </div>
	  )
	}
}

export default NewStudent;