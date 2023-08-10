import React from "react"
import LockOpen from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src="/imagens/Logo.png" alt="mainLogo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#loja">
                  Loja
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfólio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testemunhos">
                  Testemunhos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactos">
                  Contactos
                </a>
              </li>
              <Link to="/login" className="btn btn-outline-light" tabIndex="1" role="button">
                <LockOpen className="logout" />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar