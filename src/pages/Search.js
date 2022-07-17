import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbunsCard from '../components/AlbunsCard';
import '../css/search.css';

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

  onButtonClick = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    /* const { searchArtist } = this.state; */
    this.setState(async (prev) => {
      const list = await searchAlbumsAPI(prev.searchArtist);
      this.setState({
        lastSearch: prev.searchArtist,
        searchArtist: '',
        searchList: list,
        loading: false,
        minLength: true,
      });
    });
  }

  render() {
    const { minLength, searchArtist, searchList, loading, lastSearch } = this.state;
    return (
      <div className="page-body-2" data-testid="page-search">
        <Header />
        <main>
          <form className="form-search">
            <label htmlFor="search">
              <input
                data-testid="search-artist-input"
                className="form-control"
                id="search"
                type="text"
                placeholder="Nome do Artista"
                value={ searchArtist }
                onChange={ this.onInputChange }
              />
            </label>
            <button
              type="submit"
              className="btn btn-primary"
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
                            albumList={ searchList }
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
