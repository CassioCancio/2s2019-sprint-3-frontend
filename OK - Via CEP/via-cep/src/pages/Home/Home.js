import React, { Component } from 'react';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            listaCep: [
                {
                    cep: "",
                    logradouro: "",
                    complemento: "",
                    bairro: "",
                    localidade: "",
                    uf: "",
                    unidade: "",
                    ibge: "",
                    gia: ""
                }
            ],
            CEPdigitado: ''
        };
    }

    componentDidMount() {
        fetch('https://viacep.com.br/ws/' + this.state.CEPdigitado + '/json/')
            .then(response => response.json())
            .then(data => this.setState({ listaCep: data }));
    }

    atualizarTabela = (event) => {
        event.preventDefault();
        fetch('https://viacep.com.br/ws/' + this.state.CEPdigitado + '/json/')
            .then(response => response.json())
            .then(data => this.setState({ listaCep: data }))
            .then(this.setState({ erro: '' }))
            .catch(erro => { 
                this.setState({ erro: "CEP inválido"});
                this.setState({ listaCep: ""});
                console.log(erro);
            });
    }

    atualizarCEP = (event) => {
        this.setState({ CEPdigitado: event.target.value })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Buscar CEP</h1>
                        <div className="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>Logradouro</th>
                                        <th>Complemento</th>
                                        <th>Bairro</th>
                                        <th>Localidade</th>
                                        <th>UF</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    <tr>
                                        <td>{this.state.listaCep.logradouro}</td>
                                        <td>{this.state.listaCep.complemento}</td>
                                        <td>{this.state.listaCep.bairro}</td>
                                        <td>{this.state.listaCep.localidade}</td>
                                        <td>{this.state.listaCep.uf}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="container" id="conteudoPrincipal-cadastro">

                            <form>
                                <div className="container">
                                    <input
                                        type="text"
                                        className="className__categoria"
                                        id="input__categoria"
                                        placeholder="insira o CEP"
                                        onInput={this.atualizarCEP}
                                    />
                                    <button
                                        id="btn__cadastrar"
                                        onClick={this.atualizarTabela}
                                        className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                    >
                                        Buscar
                                    </button>
                                    <p
                                        className="text__login"
                                        style={{ color: "red", textAlign: "center" }}
                                    >
                                        {this.state.erro}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Home;