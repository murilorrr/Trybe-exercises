import React from 'react'

class Header extends React.Component {

  style ={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'red',
    heigth: '800px',
    fontFamily: 'pokemon',

  }

  render() {
    return(
      <header style={this.style}>
        <h1 style={{fontSize: '45px',}}>POKEDEX</h1>
        <img src={`${this.props.img}`} alt="pikachu" width='200px' />
      </header>
    )
  }
}

export default Header;