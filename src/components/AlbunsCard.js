import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbunsCard extends React.Component {
  render() {
    const {
      lastSearch,
      searchList,
    } = this.props;
    return (
      <section>
        <div>
          <p>{`Resultado de álbuns de: ${lastSearch}`}</p>
          <section>
            { searchList.map((album) => (
              <Link
                data-testid={ `link-to-album-${album.collectionId}` }
                key={ album.collectionId }
                to={ `/album/${album.collectionId}` }
              >
                <div>{ album.collectionName }</div>
              </Link>))}
          </section>
        </div>
      </section>
    );
  }
}

AlbunsCard.propTypes = {
  searchList: PropTypes.arrayOf.isRequired,
  lastSearch: PropTypes.string.isRequired,
};

export default AlbunsCard;
