import React, {Component, Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './Header';
import Tabela from './Tabela';
import Formulario from './Formulario';


class App extends Component {
  
  state = {
    autores: [
      {
          nome: 'Marcos',
          livro: 'React',
          preco: 50.00
      },
      {
          nome: 'Isaac',
          livro: 'Desenho',
          preco: 90.00
      },
      {
          nome: 'Pedro',
          livro: 'Logica',
          preco: 25.00
      },
      {
          nome: 'Amanda',
          livro: 'Culinaria',
          preco: 150.00
      },
    ]
  }

  removeAutor = index =>{

    const {autores} = this.state;

    this.setState({
      autores : autores.filter((autor, posicaoAtual) => {
        return posicaoAtual !== index;
      })
    })
  }

  submitListen = autor => {
    this.setState({
      autores:[...this.state.autores, autor]
    })
  }
  render(){
    return (
        <Fragment>
          <Header />
          <div className="container mb-10">
            <Tabela autores = {this.state.autores} removeAutor = {this.removeAutor} />
            <Formulario submitListen={this.submitListen} />
          </div>
        </Fragment>
     
    );
  }
  
}

export default App;
