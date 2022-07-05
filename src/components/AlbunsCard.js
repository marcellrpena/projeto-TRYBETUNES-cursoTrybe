import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbunsCard extends React.Component {
  render() {
    const {
      lastSearch,
      albumList,
    } = this.props;
    return (
      <section>
        <div>
          <p>{`Resultado de álbuns de: ${lastSearch}`}</p>
          <section>
            { albumList.map((album) => (
              <Link
                data-testid={ `link-to-album-${album.collectionId}` }
                key={ album.collectionId }
                to={ `/album/${album.collectionId}` }
              >
                <div>
                  <img src={ album.artworkUrl100 } alt={ album.collectionName } />
                  <h1>{ album.collectionName }</h1>
                  <h4>{ album.artistName }</h4>
                </div>
              </Link>))}
          </section>
        </div>
      </section>
    );
  }
}

AlbunsCard.propTypes = {
  albumList: PropTypes.shape([]).isRequired,
  lastSearch: PropTypes.string.isRequired,
};

export default AlbunsCard;