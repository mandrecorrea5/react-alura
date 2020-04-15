import React, { Component } from 'react';

class Forumlario extends Component{

    constructor(props){
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInicial;
    }

    inputListen = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        })
    }

    submitForm = () => {
        this.props.submitListen(this.state);
        this.setState(this.stateInicial);
    }

    render(){

        const { nome, livro, preco } = this.state;
        return(
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input className="validate" type="text" name="nome" id="nome" value={nome} onChange={this.inputListen} />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input className="validate" type="text" name="livro" id="livro" value={livro} onChange={this.inputListen} />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input className="validate" type="text" name="preco" id="preco" value={preco} onChange={this.inputListen} />
                    </div>

                    <div className="input-field col s4">
                        <button className="waves-effect waves-light btn indigo lighten-2" onClick={this.submitForm} type="button">Salvar</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Forumlario;