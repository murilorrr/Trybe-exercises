// src/NumberClicks
import React from 'react';
import { connect } from 'react-redux';
class NumberClicks extends React.Component {
  render() {
    return <div>{this.props.counter}</div>;
  }
}

const mapStateToProps = ({clickReducer}) => ({
  counter: clickReducer.counter});

export default connect(mapStateToProps)(NumberClicks);