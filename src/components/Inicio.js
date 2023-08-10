import React, { } from "react"

function Inicio() {
    return (
        
        <section id="inicio">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>
                            A Leaf Lines oferece as melhores opções de desenhos personalizados
                        </h1>
                        <br />
                        <p>
                            Adquira retratos personalizados ou desenhos de objetos das suas
                            fotografias favoritas
                        </p>
                        <br />
                        <a href="#portfolio" className="btn btn-brand">ver portfólio →</a>
                    </div>
                    <div className="col-6">
                        <img class="imgIntro" src="/imagens/DesenhoHome.png" alt="DesenhoHome" className="float-end img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Inicio