import './App.css';
import React from 'react';
import Pokedex from './componentes/Pokedex';
import Header from './componentes/Header'
import pokemons from './Data'

class App extends React.Component {
  
  render() {
    return (
      <body>
        <Header img='https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/Pikachu-com-Fundo-Transparente-1024x919.png'></Header>
        <Pokedex pokemons={pokemons}></Pokedex>
      </body>
    )
  }
}

export default App;
