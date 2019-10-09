import React, { Component } from 'react';
import Axios from 'axios';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            listaMarcas: [],
            listaModelos: [
                {modelos: [
                    { nome: "Integra GS 1.8", codigo: 1 },
                    { nome: "Legend 3.2\/3.5", codigo: 2 },
                    { nome: "NSX 3.0", "codigo": 3 }]},
                {anos: [
                    { nome: "1998 Gasolina", codigo: "1998-1" },
                    { nome: "1997 Gasolina", codigo: "1997-1" },
                    { nome: "1996 Gasolina", codigo: "1996-1" },
                    { nome: "1995 Gasolina", codigo: "1995-1" },
                    { nome: "1994 Gasolina", codigo: "1994-1" },
                    { nome: "1993 Gasolina", codigo: "1993-1" },
                    { nome: "1992 Gasolina", codigo: "1992-1" },
                    { nome: "1991 Gasolina", codigo: "1991-1" }]}
            ],
            idMarca: ""
        }};
    

    componentDidMount() {
        Axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
            .then(data => {
                this.setState({ listaMarcas: data.data });
                console.log(data);
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    atualizarTabela = (event) => {
        event.preventDefault();
        console.log(this.state.idMarca)
        fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas/1/modelos')
            .then(response => response.json())
            .then(data => this.setState({
                listaModelos: data
            }))
            .then(this.setState({ erro: '' }))
            .then(data => console.log(data))
            .catch(erro => {
                this.setState({ erro: "Carro inválido" });
                console.log(erro);
            });
    }

    atualizarMarca = (event) => {
        this.setState({ idMarca: event.target.value })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Buscador de carros</h1>
                        <div className="container" id="conteudoPrincipal-lista">
                            <div className="container" id="conteudoPrincipal-cadastro">
                                <form>
                                    <div className="container">
                                        <select onInput={this.atualizarMarca}>
                                            {this.state.listaMarcas.map(element => {
                                                return (
                                                    <option value={element.codigo}>{element.nome}</option>
                                                )
                                            })}
                                        </select>
                                        <button
                                            id="btn__cadastrar"
                                            onClick={this.atualizarTabela}
                                            className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                        >
                                            Buscar
                                    </button>
                                    </div>
                                </form>
                            </div>

                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                    </tr>
                                </thead>
                                <tbody id="tabela-lista-corpo">
    '                               {this.state.listaModelos.map(element => {
                                        if (element.modelos != undefined){
                                            element.modelos.map(modelo => {
                                                return (
                                                    <tr>
                                                        <td>{modelo.codigo}</td>
                                                        <td>{modelo.nome}</td>
                                                    </tr>
                                                )}
                                            )
                                        }
                                    })
                                    }



                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Home;