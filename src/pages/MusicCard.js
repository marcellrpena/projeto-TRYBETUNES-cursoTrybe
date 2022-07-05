import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      isChecked: false,
    };
  }

  onCheckFavorite = async ({ target }, album) => {
    this.setState({
      loading: true,
      isChecked: target.checked });
    if (target.checked) {
      await addSong(album);
    } else {
      await removeSong(album);
    }
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading, isChecked } = this.state;
    const { album } = this.props;
    return (
      <div>
        {
          loading ? <p>Carregando...</p> : (
            <div>
              <h1>{album.trackName}</h1>
              <audio
                data-testid="audio-component"
                src={ album.previewUrl }
                controls
              >
                <track kind="captions" />
                {
                  `O seu navegador não suporta o elemento{" "}
                  ${<code>audio</code>}.`
                }
              </audio>
              <label htmlFor="favorite">
                Favorita
                <input
                  type="checkbox"
                  data-testid={ `checkbox-music-${album.trackId}` }
                  checked={ isChecked }
                  onChange={ (e) => this.onCheckFavorite(e, album) }
                />
              </label>
            </div>
          )
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  album: PropTypes.shape([]).isRequired,
};

export default MusicCard;
