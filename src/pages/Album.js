import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <div data-testid="page-album">
        <header>cabeçalho</header>
        <nav>Barra de navegação</nav>
        <main>
          Conteúdo
        </main>
      </div>
    );
  }
}

export default Album;
