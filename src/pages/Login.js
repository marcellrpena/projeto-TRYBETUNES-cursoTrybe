import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import '../css/login.css';
import logo5 from '../images/logo5.png';

class Login extends React.Component {
  mounted = false;

  constructor() {
    super();
    this.state = {
      userName: '',
      minLength: true,
      loading: false,
      loged: false,
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onInputChange = ({ target }) => {
    const MIN_CHAR = 3;
    this.setState(({
      userName: target.value,
      minLength: target.value.length < MIN_CHAR,
    }));
  };

  onButtonClick = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { userName } = this.state;
    await createUser({ name: userName });
    if (this.mounted) {
      this.setState({
        loading: false,
        loged: true,
      });
    }
  };

  render() {
    const { minLength, userName, loading, loged } = this.state;
    return (
      <div data-testid="page-login">
        {
          loading ? <p>Carregando...</p> : (
            <div className="page-body">
              <img className="image-position" src={ logo5 } alt="Logomarca Music Tunes" />
              <form className="form-login">
                { loged && <Redirect to="/search" /> }
                <label htmlFor="login" className="form-floating mb-3">
                  <input
                    className="form-control input-name"
                    data-testid="login-name-input"
                    type="text"
                    id="login"
                    name="userName"
                    placeholder="Name"
                    value={ userName }
                    onChange={ this.onInputChange }
                  />
                  <label htmlFor="login">
                    Digite seu Nome
                    <input className="blank" />
                  </label>
                </label>
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  name="entrar"
                  disabled={ minLength }
                  data-testid="login-submit-button"
                  onClick={ this.onButtonClick }
                >
                  Entrar
                </button>
              </form>
            </div>
          )
        }
      </div>
    );
  }
}

export default Login;
