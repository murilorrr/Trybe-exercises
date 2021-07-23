import React from 'react'

class Pokemon extends React.Component {
  render() {
    const style = {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'space-around',
      'flex': '1 1 0',
      'height': '200px',
      'width': '200px',
      'minWidth': '25%',
      'margin': '10px 10px',
      'border': '1px rgb(212, 0, 0) solid',
      'borderRadius': '7px',
      'backgroundColor': 'rgb(141, 13, 13)',
      'color': 'rgb(255, 144, 9)',
      'boxShadow': 'rgb(192, 20, 20) 2px 6px 2px 2px',
    }
    const { name, id, type, averageWeight: {value, measurementUnit}, image } = this.props.pokemon
    return (
    <div className='pokemon' style={style}>
      <img src={image} alt={name} />
      <h2>{id}</h2>
      <h2>{type}</h2>
      <h2>{measurementUnit}</h2>
      <h2>{value}</h2>
    </div>
    )
  }
}

export default Pokemon;
