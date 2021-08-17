import React, { Component } from 'react';


export class SearchForm extends Component {
  state = { inputNamesPokemon: '' };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputNamesPokemon } = this.state;
    fetch(`http://127.0.0.1:5000/api/v1.0/pokemons/${inputNamesPokemon}`)
      .then(res => res.json())
      .then(results => {
        const { pokemons = [] } = results;
        this.props.onResult(pokemons);
      });
  }

  _handleOnChange = (e) => {
    this.setState({inputNamesPokemon: e.target.value})
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              onChange={this._handleOnChange}
              placeholder="Pokemon's name to search..." />
          </div>
          <div className="control">
            <button
              className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
