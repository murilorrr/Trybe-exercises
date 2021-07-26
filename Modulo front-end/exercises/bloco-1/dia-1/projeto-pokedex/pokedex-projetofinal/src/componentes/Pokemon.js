import React from 'react'

class Pokemon extends React.Component {
  render() {
    const style = {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'space-around',
      'flex': '1 1 0',
      'width': '400px',
      'minWidth': '25%',
      'margin': '10px 10px',
      'border': '1px rgb(212, 0, 0) solid',
      'color': 'rgb(255, 144, 9)',
      'boxShadow': '#1f1c1c 2px 6px 2px 2px',
      'overflow': 'hidden',
      'fontFamily': 'pokemon',
      'letterSpacing': '0.1em',
      'flexDirection': 'row'
    }

    const styleText = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#212020',
    }

    const { name, id, type, image } = this.props.pokemon
    return (
    <div className={`pokemon ${type.toLowerCase()} card `} style={style}>
      <div>
        <img className="card-image" src={image} alt={name} />
      </div>
      <div style={styleText}>
        <h2>{id}</h2>
        <h2 className='card-title'>{name}</h2>
        <h2 className={`card-subtitle ${type.toLowerCase()}`}>{type}</h2>
      </div>

    </div>
    )
  }
}

export default Pokemon;
