import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <main>
          Conteúdo
          <div>
            <input type="text" placeholder="Nome do Artista" />
            <button type="button">Procurar</button>
          </div>
        </main>
      </div>
    );
  }
}

export default Search;
