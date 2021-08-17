import React, { Component } from 'react'
import { Title } from '../contents/Title';

import { SearchForm } from '../SearchForm';
import { PokemonsListContent } from '../contents/PokemonsListContent';
import Pager from '../contents/Pager';

class PokemonsListsContainer extends Component {
    state = {
                pokemons: [],
                loading: false,
                currentPage: 1,
                pokemonsPerPage: 10
            };


    constructor(props) {
        super(props)
        this.paginate = this.paginate.bind(this);
    }

    componentDidMount() {
        this.setState((prevState) => ({
            ...prevState,
            loading: true,
        }));
        fetch('http://127.0.0.1:5000/api/v1.0/pokemons')
            .then(res => res.json())
            .then(data => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    pokemons: data
                }));
            });
    }

    //Change page
    paginate(pageNumber) {
        this.setState((prevState) => ({
            ...prevState,
            currentPage: pageNumber
        }));
    }

    _handleResults = (results) => {
      this.setState({ results });
    }

    _renderResult = () => {
      const indexOfLastPokemons = this.state.currentPage * this.state.pokemonsPerPage;
      const indexofFirstPokemon = indexOfLastPokemons - this.state.pokemonsPerPage;
      const pokemons = this.state.results || this.state.pokemons;
      const currentPokemons = pokemons.slice(indexofFirstPokemon, indexOfLastPokemons);

      return (
        <div className="column is-fullwidth">
            <PokemonsListContent pokemons={currentPokemons} />
            <Pager  items={pokemons}
                currentPage={this.state.currentPage}
                perPage={this.state.pokemonsPerPage}
                paginate={this.paginate}/>
        </div>
      )
    }

    render() {
        return (
            <div className="columns is-mobile">
                <div className="column is-fullwidth">
                    <Title>Pokemons</Title>
                    <div className="search-from-wrapper">
                      <SearchForm onResult={this._handleResults}/>
                    </div>
                    {this._renderResult()}
                </div>
            </div>
            )
    }
}

export default PokemonsListsContainer;
