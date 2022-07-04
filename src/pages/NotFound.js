import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div data-testid="page-not-found">
        <h1>Ops!</h1>
        <h2>A Página que você está procurando não foi encontrada.</h2>
      </div>
    );
  }
}

export default NotFound;
