import React from 'react'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {

  render() {
    const { pokemons } = this.props
    const retorno = pokemons.map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />
    )
    return (

      <div className='pokedex'>
        {retorno}
      </div>
    );
  }
}

export default Pokedex;