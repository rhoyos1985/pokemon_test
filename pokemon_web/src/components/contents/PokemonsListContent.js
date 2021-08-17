import React from 'react';
import { useHistory } from 'react-router-dom';

import SortableData from './functions/SorteableData';

const PokemonsListContent = ({ pokemons }) => {

  const { items, reqSort, sortConfig } = SortableData(pokemons)
  const history = useHistory();

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const _handleClick = (pokemon) => {
    history.push({
      pathname: `/detail/${pokemon.id}`
    })
  }

  return(

      items.length === 0
      ? <p>Sorry! <span role="img" aria-label="pensive-face">😔</span>  Results not found!</p>
      :
        <table className="table is-hoverable is-fullwidth ">
          <thead>
            <tr>
              <th>
                <button type="button"
                        onClick={() => reqSort('name')}
                        className={`button is-primary ${getClassNamesFor('name')}`}>
                    Name
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('type_1')}
                        className={`button is-primary ${getClassNamesFor('type_1')}`}>
                      Type 1
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('type_2')}
                        className={`button is-primary ${getClassNamesFor('type_2')}`}>
                    Type 2
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('total')}
                        className={`button is-primary ${getClassNamesFor('total')}`}>
                    Total HP
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('attack')}
                        className={`button is-primary ${getClassNamesFor('attack')}`}>
                    Attack
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('defense')}
                        className={`button is-primary ${getClassNamesFor('defense')}`}>
                    Defense
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('sp_attack')}
                        className={`button is-primary ${getClassNamesFor('sp_attack')}`}>
                    Sp. Attack
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('sp_defense')}
                        className={`button is-primary ${getClassNamesFor('sp_defense')}`}>
                    Sp. Defense
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('speed')}
                        className={`button is-primary ${getClassNamesFor('speed')}`}>
                    Speed
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('generation')}
                        className={`button is-primary ${getClassNamesFor('generation')}`}>
                    Generation
                </button>
              </th>
              <th>
                <button type="button"
                        onClick={() => reqSort('legendary')}
                        className={`button is-primary ${getClassNamesFor('legendary')}`}>
                    Legendary
                </button>
              </th>
            </tr>
          </thead>
          <tfoot>
              {items.map(pokemon => (
                    <tr className="App-cursor-pointer"
                        key={pokemon.id}
                        onClick={() => _handleClick(pokemon)}>
                      <td>{pokemon.name}</td>
                      <td>{pokemon.type_1}</td>
                      <td>{pokemon.type_2}</td>
                      <td>{pokemon.total}</td>
                      <td>{pokemon.attack}</td>
                      <td>{pokemon.defense}</td>
                      <td>{pokemon.sp_attack}</td>
                      <td>{pokemon.sp_defense}</td>
                      <td>{pokemon.speed}</td>
                      <td>{pokemon.generation}</td>
                      <td>
                        <span>
                          {pokemon.legendary === true ? "Yes" : "No"}
                        </span>
                      </td>
                    </tr>
                )
              )}
          </tfoot>
        </table>
  );
}

export { PokemonsListContent };
