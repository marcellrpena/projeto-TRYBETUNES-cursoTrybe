import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import '../css/musicCard.css';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      check: false,
    };
  }

  async componentDidMount() {
    const { album } = this.props;
    this.setState({ loading: true });
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      check: (
        favoriteSongs.length > 0 ? favoriteSongs
          .some((favorite) => favorite.trackId === album.trackId) : false),
      loading: false,
    });
  }

  /* saveLocalSotorage = (trackId) => {
    const { isChecked } = this.state;
    const favoriteList = JSON.parse(localStorage.getItem('favoriteSongs'));
    if (isChecked) {
      localStorage.setItem('favoriteSongs', JSON.stringify([...favoriteList, trackId]));
    } else {
      delete favoriteList[trackId];
      localStorage.setItem('favoriteSongs', JSON.stringify([...favoriteList]));
    }
  } */

  onCheckFavorite = async ({ target }, album) => {
    this.setState({
      loading: true,
      check: target.checked });
    if (target.checked) {
      /* this.saveLocalSotorage(album.trackId); */
      await addSong(album);
    } else {
      /* this.saveLocalSotorage(album.trackId); */
      await removeSong(album);
    }
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading, check } = this.state;
    const { album } = this.props;
    return (
      <div>
        {
          loading ? <p>Carregando...</p> : (
            <div className="music-style">
              <h4 className="music-name">{album.trackName}</h4>
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
                  id="favorite"
                  data-testid={ `checkbox-music-${album.trackId}` }
                  checked={ check }
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
