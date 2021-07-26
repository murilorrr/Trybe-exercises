import React from 'react'
import Pokemon from './Pokemon'
import './Pokemon.css'
import Button from './Button'
import pokemons from '../Data'

class Pokedex extends React.Component {

  constructor() {
    super();

    this.pokemonPosterior = this.pokemonPosterior.bind(this);
    this.pokemonAnterior = this.pokemonAnterior.bind(this);
    this.filter = this.filter.bind(this);
    this.resetFilter = this.resetFilter.bind(this)
    this.state = {
      index: 0,
      list: [...pokemons]
    }
  }


  filter(tipo) {
    console.log(tipo);
    const { pokemons } = this.props;
    this.resetFilter();
    const pokemonsFiltrados = pokemons.filter((pokemon) => pokemon.type === tipo )
    this.setState({ list: pokemonsFiltrados });

  }

  resetFilter() {

    this.setState(
      { list: [...pokemons],
      index: 0
      });

  }

  pokemonPosterior() {
    this.setState((estadoAnterior) => ({
      index: estadoAnterior.index + 1
    }));
    if (this.state.index === this.state.list.length -1) {
      this.setState({
        index: 0
      })
    }
  }

  pokemonAnterior() {
    this.setState((estadoAnterior) => ({
      index: estadoAnterior.index - 1
    }));
    if (this.state.index === 0) {
      this.setState({
        index: this.state.list.length -1
      })
    }
  }


  render() {
    const tipos = this.props.pokemons.reduce((acc, cur) => {
      if(!acc.includes(cur.type)) {
        acc.push(cur.type)
      }
      return acc
    }, [])

    const styleButtons = {
      'margin': '5px',
     'display': 'flex',
      'flexDirection': 'row',
      'justifyContent': 'center',
      'alignItems': 'center',
      'width': '99%',
      'backgroundColor': 'grey',
      'padding': '20px'
    }

    return (

      <div className='pokedex'>

        <div style={styleButtons} className='buttonContent'>

          {tipos.map((tipo) => <Button id={tipo} onClick={() => this.filter(tipo)} children={tipo}></Button> )}
          <Button id='Reset' className='btn btn-warnning' onClick={this.resetFilter} children='btn-danger'></Button>

        </div>

        <div className='pokemonContent'>
          <Pokemon pokemon={this.state.list[this.state.index]} className='card' key={this.state.list[this.state.index].id} />
        </div>

        <div>
          <button className='btn btn-success' onClick={() => this.pokemonAnterior()}>Anterior</button>
          <button className='btn btn-success' onClick={() => this.pokemonPosterior()}>Próximo</button>
        </div>

      </div>
    );

  }
}
// Maite maior do mundo (ajudo com function filter)
// https://github.com/tryber/exercise-pokedex-state/blob/mariana-mohr-my-pokedex-state/src/App.js
// Referencia acima da mariana mohr, inicio do state aprendi pelo seu repositório
export default Pokedex;