import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';

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
    return (
      <section>
        {
          loading ? <p>Carregando...</p>
            : (
              <div>
                <header
                  data-testid="header-component"
                >
                  <div>
                    {/* <img src={} alt={ userName } /> */}
                    <h3 data-testid="header-user-name">{ userName }</h3>
                  </div>
                </header>
                <nav>
                  <Link data-testid="link-to-search" to="/search"><h1>Pesquisa</h1></Link>
                  <Link
                    data-testid="link-to-favorites"
                    to="/favorites"
                  >
                    <h1>Favoritas</h1>
                  </Link>
                  <Link
                    data-testid="link-to-profile"
                    to="/profile"
                  >
                    <h1>Perfil</h1>
                  </Link>
                </nav>
              </div>)
        }
      </section>
    );
  }
}

export default Header;
