import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchArtist: '',
      minLength: true,
    };
  }

  onInputChange = ({ target }) => {
    const MIN_CHAR = 2;
    this.setState(
      {
        searchArtist: target.value,
        minLength: target.value.length < MIN_CHAR,
      },
    );
  }

  render() {
    const { minLength, searchArtist } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <main>
          <form>
            <input
              data-testid="search-artist-input"
              type="text"
              placeholder="Nome do Artista"
              value={ searchArtist }
              onChange={ this.onInputChange }
            />
            <button
              type="submit"
              name="search"
              disabled={ minLength }
              data-testid="search-artist-button"
              /* onClick={ this.onButtonClick } */
            >
              Pesquisar
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default Search;
