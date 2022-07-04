import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      minLength: true,
      loading: false,
      loged: false,
    };
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
    this.setState({ loading: true })
    const { userName } = this.state;
    await createUser({ name: userName });
    this.setState({
      loading: false,
      loged: true,
    });
  };

  render() {
    const { minLength, userName, loading, loged } = this.state;
    return (
      <div data-testid="page-login">
        {
          loading ? <p>Carregando...</p> : (
            <form>
              { loged && <Redirect to="/search" /> }
              <input
                data-testid="login-name-input"
                type="text"
                name="userName"
                placeholder="Name"
                value={ userName }
                onChange={ this.onInputChange }
              />
              <button
                type="submit"
                name="entrar"
                disabled={ minLength }
                data-testid="login-submit-button"
                onClick={ this.onButtonClick }
              >
                Entrar
              </button>
            </form>)
        }
      </div>
    );
  }
}

export default Login;
