import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div data-testid="page-search">
        <header>cabeçalho</header>
        <nav>Barra de navegação</nav>
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
