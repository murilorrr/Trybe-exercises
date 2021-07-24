import React from 'react'
import Pokemon from './Pokemon'
import './Pokemon.css'

class Pokedex extends React.Component {

  render() {
    const { pokemons } = this.props
    return (

      <div className='pokedex'>
        {pokemons
          .map((pokemon) => 
            <Pokemon pokemon={pokemon} className='card' key={pokemon.id} />
          )
        }
      </div>
    );
  }
}

export default Pokedex;