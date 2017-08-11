// Code Invitation Component Here
import React from "react"

class Invitation extends React.Component {
  constructor() {
    super()

  }
  render(){
    console.log(this.props.children)
    return(
      <div>
      <h1>You've been invited!</h1>
      <div>{this.props.children}</div>
      </div>
    )
  }
}

export default Invitation
