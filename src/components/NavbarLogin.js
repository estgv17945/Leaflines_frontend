import React from 'react'

function NavbarLogin() {
  // Conteúdo do navbar para as outras páginas
  return (
    <nav className="navbar">
      <div className="container-fluid px-5">
        <div>
        <a className="navbar-brand" href="/">
          <img src="/imagens/logo.png" width="150px" className="d-inline-block align-top" alt="Logo MovieRise" />
        </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLogin