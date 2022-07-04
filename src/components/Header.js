import React from 'react';
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
              <header
                data-testid="header-component"
              >
                <div>
                  {/* <img src={} alt={ userName } /> */}
                  <h3 data-testid="header-user-name">{ userName }</h3>
                </div>
              </header>)
        }
        <nav>Barra de navegação</nav>
      </section>
    );
  }
}

export default Header;
