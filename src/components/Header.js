import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUser } from '../services/userAPI';
import '../css/header.css';
import logo4 from '../images/logo4.png';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const dataUser = await getUser();
    this.setState({
      userName: dataUser.name,
      loading: false,
    });
  }

  render() {
    const { userName, loading } = this.state;
    const { actualPage, history } = this.props;
    const testHistory = history || ' ';
    return (
      <section>
        {
          loading ? <p>Carregando...</p>
            : (
              <div className="header-elements">
                <header
                  className="header-main"
                  data-testid="header-component"
                >
                  <div className="image-logo">
                    <img src={ logo4 } alt="logomarca-Music-tunes" />
                  </div>
                  <div className={ testHistory === '/search' ? 'black' : 'user-name' }>
                    {/* <img src={} alt={ userName } /> */}
                    <h3
                      data-testid="header-user-name"
                    >
                      { userName }
                    </h3>
                  </div>
                </header>
                <nav className="navbar">
                  <div className="max-width">
                    <Link
                      className="decoration"
                      data-testid="link-to-search"
                      to="/search"
                    >
                      <h1
                        className={ actualPage === 'pageSearch' ? 'pageSearch' : 'links' }
                      >
                        Pesquisa
                      </h1>
                    </Link>
                  </div>
                  <div className="max-width">
                    <Link
                      className="decoration"
                      data-testid="link-to-favorites"
                      to="/favorites"
                    >
                      <h1
                        className={ actualPage === 'pageFavorite'
                          ? 'pageFavorite' : 'links' }
                      >
                        Favoritas
                      </h1>
                    </Link>
                  </div>
                  <div className="max-width">
                    <Link
                      className="decoration"
                      data-testid="link-to-profile"
                      to="/profile"
                    >
                      <h1
                        className={ actualPage === 'pagePerfil'
                          ? 'pageSearch' : 'links' }
                      >
                        Perfil
                      </h1>
                    </Link>
                  </div>
                </nav>
              </div>)
        }
      </section>
    );
  }
}

Header.propTypes = {
  actualPage: PropTypes.string,
}.isRequired;

export default Header;
