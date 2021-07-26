import React from 'react';

class Button extends React.Component {

  style={
    marginLeft: '5px'
  }

  render() {
    return (
      <button style={this.style} className={`btn ${this.props.children.toLowerCase()}`} onClick={this.props.onClick}>{this.props.id}</button>
    )
    
  }
}

export default Button;