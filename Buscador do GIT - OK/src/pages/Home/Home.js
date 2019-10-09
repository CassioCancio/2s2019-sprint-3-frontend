import React, { Component } from 'react';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            listaRepositorio:
                [{
                    id: "",
                    name: "",
                    description: "",
                    created_at: "",
                    size: ""
                }]
            ,
            nomeUsuario: ''
        };
    }

    atualizarTabela = (event) => {
        event.preventDefault();
        fetch('https://api.github.com/users/'+this.state.nomeUsuario+'/repos')
            .then(response => response.json())
            .then(data => this.setState({ 
                listaRepositorio: data }))
            .then(this.setState({ erro: '' }))
            .then(data => console.log(data))
            .catch(erro => { 
                this.setState({ erro: "Usuário inválido"});
                this.setState({ listaRepositorio: ""});
                console.log(erro);
            });
    }

    atualizarNome = (event) => {
        this.setState({ nomeUsuario: event.target.value })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Buscador do GIT</h1>
                        <div className="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Data de Criação</th>
                                        <th>Size</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    {this.state.listaRepositorio.map(element =>{
                                    return(
                                    <tr>
                                        <td>{this.state.listaRepositorio.id}</td>
                                        <td>{this.state.listaRepositorio.name}</td>
                                        <td>{this.state.listaRepositorio.description}</td>
                                        <td>{this.state.listaRepositorio.created_at}</td>
                                        <td>{this.state.listaRepositorio.size}</td>
                                    </tr>
                                )
                            })}
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
                                        placeholder="Insira o nome do usuário"
                                        onInput={this.atualizarNome}
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