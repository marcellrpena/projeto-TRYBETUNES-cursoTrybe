import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbunsCard from '../components/AlbunsCard';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      searchArtist: '',
      minLength: true,
      searchList: [],
      loading: false,
      lastSearch: '',
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

  onButtonClick = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { searchArtist } = this.state;
    const list = await searchAlbumsAPI(searchArtist);
    this.setState((prev) => ({
      lastSearch: prev.searchArtist,
      searchArtist: '',
      searchList: list,
      loading: false,
      minLength: true,
    }));
  }

  render() {
    const { minLength, searchArtist, searchList, loading, lastSearch } = this.state;
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
              onClick={ this.onButtonClick }
            >
              Pesquisar
            </button>
          </form>
          {
            loading ? <p>Carregando...</p> : (
              <div>
                {
                  lastSearch !== '' && (
                    <div>
                      {
                        searchList.length > 0 ? (
                          <AlbunsCard
                            searchList={ searchList }
                            lastSearch={ lastSearch }
                          />
                        ) : <p>Nenhum álbum foi encontrado</p>
                      }
                    </div>
                  )
                }
              </div>)
          }
        </main>
      </div>
    );
  }
}

export default Search;
