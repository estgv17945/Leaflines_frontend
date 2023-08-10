import React, { } from "react"

function Footer() {
  return (
    <div>
      <section id="footer">
        <div id="footer-top">
          <div className="container">
            <hr className="hline" />
            <img class="imgfooter" src="/imagens/Logo.png" alt="LogoFooter" className="LogoFooter" />
            <div className="row">
              <div className="col-md-3">
                <br />
                <p>
                  A Leaf Lines é uma marca de desenhos realistas personalizados
                </p>
              </div>
              <div className="col-md-3">
                <br />
                <h5>Links
                  <img src="/imagens/Linha.png" alt="ImagemLinha" class="ImagemLinha" />
                </h5>
                <ul className="list-group list-group">
                  <li className="nav"><a className="nav-link" href="#home">Início</a></li>
                  <li className="nav"><a className="nav-link" href="#sobre">Sobre</a></li>
                  <li className="nav"><a className="nav-link" href="#loja">Loja</a></li>
                  <li className="nav"><a className="nav-link" href="#portfolio">Portfólio</a></li>
                  <li className="nav"><a className="nav-link" href="#testemunhos">Testemunhos</a></li>
                  <li className="nav"><a className="nav-link" href="#contactos">Contactos</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <br />
                <h5>Loja
                  <img src="/imagens/Linha.png" alt="ImagemLinha" class="ImagemLinha" />
                </h5>
                <ul className="list-group list-group-flush">
                  <li className="nav"><a className="nav-link" href="#loja">Retratos</a></li>
                  <li className="nav"><a className="nav-link" href="#loja">Animais</a></li>
                  <li className="nav"><a className="nav-link" href="#loja">Objetos</a></li>
                  <li className="nav"><a className="nav-link" href="#loja">Minimalistas</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <br />
                <h5>Segue-me
                  <img src="/imagens/Linha.png" alt="ImagemLinha" class="ImagemLinha" />
                </h5>
                <a href="https://www.facebook.com/desenhosleaflines"><i className="bx bxl-facebook" /></a>
                <a href="https://www.instagram.com/desenhosleaflines"><i className="bx bxl-instagram" /></a>
                <a href="mailto:desenhosleaflines@gmail.com"><i className="bx bxs-envelope" /></a>
                <br />
                <br />
                <ul className="lista">
                  <p className="redes">@leaflines</p>
                  <p className="redes">desenhosleaflines@gmail.com</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-bottom">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <p className="mb-0">© Leaf Lines. Todos os direitos reservados</p>
              </div>
              <div className="col-auto">
                <p className="mb-0">Desenvolvido por Inês Mateus</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer