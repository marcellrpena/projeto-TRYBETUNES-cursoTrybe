import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/albunsCard.css';

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
          <section className="albuns-card">
            { albumList.map((album) => (
              <Link
                className="text-style"
                data-testid={ `link-to-album-${album.collectionId}` }
                key={ album.collectionId }
                to={ `/album/${album.collectionId}` }
              >
                <div className="card">
                  <img
                    className="image-card"
                    src={ album.artworkUrl100 }
                    alt={ album.collectionName }
                  />
                  <h4>{ album.collectionName }</h4>
                  <h6>{ album.artistName }</h6>
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
