import React from 'react';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div data-testid="page-profile-edit">
        <form>
          <div>
            {/* <img src={} alt={}/> */}
            <input type="text" placeholder="Insira um Link" />
          </div>
          <label htmlFor="name">
            <h1>Nome</h1>
            <h6>Fique à vontade para usar seu nome social</h6>
            <input type="text" id="name" placeholder="Nome" />
          </label>
          <label htmlFor="email">
            <h1>E-mail</h1>
            <h6>Use seu melhor e-mail</h6>
            <input type="e-mail" id="email" placeholder="usuario@usuario.com.br" />
          </label>
          <label htmlFor="description">
            <h1>Descrição</h1>
            <textarea id="description" placeholder="Sobre mim" />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;
