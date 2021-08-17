import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { ButtonBackToHome } from '../components/contents/ButtonBackToHome'
import { Title } from '../components/contents/Title'
import { PokemonsListContent } from '../components/contents/PokemonsListContent'

export class Detail extends Component {

  static propTypes = {
    //props match es un objeto de react router que contiene un objeto con todos los parametros de la url
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { pokemon: {}, pokemons: [] };

  _fetchPokemon({ id }) {
    console.log(id);
    fetch(`http://127.0.0.1:5000/api/v1.0/pokemons/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ pokemon: data.pokemon, pokemons: data.pokemons });
      });
  }

  _goBack() {
    window.history.back();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this._fetchPokemon({ id });
  }

  _renderComponent() {
    const { name, type_1, type_2, total, attack, defense, sp_attack, sp_defense, speed, generation, legendary } = this.state.pokemon;
    const pokemons = this.state.pokemons

    return (
      <div className="App-pokemon-detail">
        <ButtonBackToHome />
        <h1>{ name }</h1>
        <h3> Type 1: {type_1}</h3>
        <span>Type 2: {type_2}</span>
        <span>Attack: {attack}</span>
        <span>Defense: {defense}</span>
        <span>Sp. Attack: {sp_attack}</span>
        <span>Sp. Defense: {sp_defense}</span>
        <span>Speed: {speed}</span>
        <span>Total HP: {total}</span>
        <span>Generation: {generation}</span>
        <span>Legendary: {legendary === true ? "It's Legendary" : "It's not Legendary" }</span>
        <div className="columns is-mobile pt-5">
                <div className="column is-fullwidth">
                    <Title>Pokemons With the same Total HP </Title>
                    <PokemonsListContent pokemons={pokemons} />
                </div>
            </div>
      </div>
    );
  }

  render() {
    return this._renderComponent()
  }

}
