import './App.css';
import React from 'react'

class App extends React.Component {
  constructor() {
    super()

    this.add = this.add.bind(this)

    this.state = {
      numeroDeCliques: 0
    }
  }

  add = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return (
      <>
        <button onClick={this.add}>{this.state.numeroDeCliques}</button>
      </>
    );
  }
}

export default App;
