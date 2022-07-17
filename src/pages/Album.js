import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';
import '../css/album.css';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      albumContent: [],
      loadingMusic: true,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const albumInfo = await getMusics(params.id);
    this.setState({
      albumContent: albumInfo,
      loadingMusic: false,
    });
  }

  render() {
    const { albumContent, loadingMusic } = this.state;
    return (
      <div className="page-body-2">
        <Header />
        {
          loadingMusic ? <p>Carregando...</p> : (
            <div className="main" data-testid="page-album">
              <aside className="info-card">
                <img
                  className="image-card"
                  src={ albumContent[0].artworkUrl100 }
                  alt={ albumContent[0].collectionName }
                />
                <h1 data-testid="album-name">{ albumContent[0].collectionName }</h1>
                <h4 data-testid="artist-name">{ albumContent[0].artistName }</h4>
              </aside>
              <aside className="music-list">
                { albumContent.map((album, index) => (
                  index > 0 && (
                    <div key={ album.trackId }>
                      <MusicCard album={ album } />
                      <hr />
                    </div>)))}
              </aside>
            </div>)
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
