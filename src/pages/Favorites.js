import React from 'react';
import Header from '../components/Header';
import { removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      check: true,
      favoriteList: [],
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const favoriteSongs = await getFavoriteSongs();
    this.setState({
      favoriteList: favoriteSongs,
      loading: false,
    });
  }

  onCheckFavorite = async (album) => {
    this.setState({
      loading: true });
    await removeSong(album);
    this.setState({
      loading: false,
      favoriteList: await getFavoriteSongs(),
    });
  }

  render() {
    const { loading, check, favoriteList } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {
          loading ? <p>Carregando...</p> : (
            <div>
              {
                favoriteList.map((song) => (
                  <div key={ song.trackId }>
                    <h1>{song.trackName}</h1>
                    <audio
                      data-testid="audio-component"
                      src={ song.previewUrl }
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
                        data-testid={ `checkbox-music-${song.trackId}` }
                        checked={ check }
                        onChange={ () => this.onCheckFavorite(song) }
                      />
                    </label>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    );
  }
}

export default MusicCard;
