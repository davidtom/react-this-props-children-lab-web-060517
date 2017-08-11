// Code ThemedDecoration Component Hereimport React from "react"
import React from "react"

class ThemedDecoration extends React.Component {
  constructor() {
    super()

  }
  render(){

    const childrenWithThemProp = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.theme}>{child}</div>
      );
    });

    return(
      <div>
      {childrenWithThemProp}
      </div>
    )
  }
}

export default ThemedDecoration
